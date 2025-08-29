import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { z } from "zod";
import prisma from "../config/db";
import { sendMail } from "../utils/mailer";

// Validation schemas
const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
});

const otpSchema = z.object({
  email: z.string().email(),
  otp: z.string().length(6),
});

// Constants
const JWT_SECRET = process.env.JWT_SECRET || "supersecret";
const OTP_EXPIRY = 5 * 60 * 1000; // 5 minutes
const SALT_ROUNDS = 10;

// Helper functions
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();
const isOTPExpired = (date: Date) => Date.now() - date.getTime() > OTP_EXPIRY;

export const startRegistration = async (req: Request, res: Response) => {
  try {
    const { email, password, firstName, lastName } = registerSchema.parse(req.body);

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: "Email already registered",
      });
    }

    await prisma.pendingUser.deleteMany({ where: { email } });

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const otp = generateOTP();

    await prisma.pendingUser.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        otp,
      },
    });

    await sendMail(
      email,
      "Verify Your TTREX Account",
      `Your verification code is: ${otp}`,
      `<h2>Welcome to TTREX!</h2>
       <p>Your verification code is: <strong>${otp}</strong></p>
       <p>This code will expire in 5 minutes.</p>`
    );

    return res.json({
      success: true,
      message: "Verification code sent",
      email,
    });
  } catch (error) {
    console.error("Registration error:", error);
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        error: "Invalid input data",
        details: error,
      });
    }
    return res.status(500).json({
      success: false,
      error: "Registration failed",
    });
  }
};

export const verifyRegistration = async (req: Request, res: Response) => {
  try {
    const { email, otp } = otpSchema.parse(req.body);

    const pendingUser = await prisma.pendingUser.findUnique({
      where: { email },
    });

    if (!pendingUser || isOTPExpired(pendingUser.createdAt)) {
      await prisma.pendingUser.deleteMany({ where: { email } });
      return res.status(400).json({
        success: false,
        error: "Verification code expired",
      });
    }

    if (pendingUser.otp !== otp) {
      return res.status(400).json({
        success: false,
        error: "Invalid verification code",
      });
    }

    const user = await prisma.$transaction(async (tx) => {
      const newUser = await tx.user.create({
        data: {
          email: pendingUser.email,
          password: pendingUser.password,
          firstName: pendingUser.firstName,
          lastName: pendingUser.lastName,
        },
      });

      await tx.pendingUser.delete({
        where: { email },
      });

      return newUser;
    });

    const token = jwt.sign(
      { userId: user.id },
      JWT_SECRET,
      { expiresIn: "30d" }
    );

    return res.json({
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  } catch (error) {
    console.error("Verification error:", error);
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        error: "Invalid input data",
        details: error,
      });
    }
    return res.status(500).json({
      success: false,
      error: "Verification failed",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: "Email and password required",
      });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({
        success: false,
        error: "Invalid credentials",
      });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({
        success: false,
        error: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      { userId: user.id },
      JWT_SECRET,
      { expiresIn: "30d" }
    );

    // Return token in response
    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      error: "Login failed",
    });
  }
};

export const forgotPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        error: "Email is required",
      });
    }

    // Always return same response for security
    const genericResponse = {
      success: true,
      message: "If the email exists, a reset code will be sent",
    };

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.json(genericResponse);

    await prisma.passwordReset.deleteMany({ where: { email } });

    const otp = generateOTP();
    await prisma.passwordReset.create({ data: { email, otp } });

    await sendMail(
      email,
      "Password Reset",
      `Your password reset code is: ${otp}`,
      `<h2>Password Reset Request</h2>
       <p>Your password reset code is: <strong>${otp}</strong></p>
       <p>This code will expire in 5 minutes.</p>
       <p>If you didn't request this, please ignore this email.</p>`
    );

    res.json(genericResponse);
  } catch (error) {
    console.error("Password reset error:", error);
    res.status(500).json({
      success: false,
      error: "Password reset failed",
    });
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { email, otp, newPassword } = req.body;

    if (!email || !otp || !newPassword) {
      return res.status(400).json({
        success: false,
        error: "Email, reset code, and new password required",
      });
    }

    const resetRecord = await prisma.passwordReset.findFirst({
      where: { email, otp },
    });

    if (!resetRecord || isOTPExpired(resetRecord.createdAt)) {
      return res.status(400).json({
        success: false,
        error: "Invalid or expired reset code",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);

    await prisma.user.update({
      where: { email },
      data: { password: hashedPassword },
    });

    await prisma.passwordReset.deleteMany({ where: { email } });

    res.json({
      success: true,
      message: "Password reset successful",
    });
  } catch (error) {
    console.error("Password reset error:", error);
    res.status(500).json({
      success: false,
      error: "Password reset failed",
    });
  }
};

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = exports.forgotPassword = exports.login = exports.verifyRegistration = exports.startRegistration = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const zod_1 = require("zod");
const db_1 = __importDefault(require("../config/db"));
const mailer_1 = require("../utils/mailer");
// Validation schemas
const registerSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8),
    firstName: zod_1.z.string().optional(),
    lastName: zod_1.z.string().optional(),
});
const otpSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    otp: zod_1.z.string().length(6),
});
// Constants
const JWT_SECRET = process.env.JWT_SECRET || "supersecret";
const OTP_EXPIRY = 5 * 60 * 1000; // 5 minutes
const SALT_ROUNDS = 10;
// Helper functions
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();
const isOTPExpired = (date) => Date.now() - date.getTime() > OTP_EXPIRY;
const startRegistration = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, firstName, lastName } = registerSchema.parse(req.body);
        const existingUser = yield db_1.default.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                error: "Email already registered",
            });
        }
        yield db_1.default.pendingUser.deleteMany({ where: { email } });
        const hashedPassword = yield bcrypt_1.default.hash(password, SALT_ROUNDS);
        const otp = generateOTP();
        yield db_1.default.pendingUser.create({
            data: {
                email,
                password: hashedPassword,
                firstName,
                lastName,
                otp,
            },
        });
        yield (0, mailer_1.sendMail)(email, "Verify Your TTREX Account", `Your verification code is: ${otp}`, `<h2>Welcome to TTREX!</h2>
       <p>Your verification code is: <strong>${otp}</strong></p>
       <p>This code will expire in 5 minutes.</p>`);
        return res.json({
            success: true,
            message: "Verification code sent",
            email,
        });
    }
    catch (error) {
        console.error("Registration error:", error);
        if (error instanceof zod_1.z.ZodError) {
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
});
exports.startRegistration = startRegistration;
const verifyRegistration = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, otp } = otpSchema.parse(req.body);
        const pendingUser = yield db_1.default.pendingUser.findUnique({
            where: { email },
        });
        if (!pendingUser || isOTPExpired(pendingUser.createdAt)) {
            yield db_1.default.pendingUser.deleteMany({ where: { email } });
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
        const user = yield db_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            const newUser = yield tx.user.create({
                data: {
                    email: pendingUser.email,
                    password: pendingUser.password,
                    firstName: pendingUser.firstName,
                    lastName: pendingUser.lastName,
                },
            });
            yield tx.pendingUser.delete({
                where: { email },
            });
            return newUser;
        }));
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "30d" });
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
    }
    catch (error) {
        console.error("Verification error:", error);
        if (error instanceof zod_1.z.ZodError) {
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
});
exports.verifyRegistration = verifyRegistration;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                error: "Email and password required",
            });
        }
        const user = yield db_1.default.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(401).json({
                success: false,
                error: "Invalid credentials",
            });
        }
        const isValid = yield bcrypt_1.default.compare(password, user.password);
        if (!isValid) {
            return res.status(401).json({
                success: false,
                error: "Invalid credentials",
            });
        }
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "30d" });
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
    }
    catch (error) {
        console.error("Login error:", error);
        res.status(500).json({
            success: false,
            error: "Login failed",
        });
    }
});
exports.login = login;
const forgotPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const user = yield db_1.default.user.findUnique({ where: { email } });
        if (!user)
            return res.json(genericResponse);
        yield db_1.default.passwordReset.deleteMany({ where: { email } });
        const otp = generateOTP();
        yield db_1.default.passwordReset.create({ data: { email, otp } });
        yield (0, mailer_1.sendMail)(email, "Password Reset", `Your password reset code is: ${otp}`, `<h2>Password Reset Request</h2>
       <p>Your password reset code is: <strong>${otp}</strong></p>
       <p>This code will expire in 5 minutes.</p>
       <p>If you didn't request this, please ignore this email.</p>`);
        res.json(genericResponse);
    }
    catch (error) {
        console.error("Password reset error:", error);
        res.status(500).json({
            success: false,
            error: "Password reset failed",
        });
    }
});
exports.forgotPassword = forgotPassword;
const resetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, otp, newPassword } = req.body;
        if (!email || !otp || !newPassword) {
            return res.status(400).json({
                success: false,
                error: "Email, reset code, and new password required",
            });
        }
        const resetRecord = yield db_1.default.passwordReset.findFirst({
            where: { email, otp },
        });
        if (!resetRecord || isOTPExpired(resetRecord.createdAt)) {
            return res.status(400).json({
                success: false,
                error: "Invalid or expired reset code",
            });
        }
        const hashedPassword = yield bcrypt_1.default.hash(newPassword, SALT_ROUNDS);
        yield db_1.default.user.update({
            where: { email },
            data: { password: hashedPassword },
        });
        yield db_1.default.passwordReset.deleteMany({ where: { email } });
        res.json({
            success: true,
            message: "Password reset successful",
        });
    }
    catch (error) {
        console.error("Password reset error:", error);
        res.status(500).json({
            success: false,
            error: "Password reset failed",
        });
    }
});
exports.resetPassword = resetPassword;

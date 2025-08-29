import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER, // your email
    pass: process.env.SMTP_PASS, // app password (if Gmail)
  },
});

export const sendMail = async (to: string, subject: string, text: string, html?: string) => {
  try {
    await transporter.sendMail({
      from: `"OTP from TTREX" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text,
      html,
    });
    console.log(`📩 Mail sent to ${to}`);
  } catch (err) {
    console.error("❌ Mail error:", err);
    throw new Error("Failed to send email");
  }
};

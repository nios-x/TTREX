"use client";

import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState<1 | 2>(1); // Step 1 = request OTP, Step 2 = reset password
  const [message, setMessage] = useState("");

  // STEP 1: Request OTP
  const handleRequestOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/auth/forgot-password", { email });
      setMessage("OTP sent to your email!");
      setStep(2);
    } catch (err: any) {
      setMessage(err.response?.data?.error || "Failed to send OTP");
    }
  };

  // STEP 2: Reset password with OTP
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/reset-password", { email, otp, newPassword });
      const token = res.data.token; // if backend returns token, store it
      if (token) Cookies.set("token", token, { expires: 30 });

      setMessage("Password reset successful! You can now login.");
      setStep(1);
      setEmail("");
      setOtp("");
      setNewPassword("");
    } catch (err: any) {
      setMessage(err.response?.data?.error || "Failed to reset password");
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <form className="flex flex-col gap-6 w-1/2" onSubmit={step === 1 ? handleRequestOtp : handleResetPassword}>
        <h1 className="text-xl font-bold text-center">Forgot Password</h1>

        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>

        {step === 2 && (
          <>
            <div className="grid gap-3">
              <Label htmlFor="otp">OTP</Label>
              <Input id="otp" value={otp} onChange={e => setOtp(e.target.value)} required />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="newPassword">New Password</Label>
              <Input id="newPassword" type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} required />
            </div>
          </>
        )}

        <Button type="submit" className="w-full">
          {step === 1 ? "Send OTP" : "Reset Password"}
        </Button>

        {message && <p className="text-center text-sm text-red-500">{message}</p>}
      </form>
    </div>
  );
}

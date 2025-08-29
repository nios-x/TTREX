"use client";

import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import { GalleryVerticalEnd } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterForm({ className, ...props }: React.ComponentProps<"div">) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<1 | 2>(1); // Step 1 = enter info, Step 2 = enter OTP
  const [message, setMessage] = useState("");

  const handleSubmitStep1 = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(import.meta.env.VITE_BACKEND+ "/auth/register/start", { email, password, firstName, lastName });
      setMessage(`OTP sent to ${res.data.email}`);
      setStep(2);
    } catch (err: any) {
      setMessage(err.response?.data?.error || "Something went wrong");
    }
  };

  const handleSubmitStep2 = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(import.meta.env.VITE_BACKEND+ "/auth/register/verify", { email, otp });
      const token = res.data.token;
      Cookies.set("token", token, { expires: 30 }); // JWT cookie for 30 days
      setMessage("Registration successful!");
      window.location.href = "/"
      // Optionally redirect to dashboard here
    } catch (err: any) {
      setMessage(err.response?.data?.error || "Invalid OTP");
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form className="flex justify-center mt-10" onSubmit={step === 1 ? handleSubmitStep1 : handleSubmitStep2}>
        <div className="flex flex-col gap-6 w-1/2">
          <div className="flex flex-col items-center gap-2">
            <a href="#" className="flex flex-col items-center gap-2 font-medium">
              <div className="flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">Acme Inc.</span>
            </a>
            <h1 className="text-xl font-bold">Welcome to Acme Inc.</h1>
            <div className="text-center text-sm">
              {step === 1 ? "Enter your details to register" : "Enter the OTP sent to your email"}
            </div>
          </div>

          {step === 1 ? (
            <>
              <div className="grid gap-3">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} required />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} required />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
              </div>
              <Button type="submit" className="w-full">Register</Button>
            </>
          ) : (
            <>
              <div className="grid gap-3">
                <Label htmlFor="otp">OTP</Label>
                <Input id="otp" value={otp} onChange={e => setOtp(e.target.value)} required />
              </div>
              <Button type="submit" className="w-full">Verify OTP</Button>
            </>
          )}

          {message && <p className="text-center text-sm text-red-500">{message}</p>}
        </div>
      </form>
    </div>
  );
}

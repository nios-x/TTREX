"use client";

import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import { GalleryVerticalEnd } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(import.meta.env.VITE_BACKEND+  "/auth/login", { email, password });
      const token = res.data.token;

      // Store JWT in cookie (30 days)
      Cookies.set("token", token, { expires: 30 });
      setMessage("Login successful!");

      // Optionally redirect
      window.location.href = "/dashboard"; 
    } catch (err: any) {
      setMessage(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form className="flex justify-center mt-10" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6 w-1/2">
          <div className="flex flex-col items-center gap-2">
            <a href="#" className="flex flex-col items-center gap-2 font-medium">
              <div className="flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">TTREX Inc.</span>
            </a>
            <h1 className="text-xl font-bold">TTREX Login</h1>
          </div>

          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Email" className="border-zinc-400" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="password">Password</Label>
            <Input id="password"  placeholder="Password" className="border-zinc-400" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>

          <Button type="submit" className="w-full">Login</Button>

          {message && <p className="text-center text-sm text-red-500">{message}</p>}
        </div>
      </form>
    </div>
  );
}

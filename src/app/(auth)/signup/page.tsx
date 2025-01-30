"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AxiosError } from 'axios'



interface LoginFormInputs {
  username: string;
  email: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter();
  const [hidePass, setHidePass] = useState(true);
  const [errMsg, setErrMsg] = useState("");
  const [load, setload] = useState(false);
  const { register, handleSubmit } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    setload(true);
    try {
      await axios.post("/api/admin/signup", data);
      router.replace("/otp");
    setload(false);

    } catch (error: unknown) {
    
      setload(false);
    
      if (error instanceof AxiosError) {
        if (error.response) {
          const status = error.response.status;
          if (status === 401) {
            setErrMsg("Admin already Exists");
            setTimeout(() => {
              setErrMsg("");
            }, 5000);
          } else if (status === 500) {
            setErrMsg("Server Maintenance going on");
            setTimeout(() => {
              setErrMsg("");
            }, 5000);
          }
        }
      } else {
        console.error('Unknown error occurred:', error);
      }
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle className="text-2xl">Sign Up</CardTitle>
            <CardDescription>
              Password must contain at least 6 characters.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Username</Label>
                <Input
                  id="username"
                  type="text"
                  {...register("username", { required: true })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="abc@example.com"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <p
                    onClick={() => {
                      setHidePass((prev) => !prev);
                    }}
                    className="ml-auto inline-block text-sm underline cursor-pointer  bold"
                  >
                    {hidePass ? "Show" : "Hide"} Password
                  </p>
                </div>
                <Input
                  id="password"
                  type={hidePass ? "password" : "text"}
                  {...register("password", { required: true, minLength: 6 })}
                />
              </div>
              <p className="my-1">{errMsg}</p>
              {load ? (
                <p className="text-center">Signing Up ...</p>
              ) : (
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              )}
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  );
}

"use client";
import Link from "next/link";
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
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface LoginFormInputs {
  email: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter();
  const [loginLoad, setloginLoad] = useState(false);
  const { register, handleSubmit } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    console.log(data)
    setloginLoad(true);
    const resp = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    console.log(resp)
    if (resp!.ok === true) {
       router.replace("/Dashboard")
       setTimeout(()=>{
        setloginLoad(false);
       },5000)
    }else if(resp?.error=="Incorrect password"){
      setloginLoad(false);
      toast.error("Incorrect Password")
    }else if(resp?.error=="Admin not found"){
      setloginLoad(false);
      toast.error("Verified Admin Not found")
    } else{
      setloginLoad(false);
      toast.error("User does not exist")
    }
  };

  return (
    <div className="h-screen flex items-center justify-center px-2">
      <Card className="max-w-sm ">
        <form onSubmit={handleSubmit(onSubmit)} >
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your Admin Dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
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
                  <Link
                    href="#"
                    onClick={()=>toast("Yet to be implemented")}
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  {...register("password", { required: true })}
                />
              </div>
              {loginLoad ? (
                <p className="text-center">Logging In ...</p>
              ) : (
                <Button type="submit" className="w-full">
                  Login
                </Button>
              )}
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  );
}

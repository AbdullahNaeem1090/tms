"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface otpForm {
  pin?: string;
}

export default function InputOTPForm() {
  const form = useForm<otpForm>();
  const router = useRouter();
  const [verifyLoader, setVerifyLoader] = useState(false);

  async function onSubmit(data: otpForm) {
    if (!data.pin || data.pin.length !== 6) {
      console.log("Please enter a 6-digit PIN");
      return;
    }
    try {
      setVerifyLoader(true);
      const resp = await axios.post("/api/admin/verify", data);
      console.log(resp);

       if(resp.data="Incorrect or Expired OTP"){
        setVerifyLoader(false);
        toast.error("Invalid or expired OTP")
      }else{
        router.replace("/");
        setVerifyLoader(false);
      }
    } catch (error) {
      console.log("Error in OTP");
      setVerifyLoader(false);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col items-center justify-center space-y-6"
        >
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem className=" flex flex-col items-center justify-center">
                <FormLabel className="text-xl">OTP</FormLabel>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription>
                  Please enter the one-time password sent to your Email.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {verifyLoader ? (
            <p>Verifying ...</p>
          ) : (
            <Button type="submit">Submit</Button>
          )}
          {/* sendagain */}
          {/* <Button className="bg-gray-500">Send Again</Button> */}
        </form>
      </Form>
    </div>
  );
}

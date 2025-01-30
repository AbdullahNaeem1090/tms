import { resend } from "@/lib/resend";
import otpEmail from "@/emails/otpEmail"

export async function sendVerificationEmail(
  username: string,
  email: string,
  OTP: string
) {
  try {
     await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Admin Verification || OTP",
      react: otpEmail({ username, OTP }),
    });

  } catch (error) {
    console.log("email not sent : ", error);
  }
}



import AdminModel from "@/model/adminModel";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/db/connection";
import { sendVerificationEmail } from "@/helper/sendVerifyEmail";

interface AdminRequestBody {
  username: string;
  email: string;
  password: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  
  await dbConnect();

  try {
    const { username, email, password }: AdminRequestBody =
      await request.json();

    const adminExist = await AdminModel.findOne({ email });
    if (adminExist) {
      return NextResponse.json(
        { message: "Email already registered" },
        { status: 401 }
      );
    }

    const hashPass = await bcrypt.hash(password, 5);

    const OTP = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = Date.now() + 10 * 60 * 1000; 

    const newAdmin = new AdminModel({
      username,
      password: hashPass,
      email,
      isVerified: false,
      OTP,
      otpExpiry,
    });

    await newAdmin.save();

    await sendVerificationEmail(username, email, OTP);

    return NextResponse.json(
      {
        message: "Admin created",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

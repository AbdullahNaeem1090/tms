import dbConnect from "@/db/connection";
import AdminModel from "@/model/adminModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    dbConnect()
  try {
    const { pin } = await request.json();
    const unverifiedAdmin = await AdminModel.findOne({ OTP: pin ,otpExpiry:{$gt:Date.now()}});
    if (!unverifiedAdmin) {
      return NextResponse.json({ message: "Incorrect or Expired OTP" });
    }

    unverifiedAdmin.isVerified = true;
    const verifiedAdmin = await unverifiedAdmin.save();
console.log(verifiedAdmin)
    return NextResponse.json(verifiedAdmin);

  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
} 
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import dbConnect from "@/db/connection";
import AdminModel from "@/model/adminModel";

export interface User {
  _id: string; 
  username: string;
  password: string;
  email: string;
  isVerified: boolean;
  OTP: string;
  otpExpiry: Date; 
  __v: number;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "ex@example.com" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials){
        await dbConnect();
        try {
          const user = await AdminModel.findOne({
            email: credentials!.email,
          });
          if (!user.isVerified) {
            throw new Error("Admin not found");
          }
          const passIsCorrect = await bcrypt.compare(
            credentials!.password,
            user.password
          );
          if (passIsCorrect) {
            return user;
          } else {
            throw new Error("Incorrect password");
          }
        } catch (error: unknown) {
          if (error instanceof Error) {
            throw new Error(error.message);
          }
          throw new Error("Unknown error occurred");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id?.toString();
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user._id = token._id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 1 * 60 * 60,
  },
  // secret: process.env.NEXTAUTH_SECRET,
};

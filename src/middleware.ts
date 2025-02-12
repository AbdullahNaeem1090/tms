import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
export { default } from "next-auth/middleware";

export async function middleware(request: NextRequest) {

  console.log("This is a check")

  const token = await getToken({ req: request });
  
  if (!token) {
    console.log("No token")
    return NextResponse.redirect(new URL("/login", request.url)); 
  }
  
}
export const config = {
  matcher: ["/","/dashboard/:path*"],
};

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export function proxy(req: NextRequest) {
  const url = req.nextUrl.clone();
  const path = url.pathname;

  // Public pages
  const publicPages = ["/login", "/signup" ,"/signup/account" ,"/forgot-password" , "/freelancer", "/client", "/auth/google/callback", "/auth/google"];

  // Skip public pages
  if (publicPages.includes(path)) return NextResponse.next();

  // Skip static files in /_next and common extensions
  if (
    path.startsWith("/_next/") || 
    path.endsWith(".png") ||
    path.endsWith(".jpg") ||
    path.endsWith(".jpeg") ||
    path.endsWith(".gif") ||
    path.endsWith(".svg") ||
    path.endsWith(".webp") ||
    path.endsWith(".css") ||
    path.endsWith(".js") ||
    path.endsWith(".ico")
  ) {
    return NextResponse.next();
  }

  const token = req.cookies.get("accessToken")?.value;
  // No token → redirect
  if (!token) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
  // try {
  //  jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] });
  //  console.log("Token is valid");
  //   return NextResponse.next();
  // } catch {
  //   console.log("Token is invalid or expired");
  //   url.pathname = "/login";
  //   console.log(JWT_SECRET);
  //   return NextResponse.redirect(url);
  // }
}

export const config = {
  matcher: "/:path*", 
};

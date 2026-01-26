
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("firebaseAuthToken"); // We'll set this after login
  const url = req.nextUrl.clone();

  if (url.pathname.startsWith("/dashboard") && !token) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
``

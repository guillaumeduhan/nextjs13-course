import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const isLoggedIn: boolean = true;

export function middleware(request: NextRequest) {
  let headers = new Headers(request.headers);
  if (isLoggedIn) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/profile"],
};

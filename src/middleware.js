import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.path === "/builder") {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/builder",
};

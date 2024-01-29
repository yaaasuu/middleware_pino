import { NextRequest, NextResponse } from "next/server";
import {logger} from "./lib/logger"

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/about") {
    logger.info("start middleware.info");
    return NextResponse.redirect(new URL("/redirected", request.url));
  }
  if (request.nextUrl.pathname === "/another") {
    return NextResponse.rewrite(new URL("/rewrite", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/about/:path*", "/another/:path*"],
};

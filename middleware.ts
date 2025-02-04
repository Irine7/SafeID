import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Add paths that require authentication
const protectedPaths = ["/identity", "/verify", "/privacy"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the path is protected
  if (protectedPaths.some((path) => pathname.startsWith(path))) {
    // Make a request to the authentication API route
    const authResponse = await fetch(new URL('/api/auth', request.url).toString());
    const authData = await authResponse.json();

    // If not authenticated, redirect to home page
    if (!authData.authenticated) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/identity/:path*", "/verify/:path*", "/privacy/:path*"],
};
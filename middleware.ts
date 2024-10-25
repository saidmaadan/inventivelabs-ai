import NextAuth from "next-auth";
import authConfig from "./auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isOnAdmin = req.nextUrl.pathname.startsWith("/admin");
  const isOnAuth = req.nextUrl.pathname.startsWith("/api/auth");

  if (isOnAdmin) {
    if (!isLoggedIn) {
      return Response.redirect(new URL("/api/auth/signin", req.nextUrl));
    }

    if (req.auth?.user.role !== "admin") {
      return Response.redirect(new URL("/", req.nextUrl));
    }
  }

  return null;
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
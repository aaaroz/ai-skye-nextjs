import { NextRequest } from "next/server";
import { auth } from "./libs/auth";
import { dashboardUserRoute } from "./libs/entities";

export const middleware = async (request: NextRequest) => {
  const session = await auth();

  if (session && request.nextUrl.pathname.startsWith("/auth")) {
    return Response.redirect(
      new URL(`${dashboardUserRoute.concat("dashboard")}`, request.url)
    );
  }
  if (session && request.nextUrl.pathname.startsWith("/apps/admin")) {
    if (session.user.role !== "admin") {
      return Response.redirect(
        new URL(`${dashboardUserRoute.concat("dashboard")}`, request.url)
      );
    }
  }
  if (!session && request.nextUrl.pathname.startsWith("/apps")) {
    return Response.redirect(new URL(`/auth/login`, request.url));
  }
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

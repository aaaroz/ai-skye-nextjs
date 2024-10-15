import { TUser } from "./libs/auth/type";

declare module "next-auth/jwt" {
  interface JWT {
    user: Omit<TUser, "password">;
    token: {
      token: string;
    };
  }
}

declare module "next-auth" {
  interface Session {
    user: Omit<TUser, "password">;
  }
}

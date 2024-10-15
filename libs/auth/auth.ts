import NextAuth from "next-auth";
import { credentialProvider } from "./credential";
import { TUser } from "./type";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [credentialProvider],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user }) {
      if (!user) return false;
      return true;
    },

    async jwt({ token, account, user }) {
      if (account?.provider === "login") {
        const userData = user as TUser;
        token.user = {
          id: userData.id,
          name: userData.name,
          image_url: userData.image_url,
          email: "",
          emailVerified: "",
          wordCredits: userData.wordCredits,
          role: userData.role,
          wordUsed: userData.wordUsed,
          token: userData.token,
        };
      }
      return token;
    },

    async session({ session, token }) {
      session.user = token.user as TUser;
      return session;
    },
  },
});

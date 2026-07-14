import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const developmentAuthSecret = "star-furniture-goa-local-development-secret";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [Google],
  secret:
    process.env.AUTH_SECRET ??
    (process.env.NODE_ENV === "production" ? undefined : developmentAuthSecret),
  session: {
    strategy: "jwt",
  },
  trustHost: true,
  callbacks: {
    session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }

      return session;
    },
  },
});

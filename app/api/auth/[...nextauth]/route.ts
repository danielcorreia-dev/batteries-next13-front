import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        if (!credentials?.username || !credentials?.password) return null;

        const { username, password } = credentials;

        const res = await fetch("nest-api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });
        if (res.status == 401 || res.status == 403) {
          console.log(res.statusText);
          return null;
        }

        if (res.ok) {
          const user = await res.json();
          return user;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

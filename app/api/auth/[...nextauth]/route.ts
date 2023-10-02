import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

async function refreshToken(token: JWT): Promise<JWT> {
  const res = await fetch(`${process.env.DOMAIN_URL}/api/auth/refresh`, {
    method: "POST",
    headers: {
      authorization: `Refresh ${token.backendTokens.refreshToken}`,
    },
  });
  console.log("token refreshed");

  const response = await res.json();

  return {
    ...token,
    backendTokens: response.data,
  };
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        userType: { label: "User Type", type: "text" },
      },

      // eslint-disable-next-line no-unused-vars
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials?.password) return null;

        const { username, password, userType } = credentials;
        const res = await fetch(
          `${process.env.DOMAIN_URL}/api/auth/login/user`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "user-type": userType || "user",
            },
            body: JSON.stringify({ username, password }),
          },
        );

        const data = await res.json();

        if (res.status == 401 || res.status == 403) {
          return null;
        }

        if (res.ok) {
          const user = data.data;
          return user;
        }
      },
    }),
  ],

  callbacks: {
    // eslint-disable-next-line no-unused-vars
    async jwt({ token, user, account, profile, trigger }) {
      if (user) return { ...token, ...user };

      if (new Date().getTime() < token.backendTokens.expiresIn) return token;

      return await refreshToken(token);
    },

    async session({ token, session }) {
      session.user = token.user;
      session.backendTokens = token.backendTokens;

      return session;
    },
  },

  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

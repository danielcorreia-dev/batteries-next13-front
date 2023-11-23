// export { default } from "next-auth/middleware";

import { withAuth } from "next-auth/middleware";

//
export default withAuth({
  callbacks: {
    authorized: async ({ req, token }) => {
      const regexPattern = /^\/system\/(company|user)\/\d+$/;

      if (req.nextUrl.pathname.match(regexPattern)) return true;

      if (req.nextUrl.pathname.startsWith("/system/company"))
        return token?.user.type === "company";

      if (req.nextUrl.pathname.startsWith("/system/user"))
        return token?.user.type === "user";

      return !!token;
    },
  },
});
export const config = {
  matcher: ["/system/:path*", "/system/company:path*", "/system/user:path*"],
};

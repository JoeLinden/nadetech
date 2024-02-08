// auth.js

// nextauth.js
import SteamProvider, { PROVIDER_ID } from "next-auth-steam";
import NextAuth from "next-auth";

import type { NextRequest } from "next/server";
import { NextAuthConfig } from "next-auth";

export function getAuthOptions(req: NextRequest): NextAuthConfig {
  return {
    providers: req
      ? [
          SteamProvider(req, {
            clientSecret: process.env.STEAM_SECRET!,
            callbackUrl: `${process.env.NEXTAUTH_URL}/api/auth/callback`,
          }),
        ]
      : [],
    callbacks: {
      jwt({ token, account, profile }) {
        if (account?.provider === PROVIDER_ID) {
          token.steam = profile;
        }
        return token;
      },
      session({ session, token }) {
        if ("steam" in token) {
          // @ts-expect-error
          session.user.steam = token.steam;
        }
        return session;
      },
    },
  };
}

async function handler(
  req: NextRequest,
  ctx: { params: { nextauth: string[] } }
) {
  return NextAuth(req, res, getAuthOptions(req));
}

//export { handler as GET, handler as POST };
export { GET, POST } from "@/app/lib/auth";

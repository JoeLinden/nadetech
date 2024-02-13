import SteamProvider from "next-auth-steam";
import NextAuth from "next-auth/next";
import { PROVIDER_ID } from "next-auth-steam";

import type { NextRequest } from "next/server";

async function handler(
  req: NextRequest,
  ctx: { params: { nextauth: string[] } }
) {
  // @ts-ignore
  return NextAuth(req, ctx, {
    providers: [
      SteamProvider(req, {
        clientSecret: process.env.STEAM_SECRET!,
        callbackUrl: "http://localhost:3000/api/auth/callback",
      }),
    ],
    // the code documents itself i guess!
    callbacks: {
      jwt({ token, account, profile }) {
        // Add the Steam profile information to the token
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
  });
}

export { handler as GET, handler as POST };

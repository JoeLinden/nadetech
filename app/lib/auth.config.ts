import Steam from "next-auth-steam";

import type { NextAuthConfig } from "next-auth";

export default {
  providers: [Steam],
} satisfies NextAuthConfig;

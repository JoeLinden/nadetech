import NextAuth from "next-auth";
import Steam from "next-auth-steam";
import { getAuthOptions } from "@/app/api/auth/[...nextauth]/route";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [Steam],
});

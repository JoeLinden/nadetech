import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userID = searchParams.get("userID");
  const videoID = searchParams.get("videoID");

  try {
    if (!userID || !videoID)
      throw new Error("User ID not found. Log in with Steam.");
    await sql`
        INSERT INTO favorites (user_id, video_id)
        VALUES (${userID}, ${videoID});`;
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

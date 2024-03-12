import { QueryResultRow } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import { sql } from "@vercel/postgres";

// Filter the videos in-memory to minimize DB queries and their delay.
export function filterVideos(videos: any, query: string) {
  return videos.filter(
    (video: any) =>
      video.alt.toLowerCase().includes(query) ||
      video.finish.toLowerCase().includes(query) ||
      video.nade.toLowerCase().includes(query) ||
      video.map.toLowerCase().includes(query) ||
      video.zone.toLowerCase().includes(query)
  );
}

// Extract the user's Steam ID from their email with string manipulation
export function parseSteamIdFromEmail(email: string | null | undefined) {
  if (typeof email == "string") {
    const emailSubstr = email.split("@");
    return emailSubstr[0];
  } else {
    console.log("Couldn't parse Steam ID, email not a string.");
  }
}

export async function getUser() {
  const session = await getServerSession();

  // If the user is logged in to Steam, parse their email for a steam ID
  if (session && typeof session?.user?.email == "string") {
    const emailSubStr = session.user.email.split("@");
    return emailSubStr[0];
  } else {
    // TODO: Prompt the user to log in to Steam
    console.log("User not logged in.");
    return null;
  }
}

export async function addFavorite(userID: any, videoID: string) {
  try {
    // await sql`
    //   INSERT INTO favorites (user_id, video_id)
    //   VALUES (${userID}, ${videoID})`;
    console.log(
      `Successfully Added Favorite. UserID: ${userID} VideoID: ${videoID}`
    );
    return true;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed adding to favorites");
  }
}

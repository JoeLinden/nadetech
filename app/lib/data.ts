import { sql } from "@vercel/postgres";
import { Video } from "@/app/lib/definitions";
import { unstable_noStore } from "next/cache";

// Pooled client connection to database

// Run this immediately
export async function fetchFavoritedVideos(userID: string) {
  unstable_noStore(); // May not be necessary with server actions
  try {
    const favoritedVideos = await sql<Video>`
      SELECT video_id
      FROM favorites
      WHERE favorites.steam_id = ${userID}`;
    return favoritedVideos.rows;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch favorited videos");
  }
}

export async function fetchVideos() {
  try {
    const videos = await sql<Video>`
      SELECT *
      FROM videos`;
    return videos.rows;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch videos");
  }
}

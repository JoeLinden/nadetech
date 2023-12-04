import { sql } from "@vercel/postgres";
import { Video } from "./definitions";

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

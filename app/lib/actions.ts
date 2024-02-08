// TODO: Favorite and Pin options
"use server";

import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
// export async function addFavorite(userID: string, videoID: string) {
//   //"use server";
//   try {
//     await sql`
//       INSERT INTO favorites (user_id, video_id)
//       VALUES (${userID}${videoID})`;
//   } catch (error) {
//     console.error("Database Error: ", error);
//     throw new Error("Failed adding to favorites");
//   }
// }

export async function addFavorite(e: FormData) {
  const video = e.get("video")?.toString();
  console.log(video);
  // try {
  //   const { rows } = await sql`
  //     INSERT INTO favorites (USER_ID)
  //     VALUES (${formData.get('USER_ID')})`;
  //   redirect()
  // } catch (error) {
  //   console.error("Database Error: ", error);
  //   throw new Error("Failed adding to favorites");
  // }
  // If there is no userid, prompt them to log in with steam. If no videoid, "video not found"
}

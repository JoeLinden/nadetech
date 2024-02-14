"use client";
import { useSession } from "next-auth/react";
import { addFavorite } from "@/app/lib/utils";

function getSteamId(session: any) {
  return JSON.stringify(session.data.user.steam.steamid, null, 2);
}

export default function Favorite({ videoID }: { videoID: string }) {
  const session = useSession();

  // If user isn't logged in, prompt them to log in via Steam.
  if (session.status !== "authenticated") {
    return <p>You are not authenticated</p>;
  }

  if (session.data)
    return (
      <>
        <button onClick={() => addFavorite(getSteamId(session), videoID)}>
          Add to Favorites
        </button>
        <div>
          {/* {videos.map((video) => (
          <div key={video.id}>
            ⭐<p>User ID: {video.user_id}</p>
            <p>Video ID: {video.video_id}</p>
            <br />
          </div>
        ))} */}
        </div>
      </>
    );
}

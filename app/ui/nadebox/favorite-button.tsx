// Server actions example for adding to favorites, so we don't need to use API endpoints to mutate data.
// These asynchronous server action functions execute on the server, and can be invoked from client or server components.
"use client";
import { addFavorite } from "@/app/lib/actions";
import { useTransition } from "react";
/*
// Server component
export default function Favorite() {
  // Action
  async function create(formData: FormData) {
    "use server";

    // Logic to mutate data, like inserting into DB a new favorited video.
  }

  // Invoke the action. Need to use "action" attribute
  return <form action={create}>...</form>;
}
*/

// Progressive enhancement! Forms work even if JavaScript is disabled on the client.

// This is the component, not the action...
export default function Favorite() {
  const [isPending, startTransition] = useTransition();

  const formData = new FormData();
  formData.append("video_id", "AVCYMRAZB9XN19163");
  formData.append("user_id", "BBYXXVU54HDW39028");

  // if user is logged in, fetch Favorited videos and update each nadebox
  // if not, prompt to log in via steam

  return (
    <>
      <button onClick={() => startTransition(() => addFavorite(formData))}>
        {isPending ? "Adding..." : "Add to Favorites"}
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

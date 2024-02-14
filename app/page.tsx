import Header from "@/app/ui/header/header";
import SideBar from "@/app/ui/sidebar/sidebar";
import Nadebox from "@/app/ui/nadebox/nadebox";

import { SignIn, SignOut } from "./ui/header/steam-login";
import { getServerSession } from "next-auth";
import { Fragment } from "react";

import { fetchVideos } from "@/app/lib/data";
import { filterVideos } from "@/app/lib/utils";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const videos = await fetchVideos();
  const query = searchParams?.query || "";
  const filteredVideos = filterVideos(videos, query);

  const session = await getServerSession();

  //const { data } = useSession();

  return (
    <div className="home">
      <Header />
      <SideBar />
      <main className="content">
        Live Query: {query}
        <br />
        {/* Steam Login Stuff */}
        <div>
          {session ? (
            <Fragment>
              <p>Hi {session?.user?.name}! 🧑‍🚀🚀</p>
              <SignOut />
            </Fragment>
          ) : (
            <Fragment>
              Do you want to play with me? <SignIn />
            </Fragment>
          )}
        </div>
        <br />
        Nadeboxes:
        {filteredVideos.map((video: any) => (
          <Nadebox {...video} key={video.video_id} video={video} />
        ))}
      </main>
    </div>
  );
}

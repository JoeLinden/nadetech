import Header from "@/app/ui/header/header";
import SideBar from "@/app/ui/sidebar/sidebar";
import Nadebox from "@/app/ui/nadebox/nadebox";
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

  return (
    <div className="home">
      <Header />
      <SideBar />
      <main className="content">
        Live Query: {query}
        <br />
        Nadeboxes:
        {filteredVideos.map((video: any) => (
          <Nadebox {...video} key={video.video_id} video={video} />
        ))}
      </main>
    </div>
  );
}

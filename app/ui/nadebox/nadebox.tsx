import Favorite from "@/app/ui/nadebox/favorite-button";

export default function Nadebox({ video }: { video: any }) {
  return (
    <div className="nadebox">
      {video.nade} | {video.start} | {video.finish} |
      <Favorite videoID={video.id} />
    </div>
  );
}

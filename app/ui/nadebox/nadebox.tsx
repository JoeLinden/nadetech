import Favorite from "@/app/ui/nadebox/favorite-button";
import Image from "next/image";
import thumbnailPlaceholder from "@/public/arch_a-site_molly_thumbnail.png";

export default function Nadebox({ video }: { video: any }) {
  return (
    <div className="nadebox">
      {video.nade} | {video.start} | {video.finish} |
      <Image
        className={"nadebox-thumbnail"}
        src={thumbnailPlaceholder}
        alt={video.nade}
        fill={true}
        object-fit="cover"
        quality={100}
        priority
      />
      <Favorite videoID={video.video_id} />
    </div>
  );
}

import { QueryResultRow } from "@vercel/postgres";

// Filter the videos in-memory to eliminate DB queries.
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

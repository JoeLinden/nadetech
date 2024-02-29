export type Video = {
  id: string;
  nade: string;
  start: string;
  finish: string;
  zone: string;
  map: string;
  team: string;
  technique: string;
  movement: string;
  precision: string;
  collection: string;
  lineup: string;
  thumbnail: string;
  video: string;
};

export type Favorite = {
  steam_id: string;
  video_id: string;
};

export type User = {
  steam_id: string;
};

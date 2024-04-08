export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type Photo = {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

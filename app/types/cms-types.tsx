export enum SECTIONS {
  FEATURED='featured',
  VIDEOS='videos'
}


export type Video = {
  description?: string;
  url: string;
  title: string;
}

export type Content = {
  workReel: Video;
  featured: Video[];
  videos: Video[];
  about: string;
  phone: string;
  email: string;
  _id: string
};

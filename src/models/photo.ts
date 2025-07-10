export default interface Photo {
  id: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  description: string | null | undefined;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  }
  links: {
    self: string;
    html: string;
    download: string;
  }
  user: {
    id: string;
    username: string;
    name: string;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
    };
  };
};
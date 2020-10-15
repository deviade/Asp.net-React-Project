export interface IProfile {
  displayName: string;
  username: string;
  bio: string;
  image: string;
  photos: IPhoto[];
}

export interface IPhoto {
  url: string;
  id: string;
  isMain: boolean;
}

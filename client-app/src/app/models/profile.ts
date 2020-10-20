export interface IProfile {
  displayName: string;
  username: string;
  bio: string;
  image: string;
  following: boolean;
  followersCount: number;
  followingCount: number;
  photos: IPhoto[];
}

export interface IPhoto {
  url: string;
  id: string;
  isMain: boolean;
}

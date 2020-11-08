
interface ICounterType {
  count: number;
}

export interface QueryParams {
  [key:string]: string
}

export interface IThemeType {
  theme: string
}

export interface ICounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  toJson: () => ICounterType;
}

export interface NewsItem {
  id: string;
  title: string;
}

export interface IThemeStoreProps {
  theme: string;
  news: NewsItem[];
}

export interface IThemeStore {
  theme: string;
  news: NewsItem[];
  setTheme(str: string): void;
  getData(): Promise<NewsItem[]>;
  toJson(): IThemeStoreProps;
}

export interface Info {
  id: number;
  avatar_url: string;
  url: string;
  name: string;
}

export interface User {
  isLogin: boolean;
  info: Info;
}

export interface IAppStore {
  user: User
  login: (code?: string) => Promise<unknown>;
  getUserInfo: () => Promise<unknown>;
  toJson(): { user: User };
  init(arg0: User): void;
}

export interface VideoListItem {
  id: string;
  title: string;
  author: string;
  url: string;
  poster: string;
  date: string;
}

export type VideoList = VideoListItem[]

export interface Video {
  list: VideoList;
  playing: VideoListItem;
}

export interface IVideoStore {
  video: Video;
  getVideo: () => Promise<unknown>;
  getVideoDetail: (params: QueryParams) => Promise<unknown>;
  setVideoPlaying: (video: VideoListItem) => void;
  toJson(): { video: Video };
}

export interface IStores {
  counterStore: ICounterStore;
  themeStore: IThemeStore;
  appStore: IAppStore;
  videoStore: IVideoStore;
}

export interface InitialStoresProps {
  stores: IStores
}

declare global {
  interface Window {
    __INITIAL__STATE__: IStores;
    __SSRPATH__: string;
  }
}

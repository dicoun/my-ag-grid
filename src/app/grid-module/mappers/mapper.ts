import { YoutubeVideoItem } from './youtube-video-item';

export interface Mapper<T> {
  mapFrom(obj: YoutubeVideoItem): T;
}

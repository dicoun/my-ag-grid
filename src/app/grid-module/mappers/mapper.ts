import { VideoObject } from './video.object';

export interface Mapper<T> {
  mapFrom(obj: VideoObject): T;
}

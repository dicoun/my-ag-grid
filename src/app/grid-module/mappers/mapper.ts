import { videoObject } from './videoObject';

export interface Mapper<T> {
  mapFrom(obj: videoObject): T;
}

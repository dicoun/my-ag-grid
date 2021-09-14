import { Mapper } from './mapper';
import { ItemModel } from '../models/item.model';
import { videoObject } from './videoObject';

export class VideoMapper implements Mapper<ItemModel> {
  mapFrom(obj: videoObject): ItemModel {
    const video = new ItemModel();
    video.videoId = obj.id.videoId;
    video.thumbnail = obj.snippet.thumbnails.default.url;
    video.title = obj.snippet.title;
    video.publishedAt = obj.snippet.publishedAt;
    video.description = obj.snippet.description;
    return video;
  }
}

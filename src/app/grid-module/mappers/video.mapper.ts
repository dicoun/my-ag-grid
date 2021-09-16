import { Mapper } from './mapper';
import { ItemModel } from '../models/item.model';
import { YoutubeVideoItem } from './youtube-video-item';

export class VideoMapper implements Mapper<ItemModel> {
  mapFrom(obj: YoutubeVideoItem): ItemModel {
    const video = new ItemModel();
    video.videoId = obj.id.videoId;
    video.thumbnail = obj.snippet.thumbnails.default.url;
    video.title = obj.snippet.title;
    video.publishedAt = obj.snippet.publishedAt;
    video.description = obj.snippet.description;
    return video;
  }
}

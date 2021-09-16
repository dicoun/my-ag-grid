export class YoutubeVideoItem {
 id: {
   videoId: string
 };
 snippet: {
   thumbnails: {
     default: {
       url: string
      }
    };
   title: string;
   publishedAt: string;
   description: string;
  };
}

export class VideoObject {
 id: { videoId: string};
 snippet: { thumbnails: { default: { url: string} };
            title: string;
            publishedAt: string;
            description: string;
          };
}

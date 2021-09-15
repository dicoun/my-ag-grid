import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemModel } from 'src/app/grid-module/models/item.model';
import { map } from 'rxjs/operators';
import { VideoMapper } from 'src/app/grid-module/mappers/video.mapper';
import { EntityObject } from './entity.object';

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  videoUrl = `https://www.youtube.com/watch?v=`;
  videoMapper = new VideoMapper();

  constructor(private httpClient: HttpClient) { }

  get(): Observable<ItemModel[]> {
    return this.httpClient
         // tslint:disable-next-line:max-line-length
        .get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyAlHiTdoCzvzCU5CgFKMTwck2AjeeZjkkI&maxResults=50&type=video&part=snippet&q=john')
        .pipe(map((data: EntityObject) => this.convertData(data)));
  }
  getUrlById(id: string): string {
    return `${this.videoUrl}${id}`;
  }

  private convertData(data: EntityObject): ItemModel[] {
    return data.items.map(item => {
      return this.videoMapper.mapFrom(item);
    });
  }
}

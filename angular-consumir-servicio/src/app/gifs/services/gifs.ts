import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interfaces';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({
  providedIn: 'root'
})


export class Gifs {

  private http = inject(HttpClient);
  trendingGifs = signal<Gif[]>([]);

  constructor() {
    this.loadTrendigGifs();
   }

  loadTrendigGifs(){
    this.http.get<GiphyResponse>(`${environment.urlbase}/gifs/trending`, {
      params: {
        apiKey: environment.apiKey,
        limit: 25,
        offset: 0,
        rating: 'g',
        bundle: 'messaging_non_clips'
      }
    }).subscribe((response) => {
      console.log(response.data[0].images.original.url);
      const gifs = GifMapper.mapGiphyItemsToGifArray(response.data);
      console.log(gifs);
    });
  }
}

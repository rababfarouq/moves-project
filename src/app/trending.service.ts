import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  imgBaseUrl: string = 'https://image.tmdb.org/t/p/original/'

  constructor(private http:HttpClient) { 
   
  }
  getTrendingItems(mediaType:string):Observable<any>
  {
   return  this.http.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=c636ed7787cc302d96bf88ccf334e0d8`)
  }
  getTrendingDetails(id:number,mediaType:string):Observable<any>
  {
   return  this.http.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US`)
  }
}//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
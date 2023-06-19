import { Component } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss'],
})
export class TvshowComponent {
  imgBaseUrl: string = 'https://image.tmdb.org/t/p/original/';
  tvshowList: any[] = [];
  constructor(private _TrendingService: TrendingService) {}
  getTrendingTvshows(){
    this._TrendingService.getTrendingItems('tv').subscribe((res)=>{
      console.log(res)
      this.tvshowList=res.results
    })
  }
  ngOnInit():void{
   
    this.getTrendingTvshows()
  
  }
}

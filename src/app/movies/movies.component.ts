import { Component } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  moviesList:any[]=[]
  imgBaseUrl:string='https://image.tmdb.org/t/p/original/'
  constructor(private _TrendingService:TrendingService){

  }
  getTrendingMovies(){
    this._TrendingService.getTrendingItems('movie').subscribe((res)=>{
      console.log(res)
      this.moviesList=res.results
    })
  }
  ngOnInit():void{
    this.getTrendingMovies()
    // this.getTrendingTvshows()
    // this.getTrendingPeople()
  }
}

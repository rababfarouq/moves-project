import { Component } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  moviesList: any[] = [];
  imgBaseUrl: string = 'https://image.tmdb.org/t/p/original/';
  tvshowList: any[] = [];
  peoploList: any[] = [];
  constructor(private _TrendingService: TrendingService) {}
  getTrendingMovies() {
    this._TrendingService.getTrendingItems('movie').subscribe((res) => {
      console.log(res);
      this.moviesList = res.results;
    });
  }
  getTrendingTvshows() {
    this._TrendingService.getTrendingItems('tv').subscribe((res) => {
      console.log(res);
      this.tvshowList = res.results;
    });
  }
  getTrendingPeople() {
    this._TrendingService.getTrendingItems('person').subscribe((res) => {
      console.log(res);
      this.peoploList = res.results;
    });
  }
  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTrendingTvshows();
    this.getTrendingPeople();
  }
}

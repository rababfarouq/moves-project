import { Component } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  imgBaseUrl: string = 'https://image.tmdb.org/t/p/original/';
;
  peoploList: any[] = [];
  constructor(private _TrendingService: TrendingService) {}
  getTrendingPeople() {
    this._TrendingService.getTrendingItems('person').subscribe((res) => {
      console.log(res);
      this.peoploList = res.results;
    });
  }
  ngOnInit(): void {
  
    this.getTrendingPeople();
  }
}

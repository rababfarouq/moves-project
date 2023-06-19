import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  currentId:number=0
  currentMediaType:string=''
  itemDetails:any={}
  imgBaseUrl :string=''
  constructor(private _ActivatedRoute: ActivatedRoute,private _TrendingService:TrendingService) {
    this.currentId=_ActivatedRoute.snapshot.params.id;
    this.currentMediaType=_ActivatedRoute.snapshot.params.mediaType;
    this.imgBaseUrl=_TrendingService.imgBaseUrl;
  }
  getTrendingItemDetails(){
    this._TrendingService.getTrendingDetails(this.currentId,this.currentMediaType).subscribe((res)=>{
      console.log(res)
      this.itemDetails=res
    })
  }
  ngOnInit():void{
    this.getTrendingItemDetails()
  }
}

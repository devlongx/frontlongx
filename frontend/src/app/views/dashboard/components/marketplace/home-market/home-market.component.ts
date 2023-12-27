import { Component } from '@angular/core';

@Component({
  selector: 'app-home-market',
  templateUrl: './home-market.component.html',
  styleUrls: ['./home-market.component.scss']
})
export class HomeMarketComponent {
  currentGallery={pic:"assets/pic/g6.png"}
  gallery=[
    {pic:"assets/pic/g1.png"},
    {pic:"assets/pic/g2.png"},
    {pic:"assets/pic/g3.png"},
    {pic:"assets/pic/g4.png"},
    {pic:"assets/pic/g5.png"},
    {pic:"assets/pic/g6.png"},
  ]

  updateGallery(event:any){
    this.currentGallery.pic=event.pic
  }
}

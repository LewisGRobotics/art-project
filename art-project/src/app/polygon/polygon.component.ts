import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polygon',
  templateUrl: './polygon.component.html',
  styleUrls: ['./polygon.component.scss']
})
export class PolygonComponent implements OnInit {

  colorProperty = "#8f8f8f";
  colorVector = ["#272822","#c03", "#429032", "#2963bd","#c90"];
  constructor() {
    
   }

  ngOnInit(): void {
    const colorIndex = Math.floor(Math.random() * 4) + 1;
    this.colorProperty= this.colorVector[colorIndex];
  }

}

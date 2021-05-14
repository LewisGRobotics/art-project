import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polygon',
  templateUrl: './polygon.component.html',
  styleUrls: ['./polygon.component.scss']
})
export class PolygonComponent implements OnInit {
  
  colorVector = ["#272822","#c03", "#429032", "#2963bd","#c90"];
  shapeVector = ["blank", "square", "bottomLeft", "bottomRight", "topLeft", "topRight", "circle"];
  color = "#8f8f8f";
  colorSelector = "#8f8f8f";
  shape = "bottomLeft";
  shapeSelector = "bottomLeft";
  toggled = false;

  constructor() {}

  polygonClicked(): void {    
    this.generateRandom();

  }

  ngOnInit(): void {    
    this.generateRandom();
  }

  // Generate a random polygon
  generateRandom(): void {
    const colorIndex = Math.floor(Math.random() * 4) + 1;
    this.colorSelector= this.colorVector[colorIndex];
    this.color = this.colorSelector;
    
    const shapeIndex = Math.floor(Math.random() * 7);
    this.shapeSelector = this.shapeVector[shapeIndex];
    this.shape = this.shapeSelector;

    if(this.shapeSelector == "blank") this.colorSelector = "#fff";
    if(this.shapeSelector == "bottomLeft") this.colorSelector = "7.5vh solid $g";
  }

  // Hide/show polygon
  hide(): void{    
    //this.colorSelector = this.toggled ? this.color : "#fff";
    //this.toggled = !this.toggled;
    //console.log("click")
  }

}

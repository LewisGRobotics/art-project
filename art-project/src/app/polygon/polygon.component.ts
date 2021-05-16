import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-polygon',
  templateUrl: './polygon.component.html',
  styleUrls: ['./polygon.component.scss']
})
export class PolygonComponent implements OnInit {
  
  @Input() polygonSize: Number;

  private _paletteSelector: string;
  @Input() set paletteSelector(palette : string){
    this._paletteSelector = palette; 
    this.colorPolygon();
  }

  // Red, Yellow, Green, Blue
  colorVectorRYGB = ["#fff","#c03", "#429032", "#2963bd","#c90"];
  // Forest green, Mint, Nude, Bordeaux
  colorVectorFMNB = ["#fff","#3b5360", "#bee5d3", "#d6b0b1", "#8b5e83"]

  shapeVector = ["blank", "square", "bottomLeft", "bottomRight", "topLeft", "topRight", "circle"];
  colorIndex = 0;
  
  color = "#000";
  colorSelector = "#000";

  shape = "blank";
  shapeSelector = "blank";

  borderBottomColor = "#000000"
  borderTopColor = "#000000"

  constructor() {
    this.polygonSize = 0;
    this._paletteSelector="RYGB";
  }

  // Generate random polygon on class startup.
  ngOnInit(): void {    
    this.generateRandom();
  }

  // Polygon clicked event handler
  polygonClicked(): void {    
    this.generateRandom();
  }

  // Generate a random polygon
  generateRandom(): void {
    const shapeIndex = Math.floor(Math.random() * 7);
    this.shapeSelector = this.shapeVector[shapeIndex];
    this.shape = this.shapeSelector;

    // First element of palettes is white (hidden)
    if(this.shapeSelector=="blank") this.colorIndex = 0;
    else this.colorIndex = Math.floor(Math.random() * 4) + 1;

    this.colorPolygon();

    this.color = this.colorSelector;    
  }

  // Sets the color of the polygon according to the palette.
  colorPolygon(): void{
    if(this._paletteSelector == "RYGB") this.colorSelector= this.colorVectorRYGB[this.colorIndex];
    if(this._paletteSelector == "FMNB") this.colorSelector= this.colorVectorFMNB[this.colorIndex];

    if(this.shapeSelector == "bottomLeft"){
      if(this._paletteSelector == "RYGB") this.borderBottomColor = "#2963bd";
      if(this._paletteSelector == "FMNB") this.borderBottomColor = "#d6b0b1";
    } 
    if(this.shapeSelector == "bottomRight"){
      if(this._paletteSelector == "RYGB") this.borderBottomColor = "#c90";
      if(this._paletteSelector == "FMNB") this.borderBottomColor = "#8b5e83";
    } 
    if(this.shapeSelector == "topLeft"){
      if(this._paletteSelector == "RYGB") this.borderTopColor = "#c03";
      if(this._paletteSelector == "FMNB") this.borderTopColor = "#3b5360";
    } 
    if(this.shapeSelector == "topRight"){
      if(this._paletteSelector == "RYGB") this.borderTopColor = "#429032";
      if(this._paletteSelector == "FMNB") this.borderTopColor = "#bee5d3";
    } 
  }
}

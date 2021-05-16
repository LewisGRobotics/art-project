import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {  
  title = "Lewis' Art Project";
  matrixHeightValue = 8;
  matrixWidthValue = 8;
  sliderValue = 7;
  sizeValue = 7;
  colorPalette = "FMNB";

  // This is a hack, this should contain the actual polygons instances
  itemsWidth = [1,2,3,4,5,6,7,8];
  itemsHeight = [1,2,3,4,5,6,7,8];
  
  public constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);    
  }

  // Width input control property changed event handler
  public onWidthChanged(): void {    
    this.itemsWidth = [];

    for(let i=0; i<this.matrixWidthValue; i++){
      this.itemsWidth.push(1);
    }
  }

  // Height input control property changed event handler
  public onHeightChanged(): void {    
    this.itemsHeight = [];

    for(let i=0; i<this.matrixHeightValue; i++){
      this.itemsHeight.push(1);
    }
  }

  // Slider changed event handler
  public onSliderChanged(): void {
  }
}

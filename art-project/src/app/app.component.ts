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
  itemsWidth = [1,2,3,4,5,6,7,8];
  itemsHeight = [1,2,3,4,5,6,7,8];
  
  public constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
    
  }

  public onWidthChanged(): void {
    console.log(this.matrixWidthValue);
    
    this.itemsWidth = [];

    for(let i=0; i<this.matrixWidthValue; i++){
      this.itemsWidth.push(1);
    }
  }

  public onHeightChanged(): void {
    console.log(this.matrixHeightValue);
    
    this.itemsHeight = [];

    for(let i=0; i<this.matrixHeightValue; i++){
      this.itemsHeight.push(1);
    }
  }

  public onSliderChanged(): void {
    console.log(this.sliderValue);
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addViewport'
})
export class AddViewportPipe implements PipeTransform {

  transform(value: any): any {
    if (window.matchMedia("(orientation: portrait)").matches) {
      return value + "vw";  
    }
    else return value + "vh";    
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, breakpoint: number) {
    if( breakpoint  < value.length){
      return value.substring(0, breakpoint) + ' ...';
    }
    return value
  }

}

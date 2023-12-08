import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(text: any, filterstring: string, propName: string): any {
    if(text.length === 0 || filterstring === ''){
      return text
    }
    const resultArr = []
    for (const item of text){
      if(item[propName] === filterstring){
        resultArr.push(item)
      }
    }
    return resultArr
  }

}

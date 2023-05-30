import { Pipe, PipeTransform } from '@angular/core';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
@Pipe({
  name: 'removeDuplicateCategories'
})
export class RemoveDuplicateCategoriesPipe implements PipeTransform {

  transform(elements:any[]) {
      let result:any = []
      elements.forEach(element=>{
        if(!elements.find(questionList=>questionList.category === element.category)){
          result.push(element)
        }
      });
      return result;
  }

  // transform(value: string, ...args: unknown[]): unknown {
  //   return value;
  // }

}

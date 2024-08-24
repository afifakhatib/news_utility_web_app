import { Pipe, PipeTransform } from '@angular/core';
import { Inews } from '../model/newsData.interface';

@Pipe({
  name: 'fromToDatePipe'
})
export class FromToDatePipePipe implements PipeTransform {

  transform(utiltiyNewsArr :  any[] , startDate : Date | null , endDate : Date | null): any[] {
     if(!utiltiyNewsArr || (!startDate && !endDate)){
          return utiltiyNewsArr
     }

     return utiltiyNewsArr.filter(newsDate => {
         const newDate = new Date(newsDate.publishedAt);
         if(startDate && endDate){
          return newsDate >= startDate && newsDate <= endDate
         }
         else if(startDate){
          return newsDate >= startDate
         }
         else if(endDate){
          return newsDate <= endDate
         }
         return true
     })
  }

}

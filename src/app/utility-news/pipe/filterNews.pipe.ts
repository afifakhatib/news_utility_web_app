import { inject, Pipe, PipeTransform } from '@angular/core';
import { Inews } from '../model/newsData.interface';

@Pipe({
  name: 'filter'
})
export class FilterNewsPipe implements PipeTransform {

   //  articles  !: Inews[] 

  transform(utiltiyNewsArr : Inews[] , searchVal : string) : Inews[] {
    
      let filteredNewsData : Inews[] = [];

      if(!utiltiyNewsArr){
         return []
      }
      if(!searchVal){
         return utiltiyNewsArr
      }
 

      filteredNewsData = utiltiyNewsArr.filter(news => {
         // return news.title.includes(seacrhVal)
         return news.title.toLocaleLowerCase().includes(searchVal.toLowerCase())
      })

       return filteredNewsData

      




















//    //   let  newsArr : Inews[] = []

//      console.log(searchCountry);
     

//      if(!search){
//         return utiltiyNews
//      }
//      if(!utiltiyNews){
//         return []
//      }

//     if (!utiltiyNews || (!search && searchCountry === 'all')) {
//       return utiltiyNews;
//     }

//    //  search = search.toLowerCase();

//    //  return utiltiyNews.filter(article => {
//    //    const matchesCountry = searchCountry === 'all' || article.title.toLowerCase() === searchCountry.toLowerCase();
//    //    const matchesSearch = search === '' || 
//    //      article.title.toLowerCase().includes(search) ||
//    //      article.author.toLowerCase().includes(search);

//    //    return matchesCountry && matchesSearch;
//    //  });

//    return utiltiyNews.filter(news => {
//       if(searchCountry === 'us'){
//          return news.title.toLowerCase().includes(search.toLowerCase()) || 
//           news.content.toLowerCase().includes(search.toLowerCase()) || 
//           news.description.toLowerCase().includes(search.toLowerCase())
//       }
//      else if(searchCountry === 'gb'){
//       return news.title.toLowerCase().includes(search.toLowerCase()) || 
//       news.content.toLowerCase().includes(search.toLowerCase()) || 
//       news.description.toLowerCase().includes(search.toLowerCase())
//       }
//       else if(searchCountry === 'ca'){
//          return news.title.toLowerCase().includes(search.toLowerCase()) || 
//          news.content.toLowerCase().includes(search.toLowerCase()) || 
//          news.description.toLowerCase().includes(search.toLowerCase())
//       }
//       else if(searchCountry === 'au'){
//          return news.title.toLowerCase().includes(search.toLowerCase()) || 
//          news.content.toLowerCase().includes(search.toLowerCase()) || 
//          news.description.toLowerCase().includes(search.toLowerCase())
//       }
//       else if(searchCountry === 'all'){
//          return news.title.toLowerCase().includes(search.toLowerCase()) || 
//          news.content.toLowerCase().includes(search.toLowerCase()) || 
//          news.description.toLowerCase().includes(search.toLowerCase())
//       }
//       else{
//          return utiltiyNews
//       }

//    })
//   }

  }
}

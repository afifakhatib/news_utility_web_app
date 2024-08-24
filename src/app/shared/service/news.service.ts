import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { Inews } from 'src/app/utility-news/model/newsData.interface';
import { environment } from 'src/environments/environment';
// import { Inews } from '../model/newsData.interface';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  
  BASE_URL = `${environment.BASE_URL}`
  API_KEY = '7bfa1e806e254b5da27d95cad3aa68c2';
   API_URL = `${environment.BASE_URL}?country=us&category=business&apikey=${this.API_KEY}`

   countrySubject$ : BehaviorSubject<string> = new BehaviorSubject<string>('in');
   newsObjSubject$ : Subject<Inews> = new Subject<Inews>()
   filterNewsSubject$ : Subject<string> = new Subject<string>()


  constructor(private _http: HttpClient) {}

 

  fetchNewsCountry(country : string) : Observable<any> {
    const country_URL = `${this.BASE_URL}?country=${country}&apikey=${this.API_KEY}`
    return this._http.get<any>(country_URL)
  }


}















  // https://reactjsexample.com/content/images/2021/11/Snipaste_2021-11-28_13-55-49.jpg


 // fetchNews() : Observable<any>{
  //   console.log(this.API_URL);
  //   return this._http.get<any>(this.API_URL)
  //            .pipe(
  //             map(data => {
  //               return data.articles
  //             })
  //            )

  // }
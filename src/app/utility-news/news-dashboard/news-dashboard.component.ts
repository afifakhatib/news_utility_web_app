import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { NewsService } from 'src/app/shared/service/news.service';
import { Inews } from '../model/newsData.interface';

@Component({
  selector: 'app-news-dashboard',
  templateUrl: './news-dashboard.component.html',
  styleUrls: ['./news-dashboard.component.scss']
})
export class NewsDashboardComponent implements OnInit, OnDestroy {

  newsUnsubscription$ !: Subscription

  newsArr : any[] = []
  searchVal !: string 
  startDate : Date | null = null;
  endDate : Date | null  = null;
  country : string  = 'in'

  constructor(
    private _newsService : NewsService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.getNewsData()
  }

  ngOnDestroy(): void {
    this.newsUnsubscription$.unsubscribe()
  }

  getNewsData(){
   this._newsService.countrySubject$.subscribe((res : string) => {
        if(res){
          this.country = res;
          console.log(res);
          this.newsUnsubscription$ = this._newsService.fetchNewsCountry(this.country)
         .subscribe((newsData : any) => {
               this.newsArr = newsData.articles;
               console.log(this.newsArr);
               this._newsService.newsObjSubject$.next(this.newsArr[0])
               this._router.navigate(['/news', this.newsArr[0].title])
            })
        }
     })
  }

  onDateChange(): void {
    if (this.startDate && this.endDate && this.startDate > this.endDate) {
      alert('Start date cannot be after end date');
      this.endDate = null;
    }
  }

  onSearch(eve : Event){
      let val = (eve.target as HTMLInputElement).value;
      this._newsService.filterNewsSubject$.next(val);
      this.searchVal = val
  }

}

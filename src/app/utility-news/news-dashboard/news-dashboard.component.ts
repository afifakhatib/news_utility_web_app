import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared/service/news.service';

@Component({
  selector: 'app-news-dashboard',
  templateUrl: './news-dashboard.component.html',
  styleUrls: ['./news-dashboard.component.scss']
})
export class NewsDashboardComponent implements OnInit {

  newsArr : any[] = []
  searchVal !: string 
  startDate : string | null = null;
  endDate : string | null  = null;
  country : string  = 'in'

  constructor(
    private _newsService : NewsService
  ) { }

  ngOnInit(): void {
    this.getNewsData()
  }

  getNewsData(){
     this._newsService.countrySubject$.subscribe((res : string) => {
        if(res){
          this.country = res;
          console.log(res);
          this._newsService.fetchNewsCountry(this.country)
            .subscribe((newsData : any) => {
               this.newsArr = newsData.articles;
               console.log(this.newsArr);
               
            })
        }
     })
  }

  onSearch(eve : Event){
      let val = (eve.target as HTMLInputElement).value;
      this._newsService.filterNewsSubject$.next(val);
      this.searchVal = val
  }

}

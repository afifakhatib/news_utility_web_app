import { Component, OnInit } from '@angular/core';
import { Inews } from '../model/newsData.interface';
import { NewsService } from 'src/app/shared/service/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  newsObj : any = [];
  
  constructor(
    private _newsService : NewsService
  ) { }

  ngOnInit(): void {
    this._newsService.newsObjSubject$.subscribe((res : Inews) => {
      if(res){
       this.newsObj = res
      }
  })
  }


}

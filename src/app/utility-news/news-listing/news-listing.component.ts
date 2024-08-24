import { Component, Input, OnInit } from '@angular/core';
import { Inews } from '../model/newsData.interface';
import { NewsService } from 'src/app/shared/service/news.service';

@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.scss']
})
export class NewsListingComponent implements OnInit {

  @Input() newsObj !: Inews;

  constructor(
    private _newsService : NewsService
  ) { }

  ngOnInit(): void {
  }

  onNewsClick(){
     this._newsService.newsObjSubject$.next(this.newsObj)
    //  console.log(this.newsObj)
  }

}

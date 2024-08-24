import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NewsService } from '../../service/news.service';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {


  // articles !: Inews[]

  countries : string[] = ['us', 'gb', 'ca' , 'au']

  search !: string
  searchCountry !: string 

  constructor(private _newsService: NewsService, private _router: Router) {}

  ngOnInit(): void {
    //  this.fetchingNewsData()
  }

//   viewDetails(article: any): void {
//     this._router.navigate(['/news-details']);
//   }

//   fetchingNewsData(){
//    this._newsService.fetchNews()
//     .subscribe((data) => {
//       console.log(data);
//       // this.articles = data
//     });
//   }


//   onCountryChange(type : Event){
//     this.searchCountry = (type.target as HTMLInputElement).value
//     // console.log(this.searchCountry);
//   }

}

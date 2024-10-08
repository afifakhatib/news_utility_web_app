import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { NewsService } from './shared/service/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'news_utility_web_app';

  countryArr: any[] = [
    {
      code: 'us',
      country: 'United States'
    },
    {
      code: 'gb',
      country: 'United Kingdom'
    },
    {
      code: 'au',
      country: 'Australia'
    }
  ];
  selectedCountry: string='in'

  constructor(
    private _newsService: NewsService
  ) { }


  ngOnInit(): void {
  }

  onChange(eve: MatSelectChange) {
    let value = eve.value;
    this._newsService.countrySubject$.next(value);
  }


}

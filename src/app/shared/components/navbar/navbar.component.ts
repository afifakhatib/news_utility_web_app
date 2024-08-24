import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

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

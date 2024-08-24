import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListingComponent } from './news-listing/news-listing.component';
import { NewsDashboardComponent } from './news-dashboard/news-dashboard.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { FilterNewsPipe } from './pipe/filterNews.pipe';
import { FromToDatePipePipe } from './pipe/from-to-date-pipe.pipe';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    NewsListingComponent,
    NewsDashboardComponent,
    NewsDetailsComponent,
    FilterNewsPipe,
    FromToDatePipePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,

  ],
  exports : [
    NewsDashboardComponent,
    FilterNewsPipe
  ]
})
export class UtilityNewsModule { }

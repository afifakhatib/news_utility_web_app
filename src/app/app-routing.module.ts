import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { NewsListingComponent } from './utility-news/news-listing/news-listing.component';
import { NewsDetailsComponent } from './utility-news/news-details/news-details.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { NewsDashboardComponent } from './utility-news/news-dashboard/news-dashboard.component';

const routes: Routes = [
  {
    path : '',
    component : NewsDashboardComponent
  },
  {
    path : 'news',
    component : NewsDashboardComponent
  },
  {
    path : 'news-detail',
    component : NewsDetailsComponent
  },
  {
    path : 'page-not-found',
    component : PageNotFoundComponent
  },
  {
    path : '**',
    redirectTo : 'page-not-found',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

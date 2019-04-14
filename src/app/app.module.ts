import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { EventListingContainerComponent } from './components/event-listing-container/event-listing-container.component';
import { RouterModule, Routes } from '@angular/router';
import { EventFiltersComponent } from './components/event-filters/event-filters.component';
import { SofarHeaderComponent } from './components/sofar-header/sofar-header.component';
import { EventResultsComponent } from './components/event-results/event-results.component';

const appRoutes: Routes = [
  {
    path: '', 
    component: EventsPageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EventsPageComponent,
    EventListingContainerComponent,
    EventFiltersComponent,
    SofarHeaderComponent,
    EventResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

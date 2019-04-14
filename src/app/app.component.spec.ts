import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SofarHeaderComponent } from './components/sofar-header/sofar-header.component';
import { EventFiltersComponent } from './components/event-filters/event-filters.component';
import { EventListingContainerComponent } from './components/event-listing-container/event-listing-container.component';
import { EventResultsComponent } from './components/event-results/event-results.component';
import { EventsPageComponent } from './pages/events-page/events-page.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        SofarHeaderComponent,
        EventFiltersComponent,
        EventListingContainerComponent,
        EventResultsComponent,
        EventsPageComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});

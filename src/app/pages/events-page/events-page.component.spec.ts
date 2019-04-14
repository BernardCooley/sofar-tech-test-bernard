import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsPageComponent } from './events-page.component';
import { EventListingContainerComponent } from '../../components/event-listing-container/event-listing-container.component';
import { EventFiltersComponent } from '../../components/event-filters/event-filters.component';
import { EventResultsComponent } from '../../components/event-results/event-results.component';

describe('EventsPageComponent', () => {
  let component: EventsPageComponent;
  let fixture: ComponentFixture<EventsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EventsPageComponent,
        EventListingContainerComponent,
        EventFiltersComponent,
        EventResultsComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

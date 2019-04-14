import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListingContainerComponent } from './event-listing-container.component';
import { EventFiltersComponent } from '../../components/event-filters/event-filters.component';
import { EventResultsComponent } from '../../components/event-results/event-results.component';

describe('EventListingContainerComponent', () => {
  let component: EventListingContainerComponent;
  let fixture: ComponentFixture<EventListingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EventListingContainerComponent,
        EventFiltersComponent,
        EventResultsComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

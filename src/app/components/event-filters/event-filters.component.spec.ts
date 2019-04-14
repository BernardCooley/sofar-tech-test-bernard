import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFiltersComponent } from './event-filters.component';

describe('EventFiltersComponent', () => {
  let component: EventFiltersComponent;
  let fixture: ComponentFixture<EventFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set active genre', () => {
    component.filterEvents('jazz');
    expect(component.activeGenre).toBe('jazz')
  })

  it('should list genres to filter by', () => {
    component.genres = ['rock', 'folk', 'jazz', 'all']
    const listContainerElement: HTMLElement = fixture.nativeElement;
    const listItems = listContainerElement.querySelectorAll('.filterItem');
    listItems.forEach((listItem, index) => {
      expect(listItem.textContent.trim()).toBe(component.genres[index].toUpperCase());
    });
  })
});

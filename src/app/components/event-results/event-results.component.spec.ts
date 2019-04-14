import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventResultsComponent } from './event-results.component';

describe('EventResultsComponent', () => {
  let component: EventResultsComponent;
  let fixture: ComponentFixture<EventResultsComponent>;
  let showsData = [
    {
      "date": {
        "dayOfWeek": "Thursday",
        "dayOfMonth": 13,
        "month": "Oct"
      },
      "location": "Whitechapel",
      "genre": "rock"
    }, {
      "date": {
        "dayOfWeek": "Thursday",
        "dayOfMonth": 13,
        "month": "Oct"
      },
      "location": "Hoxton",
      "genre": "jazz"
    }, {
      "date": {
        "dayOfWeek": "Friday",
        "dayOfMonth": 14,
        "month": "Oct"
      },
      "location": "Kensington",
      "genre": "rock"
    }, {
      "date": {
        "dayOfWeek": "Saturday",
        "dayOfMonth": 15,
        "month": "Oct"
      },
      "location": "Elephant and Castle",
      "genre": "folk"
    }, {
      "date": {
        "dayOfWeek": "Sunday",
        "dayOfMonth": 16,
        "month": "Oct"
      },
      "location": "Southbank",
      "genre": "rock"
    }, {
      "date": {
        "dayOfWeek": "Monday",
        "dayOfMonth": 17,
        "month": "Oct"
      },
      "location": "Camden",
      "genre": "jazz"
    }, {
      "date": {
        "dayOfWeek": "Tuesday",
        "dayOfMonth": 18,
        "month": "Oct"
      },
      "location": "Hackney",
      "genre": "folk"
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checks if default genre is all', () => {
    expect(component.genre).toBe('all')
  })

  it('should show correct genre input', () => {
    component.genre = 'jazz';
    component.getShows('jazz');
    fixture.detectChanges();
  })




  it('should display date', () => {
    const resultsContainerElement: HTMLElement = fixture.nativeElement;
    const resultsList = resultsContainerElement.querySelectorAll('.showResultsItem');
    resultsList.forEach((result, index) => {
      expect(result.querySelector('.dateContainer').textContent.trim()).toBe(showsData[index].date.dayOfMonth.toString())
    })
  })

  it('should display month', () => {
    const resultsContainerElement: HTMLElement = fixture.nativeElement;
    const resultsList = resultsContainerElement.querySelectorAll('.showResultsItem');
    resultsList.forEach((result, index) => {
      expect(result.querySelector('.monthContainer').textContent.trim()).toBe(showsData[index].date.month.toUpperCase())
    })
  })

  it('should display day', () => {
    const resultsContainerElement: HTMLElement = fixture.nativeElement;
    const resultsList = resultsContainerElement.querySelectorAll('.showResultsItem');
    resultsList.forEach((result, index) => {
      expect(result.querySelector('.day').textContent.trim()).toBe(showsData[index].date.dayOfWeek.toUpperCase())
    })
  })

  it('should display location', () => {
    const resultsContainerElement: HTMLElement = fixture.nativeElement;
    const resultsList = resultsContainerElement.querySelectorAll('.showResultsItem');
    resultsList.forEach((result, index) => {
      expect(result.querySelector('.location').textContent.trim()).toBe(showsData[index].location)
    })
  })
});

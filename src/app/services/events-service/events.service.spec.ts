import { TestBed } from '@angular/core/testing';
import { EventsService } from './events.service';

describe('EventsService', () => {

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventsService = TestBed.get(EventsService);
    expect(service).toBeTruthy();
  });

  it('should return correct genre', () => {
    const service: EventsService = TestBed.get(EventsService);
    expect(service.getShows('jazz')).toContain({
      "date": {
        "dayOfWeek": "Thursday",
        "dayOfMonth": 13,
        "month": "Oct"
      },
      "location": "Hoxton",
      "genre": "jazz"
    });
  });
});

import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { EventsService } from '../../services/events-service/events.service';

@Component({
  selector: 'app-event-results',
  templateUrl: './event-results.component.html',
  styleUrls: ['./event-results.component.scss']
})
export class EventResultsComponent implements OnInit {

  @Input() genre: string = 'all';
  private shows;

  constructor(private _eventsService: EventsService) {
    this.shows = this.getShows('all');
  }

  getShows(genre) {
    this.shows = this._eventsService.getShows(genre);
  }

  ngOnChanges(changes: SimpleChanges) {
    changes ? this.getShows(changes.genre.currentValue) : this.getShows('all');
  }

  ngOnInit() {
    this.getShows('all');
  }

}

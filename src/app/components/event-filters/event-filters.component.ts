import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-filters',
  templateUrl: './event-filters.component.html',
  styleUrls: ['./event-filters.component.scss']
})
export class EventFiltersComponent implements OnInit {
  @Output() genreFilter = new EventEmitter<string>();

  public genres: any = [
    'rock',
    'folk',
    'jazz',
    'all'
  ];
  public activeGenre: string = 'all';

  constructor() { }

  filterEvents(filter) {
    this.activeGenre = filter;
    this.genreFilter.emit(this.activeGenre);
  }

  ngOnInit() {
  }

}

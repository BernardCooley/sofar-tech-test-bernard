import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-listing-container',
  templateUrl: './event-listing-container.component.html',
  styleUrls: ['./event-listing-container.component.scss']
})
export class EventListingContainerComponent implements OnInit {

  public genre;

  constructor() { }

  filterEvents(event) {
    this.genre = event;
  }

  ngOnInit() {
  }

}

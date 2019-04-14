import { Injectable } from '@angular/core';
import { showsData } from '../../data/shows';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() {}

  getShows(genre: string) {
    return genre == 'all' ? showsData : showsData.filter(show => show.genre == genre);
  }

}

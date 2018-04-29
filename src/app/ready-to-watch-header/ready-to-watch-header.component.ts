import {Component, Input, OnInit} from '@angular/core';
import {ReadyToWatchInfo} from "../ready-to-watch-info";

@Component({
  selector: 'alrtw-ready-to-watch-header',
  templateUrl: './ready-to-watch-header.component.html',
  styleUrls: ['./ready-to-watch-header.component.scss']
})
export class ReadyToWatchHeaderComponent implements OnInit {
  @Input() animes: Array<ReadyToWatchInfo>;
  order = {
    name: 1
  };

  constructor() { }

  ngOnInit() {
  }

  sortNumeric(prop) {
    if (!this.order[prop]) {
      this.order[prop] = 1;
    }
    this.animes.sort((animeA, animeB) => (animeA[prop] - animeB[prop]) * this.order[prop]);
    this.order[prop] = -this.order[prop];
  }

  sortByName() {
    if (!this.order.name) {
      this.order.name = 1;
    }
    this.animes.sort((animeA, animeB) => (animeA.title).localeCompare(animeB.title) * this.order.name);
    this.order.name = -this.order.name;
  }
}

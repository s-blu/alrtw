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
    name: 1,
    rtw: 1
  };

  constructor() { }

  ngOnInit() {
  }

  sortByRtwInfo() {
    this.animes.sort((animeA, animeB) => {
      let compare = (animeA.episodesReady - animeB.episodesReady) * this.order.rtw;
      if (compare === 0) {
        compare = (animeB.nextAiring - animeA.nextAiring) * this.order.rtw;
      }

      return compare;
    });
    this.order.rtw = -this.order.rtw;
  }

  sortByName() {
    this.animes.sort((animeA, animeB) => (animeA.title).localeCompare(animeB.title) * this.order.name);
    this.order.name = -this.order.name;
  }
}

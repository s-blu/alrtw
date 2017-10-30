import {Component, Input, OnInit} from '@angular/core';
import {ReadyToWatchInfo} from '../ready-to-watch-info';

@Component({
  selector: 'alrtw-anime-entry',
  templateUrl: './anime-entry.component.html',
  styleUrls: ['./anime-entry.component.scss']
})
export class AnimeEntryComponent implements OnInit {
  @Input() anime: ReadyToWatchInfo;
  sevenDaysAway;
  timeUntilNextEpisode;

  constructor() {
  }

  getTimeUntilString(secs) {
    const days = Math.floor(secs / (3600 * 24));
    secs  -= days * 3600 * 24;
    const hrs   = Math.floor(secs / 3600);
    secs  -= hrs * 3600;
    const mnts = Math.floor(secs / 60);

    return `${days}d ${hrs}h ${mnts}min`;
  }

  ngOnInit() {
    this.sevenDaysAway = this.anime.nextAiring === 7 * 24 * 60 * 60;
    this.timeUntilNextEpisode = this.getTimeUntilString(this.anime.nextAiring);
  }

}

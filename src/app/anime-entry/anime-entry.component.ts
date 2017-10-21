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
  }

}

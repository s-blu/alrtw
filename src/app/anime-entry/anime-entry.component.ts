import {Component, Input, OnInit} from '@angular/core';
import {AnimeStatus, ReadyToWatchInfo} from '../ready-to-watch-info';

@Component({
  selector: 'alrtw-anime-entry',
  templateUrl: './anime-entry.component.html',
  styleUrls: ['./anime-entry.component.scss']
})
export class AnimeEntryComponent implements OnInit {
  @Input() anime: ReadyToWatchInfo;
  timeUntilNextEpisode;
  episodesReadyString;
  forecastString;

  constructor() {
  }

  getTimeUntilString(secs) {
    if (secs === -1) {
      return null;
    }

    const days = Math.floor(secs / (3600 * 24));
    secs  -= days * 3600 * 24;
    const hrs   = Math.floor(secs / 3600);
    secs  -= hrs * 3600;
    const mnts = Math.floor(secs / 60);

    return `${days}d ${hrs}h ${mnts}min`;
  }

  getEpisodesReadyString() {
    let epsReadyString = '';

    if (this.anime.episodesReady === 1) {
      epsReadyString = `Episode ${this.anime.latestEpisode} is`;
    } else if (this.anime.episodesReady === 2) {
      epsReadyString = `Episodes ${this.anime.latestEpisode - 1} and ${this.anime.latestEpisode} are`;
    } else {
      epsReadyString = `Episodes ${this.anime.latestEpisode - this.anime.episodesReady + 1} to ${this.anime.latestEpisode} are`
    }
    epsReadyString += ' ready to watch!';

    return epsReadyString;
  }

  getForecastString() {
    let forecast = "";

    if (this.anime.airingStatus === AnimeStatus.RELEASING || this.anime.airingStatus === AnimeStatus.NOT_YET_RELEASING) {
      forecast = `Episode ${this.anime.latestEpisode + 1} is available in ${this.timeUntilNextEpisode}!`
    } else {
      forecast = `This anime is ${this.anime.airingStatus}. No more episodes incoming!`
    }

    return forecast;
  }

  ngOnInit() {
    this.timeUntilNextEpisode = this.getTimeUntilString(this.anime.nextAiring);
    this.episodesReadyString = this.getEpisodesReadyString();
    this.forecastString = this.getForecastString();
  }

}

import {Component, OnInit} from '@angular/core';

import {AnimeStatus, ReadyToWatchInfo} from '../ready-to-watch-info'
import {AniListQueryService} from "../ani-list-query.service";
import {AlrtwMaterialModule} from "../alrtw-material/alrtw-material.module";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'alrtw-ready-to-watch-list',
  templateUrl: './ready-to-watch-list.component.html',
  styleUrls: ['./ready-to-watch-list.component.scss'],
  providers: [AniListQueryService, AlrtwMaterialModule]
})
export class ReadyToWatchListComponent implements OnInit {
  animes;
  listUpdated;
  username;
  aniListUserName;
  errorText = "";
  greetingString;

  constructor(private aniListQueryService: AniListQueryService, private activatedRoute: ActivatedRoute) {
      this.activatedRoute.queryParams.subscribe(params => {
        if (params['username']) {
          this.username = params['username'];
          this.uiGetList();
        }
      });
  }

  uiGetList() {
    if (!this.username || this.username === "") {
      this.setError('Please input a username first');
      return;
    }
    this.getReadyToWatchInfoByUser(this.username)
  }

  private getReadyToWatchInfoByUser(username) {
    let currentWatchedAnimes;

    this.aniListQueryService.queryCurrentAnimeByUser(username).subscribe(currAnimeRes => {
        currentWatchedAnimes = currAnimeRes['data'].Page.mediaList;
        this.aniListUserName = username;

        this.aniListQueryService.queryAiringSheduleOfCurrentAnime(this.getListOfAnimeIds(currentWatchedAnimes))
          .subscribe(animeAiringRes => {

            this.animes = this.transformToReadyToWatchInfo(currentWatchedAnimes, animeAiringRes['data'].Page.airingSchedules);
            this.greetingString = this.getGreetingString(this.animes);

            this.saveUpdatedTime();
            this.resetError();
          },
          err => this.processFailure(this.aniListQueryService.getErrorText(err.error))
        );
      },
      err => this.processFailure(this.aniListQueryService.getErrorText(err.error))
  )}

  private transformToReadyToWatchInfo(currentAnimes, animeAiringSchedules) {
    const readyToWatchInfos = [];

    currentAnimes.forEach(currentAnimeEntry => {
      const airingInfo = animeAiringSchedules.find(item => item.mediaId === currentAnimeEntry.mediaId);
      let episodesReadyToWatch,
        timeUntilAiring = 0,
        mostRecentEpisode = currentAnimeEntry.media.episodes;

      // if the anime is not longer airing, there is no airing schedule. Calculate from total.
      if (currentAnimeEntry.media.status === AnimeStatus.FINISHED || currentAnimeEntry.status === AnimeStatus.CANCELLED) {
        episodesReadyToWatch = currentAnimeEntry.media.episodes - currentAnimeEntry.progress;
      } else if (airingInfo) {
        // calculate - 1 since we got the info for the next episode to air, not the last released.
        episodesReadyToWatch = airingInfo.episode - currentAnimeEntry.progress - 1;
        timeUntilAiring = airingInfo.timeUntilAiring;
        mostRecentEpisode = airingInfo.episode - 1;
      } else {
        // If the anime is not finished and no airingInfo is available, then its release is further than 1 week away
        episodesReadyToWatch = 0; // FIXME I HAVE NO FUCKING IDEA
        timeUntilAiring = 7 * 24 * 60 * 60 // the good 'ol Chapter 1 way to calculate 7 days in seconds.
      }

      readyToWatchInfos.push(new ReadyToWatchInfo(
        currentAnimeEntry.mediaId,
        currentAnimeEntry.media.title.userPreferred || currentAnimeEntry.media.title.romaji,
        episodesReadyToWatch,
        timeUntilAiring,
        mostRecentEpisode,
        currentAnimeEntry.media.status
      ));
    });

    return readyToWatchInfos;
  }

  private getGreetingString(readyToWatchInfos) {
    const totalReadyEpisodes = readyToWatchInfos.reduce((acc, info) => acc + info.episodesReady, 0);
    return `Currently ${totalReadyEpisodes || 'the following'} ` +
            `${totalReadyEpisodes === 1 ? 'episode is' : 'episodes are'} waiting for you: `;
  }

  private getListOfAnimeIds(currentAnimes) {
    const animeIds = [];
    for (let i = 0; i < currentAnimes.length; i++) {
      animeIds.push(currentAnimes[i].mediaId);
    }
    return animeIds;
  }

  private setError(text) {
    this.errorText = "Something went wrong! " + text;
  }

  private processFailure(error) {
    this.setError(error);
    this.animes = null;
    this.aniListUserName = "";
    this.listUpdated = null;
  }

  private resetError() {
    this.errorText = "";
  }

  private saveUpdatedTime() {
    this.listUpdated = new Date();
  }

  ngOnInit() {}
}



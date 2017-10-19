import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {ReadyToWatchInfo} from '../ready-to-watch-info'

@Component({
  selector: 'alrtw-ready-to-watch-list',
  templateUrl: './ready-to-watch-list.component.html',
  styleUrls: ['./ready-to-watch-list.component.scss']
})
export class ReadyToWatchListComponent implements OnInit {
  aniListUrl = 'https://graphql.anilist.co';
  currentAnimeAiringStatus;
  currentWatchedAnimes;
  animes;
  username;
  errorText = "";


  constructor(private http: HttpClient) {
  }

  uiGetList() {
    if (!this.username || this.username === "") {
      this.setError('Please input a username first');
      return;
    }
    this.getReadyToWatchInfoByUser(this.username)

  }

  private getReadyToWatchInfoByUser(username) {
    this.queryCurrentAnimeByUser(username).subscribe(currAnimeRes => {
        this.currentWatchedAnimes = currAnimeRes['data'].Page.mediaList;

        this.queryAiringSheduleOfCurrentAnime(this.getListOfAnimeIds()).subscribe(animeAiringRes => {
            this.currentAnimeAiringStatus = animeAiringRes['data'].Page.airingSchedules;

            // FIXME build mapping by using find() to get the first occurrence, means nearest airing time
            const animeMapping = {};
            this.currentAnimeAiringStatus.forEach(item => {
              animeMapping[item.mediaId] = item;
            });
            this.animes = this.transformToReadyToWatchInfo(animeMapping);
            this.resetError();
          },
          err => this.setError(err.statusText)
        );
      },
      err => this.setError(err.statusText))
  }

  private transformToReadyToWatchInfo(animeMapping) {
    const readyToWatchInfos = [];

    this.currentWatchedAnimes.forEach(currentAnimeEntry => {
      const airingInfo = animeMapping[currentAnimeEntry.mediaId];
      let episodesReadyToWatch;

      // there is only a airing info if the anime is releasing or not yet released. Otherwise calculate remaining episodes from total
      if (airingInfo) {
        //FIXME calculate minus one here since you get the next episode that will be aired, not the last aired
         episodesReadyToWatch = airingInfo.episode - currentAnimeEntry.progress;
      } else {
        episodesReadyToWatch = currentAnimeEntry.media.episodes - currentAnimeEntry.progress;
      }

      // TODO calculate/add time to next episode

      readyToWatchInfos.push(new ReadyToWatchInfo(
        currentAnimeEntry.mediaId,
        currentAnimeEntry.media.title,
        episodesReadyToWatch,
        0 // FIXME
      ));
    });

    return readyToWatchInfos;
  }

  private queryAiringSheduleOfCurrentAnime(animeIds) {
    const getAiringStatusOfCurrentAnimesQuery = {
      query: `query($mediaIds: [Int], $airingAt: Int)  {
          Page {
            airingSchedules(mediaId_in: $mediaIds, airingAt_lesser: $airingAt) { //FIXME change airingAt_lesser to airingAt_greater now to get all episodes in the future
      variables: {
        mediaIds: animeIds,
        airingAt: Math.round(Date.now() / 1000) // current time since epoch in seconds because the api wants it so
      }
    };

    return this.http.post(this.aniListUrl, getAiringStatusOfCurrentAnimesQuery);
  }

  private queryCurrentAnimeByUser(username) {
    const getCurrentAnimeByUser = {
      query: `query  {
      Page {
        mediaList(userName: "${username}", status:CURRENT) {
          mediaId
          progress
          media {
            title {
              userPreferred
              romaji
            }
            status
            episodes
          }
        }
      }
    }`
    };

    return this.http.post(this.aniListUrl, getCurrentAnimeByUser);
  }

  private getListOfAnimeIds() {
    const animeIds = [];
    for (let i = 0; i < this.currentWatchedAnimes.length; i++) {
      animeIds.push(this.currentWatchedAnimes[i].mediaId);
    }
    return animeIds;
  }

  private setError(text) {
    if (text === 500) {
      text = 'Could not get any data. Maybe wrong username?'
    }

    this.errorText = "Something went wrong! " + text;
  }

  private resetError() {
    this.errorText = "";
  }

  ngOnInit() {
  }

}

enum AnimeStatus {
  FINISHED,
  RELEASING,
  NOT_YET_RELEASED,
  CANCELLED
}

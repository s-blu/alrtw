import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import { ReadyToWatchInfo } from '../ready-to-watch-info'

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

          const animeMapping = {};
          this.currentAnimeAiringStatus.forEach(item => {
            animeMapping[item.mediaId] = item;
          });
          this.animes = this.transformToReadyToWatchInfo(animeMapping)
          this.resetError();
        },
        err => this.setError(err.statusText)
      );
    },
    err => this.setError(err.statusText))
  }

  private transformToReadyToWatchInfo(animeMapping) {
    const readyToWatchInfos = [];

    Object.keys(animeMapping).forEach(mediaId => {
      const airingInfo = animeMapping[mediaId];
      const currentAnimeEntry = this.currentWatchedAnimes.find(item => {
        return item.mediaId === airingInfo.mediaId;
      });

      const episodesReadyToWatch = airingInfo.episode - currentAnimeEntry.progress;
      readyToWatchInfos.push(new ReadyToWatchInfo(
        airingInfo.mediaId,
        airingInfo.media.title,
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
            airingSchedules(mediaId_in: $mediaIds, airingAt_lesser: $airingAt) {
            id
            mediaId
            episode
            airingAt
            timeUntilAiring
            media {
              title {
                userPreferred
                romaji
              }
              episodes
            }
          }
          }
        }`,
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
          id
          mediaId
          notes
          progress
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

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
  aniListUserName;
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
        this.aniListUserName = username;

        this.queryAiringSheduleOfCurrentAnime(this.getListOfAnimeIds()).subscribe(animeAiringRes => {
            this.currentAnimeAiringStatus = animeAiringRes['data'].Page.airingSchedules;

            this.animes = this.transformToReadyToWatchInfo(this.currentAnimeAiringStatus);
            this.resetError();
          },
          err => this.setError(err.error)
        );
      },
      err => this.setError(err.error))
  }

  private transformToReadyToWatchInfo(animeAiringSchedules) {
    const readyToWatchInfos = [];

    this.currentWatchedAnimes.forEach(currentAnimeEntry => {
      const airingInfo = animeAiringSchedules.find(item => item.mediaId === currentAnimeEntry.mediaId);
      let episodesReadyToWatch,
        timeUntilAiring = 0;

      // if the anime is not longer airing, there is no airing schedule. Calculate from total.
      if (currentAnimeEntry.media.status === AnimeStatus.FINISHED || currentAnimeEntry.status === AnimeStatus.CANCELLED) {
        episodesReadyToWatch = currentAnimeEntry.media.episodes - currentAnimeEntry.progress;
      } else if (airingInfo) {
        // calculate - 1 since we got the info for the next episode to air, not the last released.
        episodesReadyToWatch = airingInfo.episode - currentAnimeEntry.progress - 1;
        timeUntilAiring = airingInfo.timeUntilAiring;
      } else {
        // If the anime is not finished and no airingInfo is available, then its release is further than 1 week away
        episodesReadyToWatch = 0; // FIXME I HAVE NO FUCKING IDEA
        timeUntilAiring = 7 * 24 * 60 * 60 // the good 'ol Chapter 1 way to calculate 7 days in seconds.
      }

      readyToWatchInfos.push(new ReadyToWatchInfo(
        currentAnimeEntry.mediaId,
        currentAnimeEntry.media.title,
        episodesReadyToWatch,
        timeUntilAiring
      ));
    });

    return readyToWatchInfos;
  }

  private queryAiringSheduleOfCurrentAnime(animeIds) {
    const now = new Date();
    const inSevenDays = new Date();
    inSevenDays.setDate(now.getDate() + 7);

    const getAiringStatusOfCurrentAnimesQuery = {
      query: `
       query($mediaIds: [Int], $now: Int, $inSevenDays: Int)  {
         Page {
          airingSchedules(mediaId_in: $mediaIds, airingAt_greater: $now, airingAt_lesser: $inSevenDays) {
            mediaId
            episode
            airingAt
            timeUntilAiring
          }
        }
      }`,
      variables: {
        mediaIds: animeIds || [],
        now: Math.round(now.getTime() / 1000), // current time since epoch in seconds because the api wants it so
        inSevenDays: Math.round(inSevenDays.getTime() / 1000)
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
    if (text instanceof Object) {
      text = text.errors;
    }
    this.errorText = "Something went wrong! " + text;
  }

  private resetError() {
    this.errorText = "";
  }

  ngOnInit() {
  }

}

const AnimeStatus = {
  FINISHED: "FINISHED",
  CANCELLED: "CANCELLED",
  NOT_YET_RELEASING: "NOT_YET_RELEASING",
  RELEASING: "RELEASING"
};

import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'alrtw-ready-to-watch-list',
  templateUrl: './ready-to-watch-list.component.html',
  styleUrls: ['./ready-to-watch-list.component.scss']
})
export class ReadyToWatchListComponent implements OnInit {
  aniListUrl = 'https://graphql.anilist.co';
  currentAnimeAiringStatus;
  currentWatchedAnimes;
  username;

  constructor(private http: HttpClient) {
    this.username = 'Saari'; // FIXME get this through input
    this.getUserAnimeList(this.username);
  }

  getUserAnimeList(username) {
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
        mediaIds: [],
        airingAt: Math.round(Date.now() / 1000) // current time since epoch in seconds because the api wants it so
      }
    };

      this.http.post(this.aniListUrl, getCurrentAnimeByUser)
        .subscribe(currAnimeRes => {
          let animeIds = [];

          this.currentWatchedAnimes = currAnimeRes['data'].Page.mediaList;
          for (let i = 0; i < this.currentWatchedAnimes.length; i++) {
            animeIds.push(this.currentWatchedAnimes[i].mediaId);
            console.log(this.currentWatchedAnimes[i].mediaId)
          }
          getAiringStatusOfCurrentAnimesQuery.variables.mediaIds = animeIds;
          console.log(getAiringStatusOfCurrentAnimesQuery.variables.airingAt);
          this.http.post(this.aniListUrl, getAiringStatusOfCurrentAnimesQuery).subscribe(animeAiringRes => {
            this.currentAnimeAiringStatus = animeAiringRes['data'].Page.mediaList;
            console.log()
          },
          err => console.log('getting the airing status errored: ' + err))

        });
  }



  ngOnInit() {
  }

}

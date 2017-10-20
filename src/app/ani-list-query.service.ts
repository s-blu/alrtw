import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AniListQueryService {
  aniListUrl = 'https://graphql.anilist.co';

  constructor(private http: HttpClient) { }

  queryAiringSheduleOfCurrentAnime(animeIds) {
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

  queryCurrentAnimeByUser(username) {
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

}

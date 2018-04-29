import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AniListQueryService {
  aniListUrl = 'https://graphql.anilist.co';

  constructor(private http: HttpClient) { }

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
            nextAiringEpisode {
              mediaId
              episode
              airingAt
              timeUntilAiring
            }
          }
        }
      }
    }`
    };

    return this.http.post(this.aniListUrl, getCurrentAnimeByUser);
  }

  getErrorText(error) {
    let text = 'Server says no!';

    if (error.errors && error.errors[0].status) {
      text = this._getErrorMsgForStatus(error.errors[0].status)
    }

    return text;
  }

  private _getErrorMsgForStatus(status) {
    const errorMsg = {
      500: 'Cannot get list of user. Username wrong?'
    };

    if (errorMsg[status]) {
      return errorMsg[status];
    } else {
      return "Unknown error: " + status;
    }
  }
}

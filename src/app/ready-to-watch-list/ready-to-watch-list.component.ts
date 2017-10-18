import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'alrtw-ready-to-watch-list',
  templateUrl: './ready-to-watch-list.component.html',
  styleUrls: ['./ready-to-watch-list.component.scss']
})
export class ReadyToWatchListComponent implements OnInit {
  aniListUrl = 'https://anilist.co/api/';
  animeList;
  username;

  constructor(private http: HttpClient) {
    this.username = 'Saari'; // FIXME get this through input
    this.getUserAnimeList(this.username);
  }

  getUserAnimeList(username) {


    this.getClientCredentialToken().subscribe(token => {
      console.log('got auth token: ' + token);
      const getAnimeListUrl = this.aniListUrl + `user/${username}/animelist?access_token=${token}`;
      console.log(getAnimeListUrl);

      this.http.get(getAnimeListUrl, {
        params: new HttpParams().set('id', '3'),
      })
        .subscribe(response => {
          // this.animeList = response;
        });
    },
    err => console.log('Getting a auth token was not successful: ' + err));
  }

  getClientCredentialToken() {
    const postBody = {
      grant_type    : 'client_credentials',
      client_id     : '127',
      client_secret : 'NNfsSxPBwrIb7I07PXZ5egSWVhQzpgAFQxgFOGf8'
    };

    console.log('trying to get client cred');
    return this.http.post(this.aniListUrl + 'auth/access_token', postBody)
  }



  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
      const getAnimeListUrl = this.aniListUrl + `user/${username}/animelist?access_token=${token}`;
      console.log(getAnimeListUrl);

      this.http.get(getAnimeListUrl)
        .subscribe(response => {
          // this.animeList = response;
        });
    });
  }

  getClientCredentialToken() {
    console.log('trying to get client cred')
    return this.http.get(this.aniListUrl + 'auth/access_token')
  }

  ngOnInit() {
  }

}

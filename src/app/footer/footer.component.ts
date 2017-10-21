import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'alrtw-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnChanges {
  @Input() aniListUsername: String;

  aniList = {url: 'https://anilist.co/', text: 'AniList'};
  userAnimeList = {url: 'https://anilist.co/login', text: 'Own AnimeList'};
  impressum = {url: 'http://readytowatch.s-blu.de/impressum.html', text: 'Impressum'};

  footerlinks = [
    this.aniList,
    this.userAnimeList,
    this.impressum
  ];


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.aniListUsername) {
      if (changes.aniListUsername.currentValue && changes.aniListUsername.currentValue !== "") {
        this.userAnimeList.url = `https://anilist.co/user/${changes.aniListUsername.currentValue}/animelist`
      } else {
        this.userAnimeList.url = 'https://anilist.co/login';
      }
    }
  }
}



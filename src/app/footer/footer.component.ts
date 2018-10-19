import {Component, OnInit} from '@angular/core';

declare function require(moduleName: string): any;
const { version: appVersion } = require('../../../package.json');

@Component({
  selector: 'alrtw-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  aniList = {url: 'https://anilist.co/', text: 'AniList'};
  github = {url: 'https://github.com/s-blu/alrtw', text: 'GitHub'};
  impressum = {url: 'http://readytowatch.s-blu.de/impressum.html', text: 'Impressum & Datenschutz'};

  version = appVersion;

  footerlinks = [
    this.aniList,
    this.github,
    this.impressum
  ];


  constructor() { }

  ngOnInit() {
  }
}



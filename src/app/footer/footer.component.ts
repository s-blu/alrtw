import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'alrtw-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  aniList = {url: 'https://anilist.co/', text: 'AniList'};
  impressum = {url: 'http://readytowatch.s-blu.de/impressum.html', text: 'Impressum'};

  footerlinks = [
    this.aniList,
    this.impressum
  ];


  constructor() { }

  ngOnInit() {
  }
}



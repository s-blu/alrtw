import {Component, Input, OnInit} from '@angular/core';
import {ReadyToWatchInfo} from '../ready-to-watch-info';

@Component({
  selector: 'alrtw-anime-entry',
  templateUrl: './anime-entry.component.html',
  styleUrls: ['./anime-entry.component.scss']
})
export class AnimeEntryComponent implements OnInit {
  @Input() anime: ReadyToWatchInfo;
  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { Globals } from 'globals';

@Component({
  selector: 'alrtw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '[alrtw] Ready to Watch';
  username = Globals.aniListUsername;

}

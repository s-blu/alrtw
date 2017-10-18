import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReadyToWatchListComponent } from './ready-to-watch-list/ready-to-watch-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadyToWatchListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReadyToWatchListComponent } from './ready-to-watch-list/ready-to-watch-list.component';
import { AnimeEntryComponent } from './anime-entry/anime-entry.component';
import {AlrtwMaterialModule} from "./alrtw-material/alrtw-material.module";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadyToWatchListComponent,
    AnimeEntryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AlrtwMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

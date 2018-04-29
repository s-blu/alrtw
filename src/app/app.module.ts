import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ReadyToWatchListComponent } from './ready-to-watch-list/ready-to-watch-list.component';
import { AnimeEntryComponent } from './anime-entry/anime-entry.component';
import {AlrtwMaterialModule} from "./alrtw-material/alrtw-material.module";
import { FooterComponent } from './footer/footer.component';
import { ReadyToWatchHeaderComponent } from './ready-to-watch-header/ready-to-watch-header.component';


const appRoutes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
    ReadyToWatchListComponent,
    AnimeEntryComponent,
    FooterComponent,
    ReadyToWatchHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AlrtwMaterialModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
  }

}


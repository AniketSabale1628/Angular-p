import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AniketComponent } from './aniket/aniket.component';

@NgModule({
  declarations: [
    AppComponent,
    AniketComponent
 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

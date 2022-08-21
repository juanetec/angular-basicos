import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModules } from './heroes/heroes.modulo';
import { ContadorModules } from './contador/contador.modulo';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModules,
    ContadorModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

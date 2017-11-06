import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RowerComponent } from './rower/rower.component';
import { ListaRowerowComponent } from './lista-rowerow/lista-rowerow.component';

@NgModule({
  declarations: [
    AppComponent,
    RowerComponent,
    ListaRowerowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { TickerComponent } from './ticker/ticker.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { MemoryListComponent } from './memories/memory-list/memory-list.component';
import { MemoryCardComponent } from './memories/memory-card/memory-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    TickerComponent,
    NavbarComponent,
    MemoryListComponent,
    MemoryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

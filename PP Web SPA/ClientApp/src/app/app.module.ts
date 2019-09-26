import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PartyEventComponent } from './party-event/party-event.component';
import { PartyEventLocationComponent } from './party-event/party-event-location/party-event-location.component';
import { PartyEventFoodComponent } from './party-event/party-event-food/party-event-food.component';
import { PartyEventDrinksComponent } from './party-event/party-event-drinks/party-event-drinks.component';
import { PartyEventGamesComponent } from './party-event/party-event-games/party-event-games.component';
import { PartyEventMusicComponent } from './party-event/party-event-music/party-event-music.component';
import { DevExtremeModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PartyEventComponent,
    PartyEventLocationComponent,
    PartyEventFoodComponent,
    PartyEventDrinksComponent,
    PartyEventGamesComponent,
    PartyEventMusicComponent,
    DevExtremeModule,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'party-event', component: PartyEventComponent },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

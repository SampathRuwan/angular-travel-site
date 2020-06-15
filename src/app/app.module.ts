import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FlightsComponent } from './flights/flights.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { PromotionsComponent } from './promotions/promotions.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FlightsComponent,
    DestinationsComponent,
    HolidaysComponent,
    PromotionsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightsComponent } from './flights/flights.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { PromotionsComponent } from './promotions/promotions.component';

const routes: Routes = [
  {path:  '', component:  HomeComponent },
  {path:  'flights', component:  FlightsComponent },
  {path:  'destinations', component:  DestinationsComponent },
  {path:  'holidays', component:  HolidaysComponent },
  {path:  'promotions', component:  PromotionsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

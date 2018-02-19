import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { FlightService } from './flight-booking/flight-search/flight.service';
import { CityPipe } from './shared/city.pipe';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { RouterModule, PreloadAllModules } from "@angular/router";
import { APP_ROUTES } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    
    // FlightBookingModule, // Verweis auf lazy Module
                            // verhindert Lazy Loading!

    RouterModule.forRoot(APP_ROUTES, {
      // useHash: true
      preloadingStrategy: PreloadAllModules
    })
  ],
  declarations: [
    AppComponent,
    SidebarComponent, // Core?
    NavbarComponent // Core?
,
    HomeComponent
],
  providers: [
    // FlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { FlightService } from './flight.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  //providers: [FlightService]
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  
  // *ngFor="let f of flights" 
  get flights(): Array<Flight> {
    return this.flightService.flights;
  }
  
  selectedFlight: Flight;

  basket: object = {
    "3": true,
    "5": true
  };

  // private http: HttpClient;
  constructor(private flightService: FlightService) { 
    // this.http = http;
  }

  search(): void {
    
    this.flightService.load(this.from, this.to);

  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

  ngOnInit() {
  }

}
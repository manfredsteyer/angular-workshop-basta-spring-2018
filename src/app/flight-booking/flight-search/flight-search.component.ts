import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  // private http: HttpClient;
  constructor(private http: HttpClient) { 
    // this.http = http;
  }

  search(): void {

    let url = 'http://www.angular.at/api/flight';

    let params = new HttpParams()
                      .set('from', this.from)
                      .set('to', this.to);

    let headers = new HttpHeaders()
                      .set('Accept', 'application/json');

    this.http.get<Flight[]>(url, { params, headers }).subscribe(
      flights => { this.flights = flights; },
      err => { console.error('error loading flights', err); }
    );
    
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

  ngOnInit() {
  }

}

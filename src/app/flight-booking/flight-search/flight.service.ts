import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Flight } from '../../entities/flight';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class FlightService {

    constructor(private http: HttpClient) { }

    find(from: string, to: string): Observable<Flight[]> {
        
        let url = 'http://www.angular.at/api/flight';

        let params = new HttpParams()
                          .set('from', from)
                          .set('to', to);
    
        let headers = new HttpHeaders()
                          .set('Accept', 'application/json');
    
        return this.http.get<Flight[]>(url, { params, headers });
    }

}
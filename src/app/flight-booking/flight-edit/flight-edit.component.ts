import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from '../flight-search/flight.service';
import { Flight } from '../../entities/flight';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {

  id: string;
  showDetails: string;
  flight: Flight;
  message: string;

  constructor(
    private router: ActivatedRoute,
    private flightService: FlightService
  ) { }

  ngOnInit() {
    this.router.params.subscribe(p => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];

      this.flightService.findById(this.id).subscribe(
        flight => { this.flight = flight; },
        err => { console.error('Error loading Flights', err); }
      );
    });
  }

  save(): void {
    this.flightService.save(this.flight).subscribe(
      (flight: Flight) => {
        this.flight = flight;
        console.debug('Saved flight!');
        this.message = 'Flight saved!';
      },
      err =>{
        console.debug('Error saving flight', err);
        this.message = 'Error saving Flight!';
      }
    );
  }

}

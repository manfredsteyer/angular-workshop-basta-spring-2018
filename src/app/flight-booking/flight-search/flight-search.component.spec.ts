/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FlightSearchComponent } from './flight-search.component';
import { FlightService } from './flight.service';

fdescribe('FlightSearchComponent', () => {

  beforeEach(() => {
  });

  it('should not have loaded flights initially', () => {
    let comp = new FlightSearchComponent(new FlightService(null));
    expect(comp.flights.length).toBe(0);
  });

});

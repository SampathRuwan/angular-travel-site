import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }


  destination = '';
  departureDate = '';
  returnDate = '';
  guests = '';

  selectedDestination(event) {
    this.destination = event.target.value;
  }

  numberOfGuests(event) {
    this.guests = event.target.value;
  }

  ngOnInit() {
  }

  searchResults() {
    // TODO: get form data and send it to the service
  }

}

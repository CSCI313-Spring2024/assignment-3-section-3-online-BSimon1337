import { Component } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
    housingLocation: HousingLocation = {
      id: 9999,
      name: 'Test Home',
      city: 'Test city',
      state: 'ST',
      photo: `${this.baseUrl}/example-house.jpg`,
      availableUnits: 99,
      wifi: true,
      laundry: false,
    };

    //Had to add a line so that git would recognize changes
}

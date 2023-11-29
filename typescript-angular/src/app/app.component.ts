import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // pretend creating an online store for a bike (bicycle) shop
  // the shop only sells one bike with three different sizes: small, medium, large
  // we want to allow customers to determine bike fit with a suitable bike size given their height
  // we've been given a bike size chart and have come up with the criterias:
  //  given a height from 155 up to 175 cm, recommend a size small bike
  //  given a height of over 175 up to 195 cm, recommend a size medium bike
  //  given a height of over 195 up to 215 cm, recommend a size large bike
  //  if no suitable bike size, advise:
  //  "No bike size fits. Please contact our store for further assitance"

  customerHeight: number;
  bikeSize: string;

  getBikeSize(): void {
    if (this.customerHeight >= 155 && this.customerHeight <= 175) {
      this.bikeSize = 'Small';
    } else if (this.customerHeight > 175 && this.customerHeight <= 195) {
      this.bikeSize = 'Medium';
    } else if (this.customerHeight > 195 && this.customerHeight <= 215) {
      this.bikeSize = 'Large';
    } else {
      this.bikeSize = 'NA';
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;

   constructor() { }

   ngOnInit() { }

   // addItem method expects to take in an object with a parameter named "item" and will return a boolean (true or false) if the item is able to be added to the cargoHold
   addItem(item : object) : boolean {
    // use the array method to push the item to the cargoHold array
      this.cargoHold.push(item);
    // use an addition assignment to add the value assigned to the 'mass' key of the object to the cargoMass 
      this.cargoMass += item['mass'];
      // return true or false if the maximumAllowedMass (2000) minus the current amount of mass in the cargoMass is <= 200s
      return this.maximumAllowedMass - this.cargoMass <= 200;
   }
}

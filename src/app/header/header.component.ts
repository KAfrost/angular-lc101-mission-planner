import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  missionName: string = "Mars 2030";
  rocketName: string = "Plasma Max";
  editingMission: boolean = false;
  // we have to add the editingRocket property to this class and set it to false because that is the default value we want.
  editingRocket: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  updateMission(updatedName: string) {
    this.missionName = updatedName;
    this.editingMission = false;
  }

  // the updateRocket method expects a string value to be passed as an argument and we call that parameter "updatedName"
  updateRocket(updatedName: string) {
    // Change the rocketName property on this instance of the headerComponent to whatever value is passed as the argument when the method is called.
    this.rocketName = updatedName;
    // change the editingRocket property back to false, cause we're not editing it anymore.
    this.editingRocket = false;
  }


}

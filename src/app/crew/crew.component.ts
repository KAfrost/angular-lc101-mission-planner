import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  memberBeingEdited: object = null;
  inCrew: boolean = false;

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  constructor() { }

  ngOnInit() {
  }
  // add method expects a string value to be passed as an argument and we call that parameter "memberName", and a boolean value to be passed with that parameter called "isFirst"
  add(memberName: string, isFirst: boolean) {
    //iterate across the current crew array of objects
    for (let i=0; i < this.crew.length; i++) {
      // if the current crew object it's on has a name property that is the same as the memberName that has been passed in
        if(this.crew[i]['name'] === memberName) {
            // set the inCrew property to true;
            this.inCrew = true;
        }
    }
    // if the inCrew property is false
    if (!this.inCrew) {
      //create an object from the arguments that are passed in and push that new object into the crew array
        this.crew.push({name: memberName, firstMission: isFirst});
    }
    // change the inCrew property to false
    this.inCrew = false;
  }

  // remove method expects an object to be passed and we call that parameter "member" 
  remove(member: object) {
    // create a variable to hold the index of the crew member that we want to delete
    // use the indexOf array method to return the index of the matching object from the crew array.
    let index = this.crew.indexOf(member);
    // using the splice array metod remove the object at the index that we found above and remove only 1 "space" in the array
    this.crew.splice(index, 1);
  }


  // edit method expects an object to be passed and we call that parameter "member"
  edit(member: object) {
    // assigns the member object that is passed in to the memberBeingEdited property on the class
    this.memberBeingEdited = member;
  }

  // save method expects a string value to be passed as an argument and we call that parameter "name", and an object to be passed with that parameter called "member"
  save(name: string, member: object) {
    // on the member object that's passed in set the name property to the string passed as the argument for "name"
    member['name'] = name;
    // reset the memberBeingEdited property on the class to null
    this.memberBeingEdited = null;
  }
}

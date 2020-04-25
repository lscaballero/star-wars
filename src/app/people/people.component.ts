import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { PeliculasService } from '../services/peliculas.service';
>>>>>>> 382516f40efa6edc58687a0a203c7d9b2cfee322

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  listPeople = [];

  constructor(private people: PeliculasService) {

    this.listPeople = [];
    this.getListOfPeople();

   }

   getListOfPeople(){

    this.people.getAllPeople().subscribe(
      (data) => {
        console.log('DATA: ', data);
        this.listPeople = data ['results'];
      }
    )
   }
>>>>>>> 382516f40efa6edc58687a0a203c7d9b2cfee322

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

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

  ngOnInit(): void {
  }

}

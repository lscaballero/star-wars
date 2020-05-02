import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  listPeople = [];

  constructor(private people: PeliculasService, private router: Router) {

    this.listPeople = [];
    this.getListOfPeople();

   }
//funcion para consumir el servicio
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

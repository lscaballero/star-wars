import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listFilm = [];

  constructor(private film: PeliculasService, private router: Router) {

    this.listFilm = [];
    this.getListOfilm();

   }
//funcion para consumir el servicio
   getListOfilm(){

    this.film.getAllFilms().subscribe(
      (data) => {
        console.log('DATA: ', data);
        this.listFilm = data ['results'];
      }
    )
   }

  ngOnInit(): void {
  }

}

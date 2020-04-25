import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private api = 'https://swapi.py4e.com/api/';

  constructor(private http: HttpClient) { }

  getPelicula(){
    const pelicula = {title: "pelicula uno", episode_id : 1, director: "El director"};
    return pelicula;
  }

  getAllFilms(){
    const path = this.api+'films/';
    return this.http.get (path);
  }
}

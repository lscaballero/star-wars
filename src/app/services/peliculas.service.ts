import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private api = 'https://swapi.py4e.com/api/';

  constructor(private http: HttpClient) { }

  getPelicula() {
    const pelicula = { title: "pelicula uno", episode_id: 1, director: "El director" };
    return pelicula;
  }

  getAllFilms() {
    const path = this.api + 'films/';
    return this.http.get(path);
  }

  getAllPeople() {
    const path = this.api + 'people/';
    return this.http.get(path);
  }

  getAllPlanets(){
    const path = this.api + 'planets/';
    return this.http.get(path);
  }

  getAllSpecies(){
    const path = this.api + 'species/';
    return this.http.get(path);
  }

  getAllStarships(){
    const path = this.api + 'starships/';
    return this.http.get(path);
  }

  getAllVehicles(){
    const path = this.api + 'vehicles/';
    return this.http.get(path);
  }



}

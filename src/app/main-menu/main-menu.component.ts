import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  //ruta al home
  rutaHome(){
    this.router.navigate(['/']);
  }
//ruta al componente personas
  rutaPeople(){
    this.router.navigate(['/people']);
  }
//ruta al componente naves
  rutaStarships(){
    this.router.navigate(['/starships']);
  }
//ruta al comoponente vehilces
  rutaVehicles(){
    this.router.navigate(['/vehicles']);
  }

//ruta al componente films
rutaFilms(){
  this.router.navigate(['/films']);
}


}

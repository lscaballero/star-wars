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
//ruta al componente personas
  rutaPeople(){
    this.router.navigate(['/people']);
  }
<<<<<<< HEAD
//ruta en componente naves
  rutaStarships(){
    this.router.navigate(['/starships']);
  }

  rutaVehicles(){
    this.router.navigate(['/vehicles']);
  }
  

=======
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
>>>>>>> 382516f40efa6edc58687a0a203c7d9b2cfee322


}

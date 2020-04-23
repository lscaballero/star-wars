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
//ruta en componente naves
  rutaStarships(){
    this.router.navigate(['/starships']);
  }

  rutaVehicles(){
    this.router.navigate(['/vehicles']);
  }
  



}

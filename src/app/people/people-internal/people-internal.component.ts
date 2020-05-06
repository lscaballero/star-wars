import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-internal',
  templateUrl: './people-internal.component.html',
  styleUrls: ['./people-internal.component.css']
})
export class PeopleInternalComponent  implements OnInit  {

  listPeople = [];
  new: any;

  constructor(private people: PeliculasService, private router: Router, private activatedRoute: ActivatedRoute) {

    this.listPeople = [];
    this.new;
    this.getListOfPeople();
    this.getNew();

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


  getNew(){
    this.activatedRoute.queryParams.subscribe(params => {
      console.log('los parametros: ', params);
      this.new = params['name'] || null;
     console.log('this is new param',this.new);
    });
  }


  ngOnInit(): void {
  }

}

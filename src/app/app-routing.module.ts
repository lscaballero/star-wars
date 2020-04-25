import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { StarshipsComponent } from './starships/starships.component';
import { HomeComponent } from './home/home.component';
//import { VehiclesComponent } from './vehicles/vehicles.component'; // actualmente con conflictos


const routes: Routes = [
  {path: 'starships', component: StarshipsComponent},
  {path: 'people', component: PeopleComponent },
  // {path: 'vehicles', component: VehiclesComponent}, // actualmente con conflictos
  {path: '', component: HomeComponent },// ruta al home
  {path: '**', component: HomeComponent}, // envia al home si no encuentra la ruta
  //{path: '', redirecTo:'/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { StarshipsComponent } from './starships/starships.component';
import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './films/films.component';
import { VehiclesComponent } from './vehicles/vehicles.component'; 
import { PeopleInternalComponent } from './people/people-internal/people-internal.component';


const routes: Routes = [
  /**
   *   RUTAS COMPONENTES , VISTAS INICIALES
   */
  {path: 'starships', component: StarshipsComponent},
  {path: 'people', component: PeopleComponent },
  {path: 'films', component: FilmsComponent},
  {path: 'vehicles', component: VehiclesComponent}, 

  /**
   * RUTAS COMPONENTES , VISTAS INTERNAS
   */
  {path: 'people-internal:/character', component: PeopleInternalComponent},

   /**
    * RUTAS AL HOME
    */

  {path: '', component: HomeComponent },// ruta al home
  {path: '**', component: HomeComponent}, // envia al home si no encuentra la ruta
  {path: '', redirectTo :'/fims', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

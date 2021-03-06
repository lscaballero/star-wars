import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { StarshipsComponent } from './starships/starships.component';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { PeopleInternalComponent } from './people/people-internal/people-internal.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FooterComponent } from './footer/footer.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { PeliculasService } from './services/peliculas.service';
/* import { TaskExampleComponent } from './task-example/task-example.component'; */
import { FilmsComponent } from './films/films.component';



@NgModule({
  declarations: [
  AppComponent,
    UsuariosComponent,
    VehiclesComponent,
    StarshipsComponent,
    HomeComponent,
    PeopleComponent,
    PeopleInternalComponent,
    MainMenuComponent,
    FooterComponent,
    FilmsComponent
    /*TaskExampleComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }

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

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    StarshipsComponent,
    HomeComponent,
    PeopleComponent,
    PeopleInternalComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

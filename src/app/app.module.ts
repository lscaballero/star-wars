import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { StarshipsComponent } from './starships/starships.component';
import { PeopleComponent} from './people/people.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    StarshipsComponent,
    PeopleInternalComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

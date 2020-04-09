import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  title = 'Lista de usuarios';
  nuevoUsuario: Usuario;
  listaUsuarios;

  constructor() { 
    console.log('USUARIOS COMPONENT CREATED...');
    this.nuevoUsuario = new Usuario();
    //inicializar lista de usuarios
    this.listaUsuarios = [];
    this.cargarUsuarios();
  }

  cargarUsuarios(){
    let usuario1 = {
      id: 100,
      nombre: 'Luis',
      apellido: 'Caballero',
      edad: 22
    }

    let usuario2 = {
      id: 100,
      nombre: 'Alfredo',
      apellido: 'Caballero',
      edad: 29
    }

    let usuario3 = {
      id: 100,
      nombre: 'Dix',
      apellido: 'Caballero',
      edad: 27
    }

    this.listaUsuarios.push(usuario1);
    this.listaUsuarios.push(usuario2);
    this.listaUsuarios.push(usuario3);
  }

  crearUsuarioNuevo(){
    this.listaUsuarios.push(this.nuevoUsuario);
    this.nuevoUsuario = new Usuario();

  }
  ngOnInit(): void {
  }

}

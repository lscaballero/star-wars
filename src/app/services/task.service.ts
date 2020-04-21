import { Injectable } from '@angular/core';
// se importa el modulo HttpClient para poder usarlo
import { HttpClient } from '@angular/common/http';
//se importa la interface Task creada para definir los films
import { Task } from './../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private api = 'https://swapi.py4e.com/api/';

  constructor(private http: HttpClient) { }

  getAllTasks(){
    const path = this.api+'films/';
    return this.http.get<Task>(path);
  }

  getTask(id: string){
    const path = this.api+'films/'+id;
    return this.http.get<Task>(path);
  }
  
}

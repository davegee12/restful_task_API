import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {

  }
  getTasks(){
    // // our http response is an Observable, store it in a variable
    // let tempObservable = this._http.get('/tasks');
    // // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/tasks');
  }
  getTasksByID(id){
    return this._http.get(`/${id}`);
  }
  addTask(newTask){
    console.log("this is the service file " + newTask);
    return this._http.post('/create', newTask);
  }
  updateTask(editTask){
    console.log("this is the service file and " + editTask + " is the edit variable");
    return this._http.put(`/${editTask._id}/update`, editTask);
  }
  deleteTask(deleteTask){
    console.log("this is the service file and " + deleteTask + " is the delete variable");
    return this._http.delete(`/${deleteTask}/delete`, deleteTask);
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  clicked = false;
  showTask;
  editTask: any;
  tasks = [];
  newTask: any;

  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.newTask = {title: "", description: ""}
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data)
      console.log(data.result);
      this.clicked = true;
      this.tasks = data.result;
    });
  }
  buttonToShowAllTasks() {
    this.getTasksFromService();
  }
  buttonToShowDescription(id) {
    console.log("the ID is " + id);
    let observable = this._httpService.getTasksByID(id);
    observable.subscribe(data => {
      this.showTask = data.result;
    })
  }
  closeShow(){
    this.showTask = null;
  }
  submitCreateForm() {
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log('here is the data from the post: ' + data);
      this.newTask = {title: "", description: ""};
    })
  }
  buttonToEditTask(id) {
    console.log("the ID is " + id);
    let observable = this._httpService.getTasksByID(id);
    observable.subscribe(data => {
      this.editTask = data.result;
    })
  }
  submitEditForm() {
    let observable = this._httpService.updateTask(this.editTask);
    observable.subscribe(data => {
      console.log('here is the data from the post: ' + data);
      // this.editTask = {title: `${editTask.title}`, description: `${editTask.description}`};
    })
  }
  buttonToDeleteTask(id) {
    console.log("the ID is " + id);
    let observable = this._httpService.deleteTask(id);
    observable.subscribe(data => {
    })
  }
}


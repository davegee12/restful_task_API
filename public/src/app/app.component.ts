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
  tasks = [];

  constructor(private _httpService: HttpService){}
  ngOnInit(){
    // this.getTasksFromService();
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
}


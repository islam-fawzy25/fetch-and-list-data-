import { Component, OnInit } from '@angular/core';
import { IData } from 'src/app/services/data';
import { DataServices } from 'src/app/services/data.services';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  public todos: IData[]=[]

  constructor(private dataServices: DataServices) { }

  ngOnInit() {

    this.dataServices.getData()
    .subscribe(data => {
      console.log(data);

      this.todos = data})
  }

}

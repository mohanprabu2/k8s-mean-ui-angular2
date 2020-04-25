import { Component, OnInit} from '@angular/core';
import { DataService } from './data.service';
import {Data} from './data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Metrics Dashboard';
  metrics : Data[];
  
  constructor(private dataService: DataService) {}
  
  ngOnInit() {
    this.dataService.sendGetRequest().subscribe(data => {this.metrics = data});
  }
	
}

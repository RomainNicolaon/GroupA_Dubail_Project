import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bijoux',
  templateUrl: './bijoux.component.html',
  styleUrls: ['./bijoux.component.css']
})
export class BijouxComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  emptyCache(){
    this.dataService.reload$()
  }

}

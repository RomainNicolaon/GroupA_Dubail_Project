import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-bijoux',
  templateUrl: './bijoux.component.html',
  styleUrls: ['./bijoux.component.scss'],
})
export class BijouxComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  getJewel(index:number){
    
  }

  emptyCache(){
    this.dataService.reload$()
  }
}

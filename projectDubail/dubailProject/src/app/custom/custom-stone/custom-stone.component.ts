import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-custom-stone',
  templateUrl: './custom-stone.component.html',
  styleUrls: ['./custom-stone.component.css']
})
export class CustomStoneComponent implements OnInit {

  public index = 0
  constructor(    
    private dataService: DataService    
  ) { }    
    
  ngOnInit() {    
  }    

  click(index:number){
    this.dataService.onStoneClick(index);
  }

}

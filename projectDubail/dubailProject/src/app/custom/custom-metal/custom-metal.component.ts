import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-custom-metal',
  templateUrl: './custom-metal.component.html',
  styleUrls: ['./custom-metal.component.css']
})
export class CustomMetalComponent implements OnInit {

  public index = 0
  constructor(    
    private dataService: DataService    
  ) { }    
    
  ngOnInit() {    
  }    

  click(index:number){
    this.dataService.onMetalClick(index);
  }

}

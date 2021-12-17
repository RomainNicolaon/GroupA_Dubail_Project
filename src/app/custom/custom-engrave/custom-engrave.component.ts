import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-custom-engrave',
  templateUrl: './custom-engrave.component.html',
  styleUrls: ['./custom-engrave.component.scss'],
})
export class CustomEngraveComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {}

  confirm(){
    this.dataService.onScreenshotClick()
  }

}

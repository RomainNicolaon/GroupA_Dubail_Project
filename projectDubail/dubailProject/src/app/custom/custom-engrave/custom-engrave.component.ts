import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-engrave',
  templateUrl: './custom-engrave.component.html',
  styleUrls: ['./custom-engrave.component.css']
})
export class CustomEngraveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var slider = document.getElementById("myRange") as HTMLInputElement;
    var output = document.getElementById("demo") as  HTMLSpanElement;
    output!.innerHTML = slider!.value;

    slider!.oninput = function() {  
    output!.innerHTML = slider.value;
    }
  }
}

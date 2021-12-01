import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dubailProject';

  constructor(private router: Router){

  }

  gotoCustomEngrave() {
    this.router.navigate(['customEngravement'])
  }

  gotoBijoux() {
    this.router.navigate(['bijoux'])
  }
}

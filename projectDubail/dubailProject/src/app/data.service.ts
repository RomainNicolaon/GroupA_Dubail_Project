import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { __await } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  invokeStoneFunction = new EventEmitter();    
  subsVarStone!: Subscription;    
    
  onStoneClick(index:number) {   
    this.invokeStoneFunction.emit(index);    
  }

  invokeMetalFunction = new EventEmitter();    
  subsVarMetal!: Subscription;     
    
  onMetalClick(index:number) {    
    this.invokeMetalFunction.emit(index);    
  }

  reload$(){
    setTimeout(() => {window.location.reload()}, 10)
  }
}

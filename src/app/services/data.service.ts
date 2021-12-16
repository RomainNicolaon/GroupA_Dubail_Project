import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { PerspectiveCamera } from 'three';
import { __await } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //alows metal and stone to be called from one component to an other
  invokeStoneFunction = new EventEmitter();
  subsVarStone!: Subscription;

  onStoneClick(index: number) {
    this.invokeStoneFunction.emit(index);
  }

  invokeMetalFunction = new EventEmitter();
  subsVarMetal!: Subscription;

  onMetalClick(index: number) {
    this.invokeMetalFunction.emit(index);
  }

  invokeScreenshotFunction = new EventEmitter();
  subsScreenshot!: Subscription;

  onScreenshotClick() {
    this.invokeScreenshotFunction.emit();
  }

  invokePassScreenshotFunction = new EventEmitter();
  subsPassScreenshot!: Subscription;

  onPassScreenshotClick(img:string) {
    setTimeout(() => {
      this.invokePassScreenshotFunction.emit(img);
    }, 2)
  }

  reload$(){ //need to reload the page otherwise canvas bug
    setTimeout(() => {window.location.reload()},2)
  }
}

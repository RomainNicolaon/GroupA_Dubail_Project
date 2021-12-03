import { Router, Routes } from '@angular/router';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from '@three-ts/orbit-controls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = "dubailProject";
}
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from '@three-ts/orbit-controls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "dubailProject"
  scene = new THREE.Scene()

  geometry = new THREE.BoxGeometry(1, 1, 1)
  mesh = new THREE.Mesh(this.geometry)

  renderer: any;
  camera = new THREE.PerspectiveCamera(90, 800 / 600)

  ngOnInit() {
    this.scene.add(this.mesh)

    this.camera.position.y = 3
    this.camera.position.z = 2
    this.scene.add(this.camera)


    this.renderer = new THREE.WebGLRenderer({
      canvas: <HTMLCanvasElement>document.querySelector('canvas.draw')
    })

    const controls = new OrbitControls(this.camera, this.renderer.domElement);

    // How far you can orbit vertically, upper and lower limits.
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI;


    // How far you can dolly in and out ( PerspectiveCamera only )
    controls.minDistance = 0;
    controls.maxDistance = Infinity;

    controls.enablePan = true; // Set to false to disable panning (ie vertical and horizontal translations)

    controls.enableDamping = false; // Set to false to disable damping (ie inertia)

    controls.enableZoom = true; // Set to false to disable zooming
    controls.zoomSpeed = 1.0;

    this.renderer.setSize(800, 600)
    this.renderer.render(this.scene, this.camera)
  }


}
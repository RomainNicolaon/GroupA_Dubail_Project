import { Component, OnInit, AfterViewInit, ElementRef, Input, ViewChild } from '@angular/core';
import * as THREE from "three";
import { OrbitControls } from 'three-orbitcontrols-ts';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas')
  private canvasRef: ElementRef | undefined;

  @Input()public RotationSpeedX: number = 0.0 ;
  @Input()public RotationSpeedY: number = 0.0;
  @Input()public size: number = 200;

  @Input() public cameraZ: number = 150;
  @Input() public fieldOfView: number = 1;
  @Input('nearCliping') public nearClippingPlane: number = 1;
  @Input('farCliping') public farClippingPlane: number = 1000;

  private camera!: THREE.PerspectiveCamera;
  tex: THREE.Texture | null | undefined;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef?.nativeElement
  }
  private loader = new THREE.TextureLoader();

  public arr = ['texture.jpg','kube.jpg'];

  public textureToShow = 0;

  private geometry = new THREE.BoxGeometry(1, 1, 1);

  private material = new THREE.MeshBasicMaterial({map: this.loader.load(`../../assets/texture/${this.arr[this.textureToShow]}`)})

  private cube: THREE.Mesh = new THREE.Mesh(this.geometry, this.material);

  private renderer!: THREE.WebGLRenderer;

  private scene!: THREE.Scene;

  private createScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x9b9b9b)
    this.scene.add(this.cube);

    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPlane,
      this.farClippingPlane
    )
    this.camera.position.z = this.cameraZ;
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  private animateCube() {
    this.cube.rotation.x += this.RotationSpeedX;
    this.cube.rotation.y += this.RotationSpeedY;
  }

  private startRenderingLoop() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas});
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    let component: CubeComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateCube();
      component.renderer.render(component.scene, component.camera);
    }());
    
    let controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.enableZoom = true;
    controls.update()
  }
  
  click(){
    if(this.textureToShow == 1){
      this.textureToShow = 0;
    }
    else{
      this.textureToShow += 1;
    }
    this.material.map = this.loader.load(`../../assets/texture/${this.arr[this.textureToShow]}`);
  }

  constructor() { }

  ngAfterViewInit() {
    this.createScene();
    this.startRenderingLoop();
  }


  ngOnInit(): void {
  }

}

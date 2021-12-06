import { Component, OnInit, AfterViewInit, ElementRef, Input, ViewChild } from '@angular/core';
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { Material } from 'three';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas')
  private canvasRef: ElementRef | undefined;

  @Input() public RotationSpeedX: number = 0.0;
  @Input() public RotationSpeedY: number = 0.0;
  @Input() public size: number = 200;

  @Input() public cameraZ: number = 200;
  @Input() public fieldOfView: number = 1;
  @Input('nearCliping') public nearClippingPlane: number = 1;
  @Input('farCliping') public farClippingPlane: number = 1000;

  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;
  public renderer!: THREE.WebGLRenderer;

  tex: THREE.Texture | null | undefined;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef?.nativeElement
  }
  private texLoader = new THREE.TextureLoader();

  public arr = ['texture.jpg', 'kube.jpg'];

  public textureToShow = 0;

  public material = this.texLoader.load(`../../assets/texture/Silver.png`)

  loader = new GLTFLoader().load('../../assets/scene/scene.gltf', (gltf) => {
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.material.encoding = THREE.sRGBEncoding;
    const pointLight = new THREE.PointLight( 0xffffff );
    pointLight.position.set(0,0,0);
    this.camera.add(pointLight);

    this.material.flipY = false
    let ring = gltf.scene
    ring.traverse( (node) => {

      if (node instanceof THREE.Mesh) {
        node.material.map = this.material
      }

    });
    this.scene.add(ring);
    this.scene.add(this.camera)
  }
  );

  private createScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x9b9b9b)

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

  private startRenderingLoop() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    let component: CubeComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.renderer.render(component.scene, component.camera);
    }());

    let controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.update()
  }

  click() {
    // if (this.textureToShow == 1) {
    //   this.textureToShow = 0;
    // }
    // else {
    //   this.textureToShow += 1;
    // }
    // this.material.map = this.texLoader.load(`../../assets/texture/${this.arr[this.textureToShow]}`);
  }

  constructor() { }
  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.createScene();
    this.startRenderingLoop();
  }

}

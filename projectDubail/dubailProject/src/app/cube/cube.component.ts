import { Component, OnInit, AfterViewInit, ElementRef, Input, ViewChild } from '@angular/core';
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { DataService } from '../data.service';
import { __await } from 'tslib';
import { Observable, of } from 'rxjs';
import { MeshStandardMaterial } from 'three';

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
  private ring!: THREE.Group
  private children = new Array()

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef?.nativeElement
  }

  public colorMetal:number[] = [0xb3b3b3 /*silver*/, 0xcba135/*gold*/, 0xee918d /*rose*/, 0xffffff/*white*/];
  public colorStone = [0xE6E6FF/*Diamand*/, 0x01FF01/*emerald*/, 0xFF0101/*ruby*/, 0x0101FF/*sapphire*/];


  public metalMaterialParam = new MeshStandardMaterial({
    color: new THREE.Color(this.colorMetal[1]),
    metalness: 0.95,
    roughness: 0.4
    
  })
  public stoneMaterialParam = new MeshStandardMaterial({
    color: new THREE.Color(this.colorStone[2]),
    metalness: 1,
    transparent: true,
    opacity: 0.8,
    roughness: 0.4,
    
  })

  loader = new GLTFLoader().load('../../assets/scene/ring/scene.gltf', (gltf) => {
    this.renderer.outputEncoding = THREE.sRGBEncoding;

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.intensity = 0.3
    pointLight.position.set(0, 0, 0);
    const col = 0xffffff
    const intes = 1.5
    const Light1 = new THREE.SpotLight(col);
    Light1.intensity = intes
    Light1.position.set(0, -10000, 10000);
    const Light2 = new THREE.SpotLight(col);
    Light2.intensity = intes
    Light2.position.set(0, -10000, -10000);
    const Light3 = new THREE.SpotLight(col);
    Light3.intensity = intes
    Light3.position.set(0, 10000, 0);

    this.ring = gltf.scene
    this.camera.add(pointLight);
    this.ring.add(Light1, Light2, Light3);
    this.ring.traverse((node) => {

      if (node instanceof THREE.Mesh) {
        this.children.push(node)
      }

    });
    for (let i = 0; i < this.children.length; i++) { //For the ring 
      if (i == 1) {                                 // Needs to be changed per model
        this.children[i].material = this.stoneMaterialParam;
        continue;
      }
      this.children[i].material = this.metalMaterialParam;
    }
    this.scene.add(this.ring);
    this.scene.add(this.camera)
  }
  );

  private createScene() { /**/
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

  private getAspectRatio() { /**/
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  private startRenderingLoop() { /* ! */
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

  metal(index: number) {
    this.metalMaterialParam.color = new THREE.Color(this.colorMetal[index])
  }

  stone(index: number) { /**/
    this.stoneMaterialParam.color = new THREE.Color(this.colorStone[index])
  }

  constructor( /**/
    private dataService: DataService
  ) { }

  ngOnInit() { /**/
    if (this.dataService.subsVarStone == undefined) {
      this.dataService.subsVarStone = this.dataService.
        invokeStoneFunction.subscribe((indexStone: number) => {
          this.stone(indexStone);
        });
    }
    if (this.dataService.subsVarMetal == undefined) {
      this.dataService.subsVarMetal = this.dataService.
        invokeMetalFunction.subscribe((indexMetal: number) => {
          this.metal(indexMetal);
        });
    }
  }


  ngAfterViewInit() { /**/
    this.createScene();
    this.startRenderingLoop();
  }

}

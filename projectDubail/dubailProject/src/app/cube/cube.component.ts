import { Component, OnInit, AfterViewInit, ElementRef, Input, ViewChild } from '@angular/core';
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { DataService } from '../data.service';
import { __await } from 'tslib';
import { Observable, of } from 'rxjs';

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
  private texLoader = new THREE.TextureLoader();

  public texMetal = ['Silver.png', 'Gold.png', 'Rose_Gold.png', 'White_Gold.png'];
  public texStone = ['Diamond.png', 'Emerald.jpg', 'Ruby.png', 'Sapphire.png'];

  public metalMaterial = this.texLoader.load(`../../assets/texture/${this.texMetal[1]}`)
  public stoneMaterial = this.texLoader.load(`../../assets/texture/${this.texStone[2]}`)

  loader = new GLTFLoader().load('../../assets/scene/ring/scene.gltf', (gltf) => {
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.metalMaterial.encoding = THREE.sRGBEncoding;
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(0, 0, 0);
    this.camera.add(pointLight);

    this.metalMaterial.flipY = false
    this.ring = gltf.scene
    this.ring.traverse((node) => {

      if (node instanceof THREE.Mesh) {
        this.children.push(node)
      }

    });
    this.children[1].material.map = this.stoneMaterial //Stone
    this.children[0].material.map = this.metalMaterial //ring
    this.children[2].material.map = this.metalMaterial //base


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

  metal(index: number) { /**/
    this.metalMaterial.needsUpdate = true;
    this.metalMaterial = this.texLoader.load(`../../assets/texture/${this.texMetal[index]}`)
    this.children[0].material.map = this.metalMaterial //ring
    this.children[2].material.map = this.metalMaterial //base
  }

  stone(index: number) { /**/
    this.stoneMaterial.needsUpdate = true;
    this.stoneMaterial = this.texLoader.load(`../../assets/texture/${this.texStone[index]}`)
    this.children[1].material.map = this.stoneMaterial
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

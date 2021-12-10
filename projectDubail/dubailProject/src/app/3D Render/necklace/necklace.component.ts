import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import * as THREE from 'three';
import { MeshStandardMaterial } from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

@Component({
  selector: 'app-necklace',
  templateUrl: './necklace.component.html',
  styleUrls: ['./necklace.component.css']
})
export class NecklaceComponent implements OnInit {
  @ViewChild('canvas')
  private canvasRef: ElementRef | undefined;

  public JewelIndex: number = 1
  public Jewel: string[] = ['/ring/scene.gltf', '/necklace/scene.gltf', '/earring/earring.gltf', '/bracelet/scene.gltf']

  @Input() public RotationSpeedX: number = 0.0;
  @Input() public RotationSpeedY: number = 0.0;
  @Input() public size: number = 200;

  @Input() public cameraZ: number = 200;
  @Input() public fieldOfView: number = 1;
  @Input('nearCliping') public nearClippingPlane: number = 1;
  @Input('farCliping') public farClippingPlane: number = 5000;

  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;
  public renderer!: THREE.WebGLRenderer;

  tex: THREE.Texture | null | undefined;
  private ring!: THREE.Group
  private children = new Array()

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef?.nativeElement
  }


  public colorMetal: number[] = [0xb3b3b3 /*silver*/, 0xcba135/*gold*/, 0xee918d /*rose*/, 0xffffff/*white*/];
  public colorStone = [0xE6E6FF/*Diamand*/, 0x003500/*emerald*/, 0xFF0101/*ruby*/, 0x0101FF/*sapphire*/];


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
    roughness: 0.4
  })

  loadModel(indexJewel: number) {
    //this.scene.clear()
    const loader = new GLTFLoader().load(`../../assets/scene${this.Jewel[indexJewel]}`, (gltf) => {
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

      switch (indexJewel) {
        case 1:
          for (let i = 0; i < this.children.length; i++) { //For the necklace
            if (i == 0) {
              console.log('here 1')
              this.children[i].material = this.stoneMaterialParam;
              continue;
            }
            this.children[i].material = this.metalMaterialParam;
          }
          break;
        case 2:
          for (let i = 0; i < this.children.length; i++) { //For the earring
            if (i == 0 || i == 1) {
              console.log('here 2')
              this.children[i].material = this.stoneMaterialParam;
              continue;
            }
            this.children[i].material = this.metalMaterialParam;
          }
          this.ring.position.y = -2.2
          this.camera.position.z = 280
          break;
        case 3:
          for (let i = 0; i < this.children.length; i++) { //For the bracelet
            if (i == 9 || i == 8) {
              console.log('here 3')
              this.children[i].material = this.stoneMaterialParam;
              continue;
            }
            this.children[i].material = this.metalMaterialParam;
          }
          break;
        default:
          for (let i = 0; i < this.children.length; i++) { //For the ring 
            if (i == 1) {
              console.log('here 0')                                 // Needs to be changed per model
              this.children[i].material = this.stoneMaterialParam;
              continue;
            }
            this.children[i].material = this.metalMaterialParam;
          }
          break;
      }

      this.scene.add(this.ring);
      this.scene.add(this.camera)
    }
    );
  }

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

    let component: NecklaceComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.renderer.render(component.scene, component.camera);
    }());

    let controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.loadModel(this.JewelIndex)
    controls.update()
  }

  metal(index: number) {
    this.metalMaterialParam.color = new THREE.Color(this.colorMetal[index])
  }

  stone(index: number) { /**/
    this.stoneMaterialParam.color = new THREE.Color(this.colorStone[index])
  }

  constructor(private dataService: DataService, public router: Router
  ) { }

  ngOnInit() { /**/
    if (this.dataService.subsVarStone == undefined) {
      this.dataService.subsVarStone = this.dataService.
        invokeStoneFunction.subscribe((indexStone: number) => {
          this.stone(indexStone)
        });
    }
    if (this.dataService.subsVarMetal == undefined) {
      this.dataService.subsVarMetal = this.dataService.
        invokeMetalFunction.subscribe((indexMetal: number) => {
          this.metal(indexMetal)
        });
    }
  }

  ngAfterViewInit() { /**/
    this.createScene();
    this.startRenderingLoop();
  }

}

import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { Services3DService } from '../services3-d.service';

@Component({
  selector: 'app-earring',
  templateUrl: './earring.component.html',
  styleUrls: ['./earring.component.css']
})
export class EarringComponent implements OnInit {
  @ViewChild('canvas')
  private canvasRef: ElementRef | undefined;

  constructor(private dataService: DataService, public router: Router, private service3D: Services3DService
    ) { }

  public JewelIndex: number = 2

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
  private jewel!: THREE.Group

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef?.nativeElement
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

    let component: EarringComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.renderer.render(component.scene, component.camera);
    }());

    let controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.service3D.loadModel(this.JewelIndex, this.jewel, this.camera,this.scene)
    controls.update()
  }

  metal(index: number) {
    this.service3D.metalMaterialParam.color = new THREE.Color(this.service3D.colorMetal[index])
  }

  stone(index: number) { /**/
    this.service3D.stoneMaterialParam.color = new THREE.Color(this.service3D.colorStone[index])
  }

  Print() {
    this.dataService.onPassScreenshotClick(this.canvas!.toDataURL())
  }

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
    if (this.dataService.subsScreenshot == undefined) {
      this.dataService.subsScreenshot = this.dataService.
        invokeScreenshotFunction.subscribe(() => {
          this.Print()
        });
    }
  }

  ngAfterViewInit() { /**/
    this.createScene();
    this.startRenderingLoop();
  }

}

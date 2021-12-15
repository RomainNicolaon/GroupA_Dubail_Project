import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { MeshStandardMaterial, PerspectiveCamera } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

@Injectable({
  providedIn: 'root'
})
export class Services3DService {

  public colorMetal:number[] = [0xb3b3b3 /*silver*/, 0xcba135/*gold*/, 0xee918d /*rose*/, 0xffffff/*white*/]
  public colorStone:number[] = [0xb9e9ff/*Diamand*/, 0x003500/*emerald*/, 0xFF0101/*ruby*/, 0x0101FF/*sapphire*/]

  public metalMaterialParam = new MeshStandardMaterial({
    color: new THREE.Color(this.colorMetal[1]),
    metalness: 0.95,
    roughness: 0.4
  })

  public stoneMaterialParam = new MeshStandardMaterial({
    color: new THREE.Color(this.colorStone[2]),
    metalness: 1,
    transparent: true,
    opacity: 0.87,
    roughness: 0.4
  })

  public jewelArr: string[] = ['/ring/scene.gltf', '/necklace/scene.gltf', '/Earring/earring.gltf', '/bracelet/scene.gltf']

  loadModel(indexJewel: number, jewel: THREE.Group, camera: PerspectiveCamera, scene: THREE.Scene) {
    new GLTFLoader().load(`../../assets/scene${this.jewelArr[indexJewel]}`, (gltf) => {
      let children = new Array()

      const pointLight = new THREE.PointLight(0xffffff);
      pointLight.intensity = 0.3
      pointLight.position.set(0, 0, 0);
      const col = 0xffffff
      const intes = 2
      const Light1 = new THREE.SpotLight(col);
      Light1.intensity = intes
      Light1.position.set(0, -10000, 10000);
      const Light2 = new THREE.SpotLight(col);
      Light2.intensity = intes
      Light2.position.set(0, -10000, -10000);
      const Light3 = new THREE.SpotLight(col);
      Light3.intensity = intes
      Light3.position.set(0, 10000, 0);

      jewel = gltf.scene
      camera.add(pointLight);
      jewel.add(Light1, Light2, Light3);
      jewel.traverse((node) => {

        if (node instanceof THREE.Mesh) {
          children.push(node)
        }

      });

      this.switchJewel(indexJewel, children, jewel, camera)

      scene.add(jewel);
      scene.add(camera);
    }
    );
  }

  switchJewel(indexJewel:number, children:any[], object:THREE.Group, camera:PerspectiveCamera){
    switch (indexJewel) {
      case 1:
        for (let i = 0; i < children.length; i++) { //For the necklace
          if (i == 0) {
            children[i].material = this.stoneMaterialParam;
            continue;
          }
          children[i].material = this.metalMaterialParam;
        }
        break;
      case 2:
        for (let i = 0; i < children.length; i++) { //For the earring
          if (i == 0 || i == 1) {
            children[i].material = this.stoneMaterialParam;
            continue;
          }
          children[i].material = this.metalMaterialParam;
        }
        object.position.y = -2.2
        camera.position.z = 280
        break;
      case 3:
        for (let i = 0; i < children.length; i++) { //For the bracelet
          if (i == 9 || i == 8) {
            children[i].material = this.stoneMaterialParam;
            continue;
          }
          children[i].material = this.metalMaterialParam;
        }
        break;
      default:
        for (let i = 0; i < children.length; i++) { //For the ring 
          if (i == 1) {                // Needs to be changed per model
            children[i].material = this.stoneMaterialParam;
            continue;
          }
          children[i].material = this.metalMaterialParam;
        }
        break;
    }
  }
}

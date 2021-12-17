


#  Group A Project report 

---

<details>
<summary>Table of Contents</summary>

Group A Project Report
 
 - Technologies' Badges
1. [`Introduction`](#1-introduction)
2. [`Management`](#2-management)
3. [`Techonologies Used`](#3-technologies-used)
4. [`GitHub`](#4-github)
5. [`Angular App`](#5-angular-app)
- Jewel selection
- Jewel display
- Material choice
- Form
6. [`Web to App`](#6-web-to-app)
 - Ionic
 - Gradle
7. [`Improvement`](#7-improvement)
8. [`Conclusion`](#8-conclusion)
</details>

---
## Technologies' Badges
[![made-with-javascript](https://img.shields.io/badge/Languages%20Used:-JavaScript-f0db4f.svg)](https://www.javascript.com) [![made-with-Angular](https://img.shields.io/badge/Angular-a6120d.svg)](https://angular.io) [![made-with-Ionic](https://img.shields.io/badge/Ionic-498AFF.svg)](https://ionic.io) [![made-with-TypeScript](https://img.shields.io/badge/TypeScript-007acc.svg)](https://www.typescriptlang.org) [![made-with-ThreeJS](https://img.shields.io/badge/ThreeJS-000000.svg)](https://threejs.org) 

[![made-with-Visual-Studio-Code](https://img.shields.io/badge/Softwares%20Used:-Visual%20Studio%20Code-0078d7.svg)](https://code.visualstudio.com) [![made-with-Android-Studio](https://img.shields.io/badge/Android%20Studio%20-669933.svg)](https://developer.android.com/studio) [![made-with-Gradle](https://img.shields.io/badge/Gradle-02303A.svg)](https://gradle.org)


# 1. Introduction

This project combined Alpha's and Beta's groups with the goal of creating an android app for Dubail Paris who need a jewel customization app.
The Beta group have been managed by the Alpha group. They worked on the User Interface(UI)/User eXperience(UX).  

However, Alphas worked on the Angular Project and 3D models of jewel which represent the requested product of customers.
The main goal is to offer our client an app with the customization of a jewel displayed in 3D which let them visualize perfectly what they're creating.

# 2. Management

Team manager: [Brendon Desvaux](https://github.com/BrendonDesvaux)

Tech lead: [Max Bernard](https://github.com/maxbernard3)

When the project began, we had to complete the project brief followed by the technical and functional requierements.

We decided what we had to focus on first. Since that creating an app and publishing it to the google play store was something new, we decided to focus first on that.

The second point was: 3D rendering. Something new too.

We had Angular courses so the front part was less important.


We said to the Beta to create Mockups using [Balsamiq](https://balsamiq.com). This tool allowed them to create interactives mockups.

During this time, Max and I were looking for 3D rendering. 
We found mutiple solutions such as [BabylonJS](https://www.babylonjs.com) or [ThreeJS](https://threejs.org).

After few tries, we decided that three.js was faster, stronger, better.

ThreeJS has [OrbitControls](https://threejs.org/docs/#examples/en/controls/OrbitControls) included. We had our camera movements.

At this time, all we had to do was to find a 3D model loader. Some web researches after, we found [GLTFLoader](https://threejs.org/docs/#examples/en/loaders/GLTFLoader)inside ThreeJS. It allowed us to import .GLTF 3D models. (GLTF is an extension such as STL, 3DS, OBJ...)

We downloaded free 3D models and made it works.

Once this was over, we gave it to Eloi and Salah so they can transfer it in TS hyelped by Max. On the npm website, we were able to find [THREE.JS]https://www.npmjs.com/package/@types/three, [OrbitControl.ts](https://www.npmjs.com/package/@three-ts/orbit-controls) and [GLTFLoader.ts](https://www.npmjs.com/package/three-gltf-loader).

The mockup were never validated because the client had problems but we couldn't just wait to start developing the product.

During this time, Romain had the mission to look for engravement and deploying on google store.

He showed us how hard the engravement would have been so we decided to make him concentrate on deploying the app on the Google Store using [angular/PWA](https://angular.io/guide/service-worker-getting-started#adding-a-service-worker-to-your-project)(PWA stands for Progressive Web APP).

The Beta team then started to code a mobile first website in HTML/CSS/JS from scratch.


Beta Team was almost done finishing the front after 2 weeks. We decided that, because they were learning fast, they should also learn [Bootstrap](https://getbootstrap.com) which they did good.

ThreeJS conversion to TS was over so they started to work on meshes and textures.

We manage to put Beta team's code in angular while Romain was stuggling with the PWA. We decided then to switch tech and go for [Ionic](https://ionicframework.com) and [capacitor](https://capacitorjs.com).Both of them are technologies made to create applications. 

Then, he had problems with [Android Studio](https://developer.android.com/studio) and Gradle.

He lost the APK/AAB key so wasn't able to release a new version of the app.

After a lot of efforts, he managed to upload our first app on the Google Store. Not the final app but at least something.

The client went to see us so we had to occasion for a demo. 
They told us to add swipe and to make the buttons of the app more "Sexy". 
We understood the point and changed the "choose your jewel" page to make it a slider. Beta team was in charge of doing it.
We made the buttons "sexier" and modified little things they asked.

We finally decided to put merge all the code on Ionic for a better compatibility and for faster results since we were not going for a pwa. 

# 3. Technologies Used

On this project, we used some softwares to develop and manage it:
GitHub is useful to host our repository, push and pull some features from and to everyone in the team.

Visual studio is a development software with some useful features which helped us to reach our goals; to debug and create the app.

Android Studio the same as Visual studio but more into android apps and bundles
Angular is a TypeScript framework for web application, this framework is useful as development tool for this project.

Trello is an app used for the management and the planning of our tasks and to divide equally all of them. With deadlines, TO DOs, in progress, finish and out of scope sections, it's the main management tool used on this project.

Ionic is an open source UI toolkit for building performant, high-quality mobile and desktop apps using web technologies and thanks to its integretion with the Angular framework it was really useful for our project

Gradle is a build system (open source) that is used to automate building, testing, deployment and publishing


Capacitor is an open source project that runs modern Web Apps natively on iOS, Android, Electron, and Web.


Photoshop was used in this project to help with the User Interface. We used it to modify some images to make them a part of our interface and also mainly to make our interface interesting, appealing to the eye and most importantly, user friendly.


Blender is a 3D modeling software that was really important for the development of the app. We used it to test our 3d models, test the textures and parameters and to import the models to a .gltf/.glb file.


# 4. GitHub

On GitHub repository, we have 3 branches: main, save and test.
Most features are commit on test branch.

3 folders are used, render, projectDubail and app.

Render is used by the Beta Group. It is used for the interface of the app. This part used HTML, CSS and JavaScript. App is designed like web site pages.
ProjectDubail is actually an Angular app made by the Alpha Group. Combined with THREE.JS, Angular can display 3D model very well and it's useful for the app feature in TypeScript.

# 5. Angular App

We develop our app on Angular. Initially, we didn't use Angular, but because of the functionalities and the fact that this project is actually an android app, we decided to use Angular for our app. It has 4 mains features, to give customer a better experience when they create a jewel.

### - Jewel selection

It's the first page of the app. It displays some predifined types of jewel, which can be changed with a swipe and choose the kind of jewel the customer wants. If the customer does nothing, the next jewel type displays automatically every 5 secondes and return to the first one if all types has been displayed.

<img src="https://cdn.discordapp.com/attachments/921137159019327538/921150745183678494/Screenshot_2021-12-16_at_22.23.51.png" width="270" height="480">

### - Jewel display

This part displays actually some .gltf/.glb models of jewels: ring, earring, necklace and bracelet (depending on the one you choosed previously).
Each model has its own 3D render component, and with services3-d, it initalizes some propeties which display jewel, like material(more detail below), camera angle, light, gltf loader and gltf model. Customers can turn the model to each direction(360°) to visualize it properly.

<img src="https://cdn.discordapp.com/attachments/921137159019327538/921150745586319380/Screenshot_2021-12-16_at_22.24.41.png" width="270" height="480">

Lights:

##### Initialization
```ts
const pointLight = new THREE.PointLight(0xffffff);
      pointLight.intensity = 0.3
      pointLight.position.set(0, 0, 0);
      const col = 0xffffff
      const intes = 2
```
##### Light's Parameters
```ts
const Light1 = new THREE.SpotLight(col);
      Light1.intensity = intes
      Light1.position.set(0, -10000, 10000);
```
```ts
const Light2 = new THREE.SpotLight(col);
      Light2.intensity = intes
      Light2.position.set(0, -10000, 10000);
```
```ts
const Light3 = new THREE.SpotLight(col);
      Light3.intensity = intes
      Light".position.set(0, 10000, 0);
```

### - Material choice

Customers can change metal and stone color. Each color correspond to an hexdecimal number:

Materials' colors:
```ts
public colorMetal:number[] = [
0xb3b3b3 /*silver*/,
0xcba135/*gold*/,
0xee918d /*rose*/,
0xffffff/*white*/
]
```
```ts
public colorStone:number[] = [
0xb9e9ff/*Diamand*/,
0x003500/*emerald*/,
0xFF0101/*ruby*/,
0x0101FF/*sapphire*/
]
```
 
At the begining, we used some texture.jpeg files for all texture but for some reason, hexadecimal numbers display better.
Each model has meshes which correspond to a part of the model, like stone part or metal part. When the customer change the color, it's actually changing different kind of meshes, all models has different meshes, the colors display is adapted for each model.

Materials' Parameters
```ts
public metalMaterialParam = new MeshStandardMaterial({
color: new THREE.Color(this.colorMetal[1]),
metalness: 0.95,
roughness: 0.4 
})
```
  
  ```ts
  public stoneMaterialParam = new MeshStandardMaterial({
  color: new THREE.Color(this.colorStone[2]),
  metalness: 1,
  transparent: true,
  opacity: 0.87,
  roughness: 0.4
  }) 
  ```
 
  Some other feature like metalness or roughness (fix values) make the model more realistic.
  Every choices of the customers are displayed on the 3D model which will allow them to compare all kind of posibilities and find the customization they expected.
 
 ```ts
 let children = new Array()
 
 if (node instanceof THREE.Mesh) {
          children.push(node)
        }
        
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
 ```
### - Form

This part was initially to register the contact details, the request of the customer and send it by email confirmation of purchase but was scrapped.

A feature was added to complete the app: a donwload button if the customer wants to save it, and also a way of starting a new jewel from the beginning.

<img src="https://cdn.discordapp.com/attachments/765152753894424577/921125106107945020/Screenshot_2021-12-16_at_20.41.42.png" width="270" height="480">


# 6. Web to App

Gradle


Android Studio


First Angular


Capacitor


Ionic


# 7. Improvement

Some improvements are possible, especially on optimisation where some efforts are made on making ergonomic features and an attractive interface.
On the app itself, we have the layout for the customer's choice of the number of gem on their jewel and for the Engravement feature. Unfortunately, we weren't able to make functioning features for the end result.
A connection to the Google Play account of the customers would have also been a good feature to implement.
Right now, our 3D models aren't compresed, we could have done it using DracoLoader.

# 8. Conclusion

Despite some trouble especially on framework choices and using effectively THREE.JS technology, the rendering of the project is really user friendly, we learned  a lot with for
example: Angular framework, THREE.JS and web developing in general. It was interesting and very useful to manage the Beta group.  

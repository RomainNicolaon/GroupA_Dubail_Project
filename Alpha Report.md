

#  Group A Project report 

---

<details>
<summary>Table of Contents</summary>

Group A Project Report
1. Introduction
2. Techonologies Used
3. GitHub
4. Angular App
- Jewel selection
- Jewel display
- Material choice

- Form
5. Transfer from Angular web to phone app
 - Ionic
 - Gradle
1. Improvement
2. Conclusion  
</details>

---
## 1. Introduction
This project combined Alpha's and Beta's groups with the goal of creating an android app for Dubail Paris who need a jewel customization app.
The Beta group have been managed by the Alpha group. They worked on the User Interface(UI)/User eXperience(UX).  
However, Alphas worked on the Angular Project and 3D models of jewel which represent the requested product of customers.
The main goal is to offer our client an app with the customization of a jewel displayed in 3D which let them visualize perfectly what they're creating.


## 2. Technologies Used
On this project, we used some softwares to develop and manage it:
GitHub is useful to host our repository, push and pull some features from and to everyone in the team.
Visual studio code is a development software with some useful features which helped us to reach our goals; to debug and create the app.
Angular is a TypeScript framework for web application, this framework is useful as development tool for this project.
Trello is an app used for the management and the planning of our tasks and to divide equally all of them. With deadlines, TO DOs, in progress, finish and out of scope sections, it's the main management tool used on this project.
## 3. GitHub
On GitHub repository, we have 3 branches: main, save and test.
Most features are commit on test branch.
3 folders are used, render, projectDubail and app.
Render is used by the Beta Group. It is used for the interface of the app. This part used HTML, CSS and JavaScript. App is designed like web site pages.
ProjectDubail is actually an Angular app made by the Alpha Group. Combined with THREE.JS, Angular can display 3D model very well and it's useful for the app feature in TypeScript.
## 4. Angular App
We develop our app on Angular. Initially, we didn't use Angular, but because of the functionalities and the fact that this project is actually an android app, we decided to use Angular for our app. It has 4 mains features, to give customer a better experience when they create a jewel.
### - Jewel selection
It's the first page of the app. It displays some predifined types of jewel, which can be changed with a swipe and choose the kind of jewel the customer wants. If the customer does nothing, the next jewel type displays automatically every 5 secondes and return to the first one if all types has been displayed.


### - Jewel display
This part displays actually some .gltf/.glb models of jewels: ring, earring, necklace and bracelet (depending on the one you choosed previously).
Each model has its own 3D render component, and with services3-d, it initalizes some propeties which display jewel, like material(more detail below), camera angle, light, gltf loader and gltf model. Customers can turn the model to each direction(360°) to visualize it properly.
### - Material choice
Customers can change metal and stone color. Each color correspond to an hexdecimal number:
```public colorMetal:number[] = [0xb3b3b3 /*silver*/, 0xcba135/*gold*/, 0xee918d /*rose*/, 0xffffff/*white*/] ```
```public colorStone:number[] = [0xb9e9ff/*Diamand*/, 0x003500/*emerald*/, 0xFF0101/*ruby*/, 0x0101FF/*sapphire*/] ```
 

At the begining, we used some texture.jpeg files for all texture but for some reason, hexadecimal numbers display better.
Each model has meshes which correspond to a part of the model, like stone part or metal part. When the customer change the color, it's actually changing different kind of meshes, all models has different meshes, the colors display is adapted for each model.
```public metalMaterialParam = new MeshStandardMaterial({color: new THREE.Color(this.colorMetal[1]),metalness: 0.95, roughness: 0.4 }) ```
  

  ```public stoneMaterialParam = new MeshStandardMaterial({color: new THREE.Color(this.colorStone[2]),metalness: 1,transparent: true,opacity: 0.87,roughness: 0.4}) ```
 

  Some other feature like metalness or roughness (fix values) make the model more realistic.
  Every choices of the customers are displayed on the 3D model which will allow them to compare all kind of posibilities and find the customization they expected.



 
### - Form
This part was initially to register the contact details, the request of the customer and send it by email confirmation of purchase but was scrapped.

A feature was added to complete the app: a donwload button if the customer wants to save it, and also a way of starting a new jewel from the beginning.
## 5. Improvement
Some improvements are possible, especially on optimisation where some efforts are made on making ergonomic features and an attractive interface.
We can also add a way of modeling the jewels shape which would open more possibilities for the customers.
## 6. Conclusion
Despite some trouble especially on framework choices and using effectively THREE.JS technology, the rendering of the project is really user friendly, we learned  a lot with for example: Angular framework, THREE.JS and web developing in general. It was interesting and very useful to manage the Beta groupe.  

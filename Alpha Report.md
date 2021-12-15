

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
This project combined Alpha's and Beta's Groups with the goal to create an android app for Dubail Paris who need a jewel customisation app.
The Alpha group managed the Beta group and Beta group developed the interface of app.
However, Alphas work on the Angular Project and 3D models of jewel which
 represent the request product of customer.
 The main goal is to offer our client an app with a customization display of the jewel the customers want and letting them vusualize it.


## 2. Technologies Used
On this project, we used some softwares to develop and manage it:
GitHub is useful to host our repository, push and pull some feature from and to everyone in the team.
Visual studio code is the development software with some useful features which help us for developing purposes; to debug and create the app.
Angular is a TypeScript framework for web application, this framework
is useful as the development tool for this project.
Trello is an app used for the management and the planning of our tasks and to divide equally all of them. With deadlines, TO DOs, in progress, finish and out of scope  sections, it's the main management tool used on this project.
## 3. GitHub
On GitHub repository, we have 3 branches: main, save and test.
Most features are commit on test branch.
3 folders are used, render, projectDubail and app.
Render is used by the Beta Group. It is used for interface of app. This part used HTML, CSS and JavaScript.App is designed like web site pages.
ProjectDubail is actually an Angular app by the Alpha Group. Combined with THREE.JS, Angular can display 3D model very well and it's usefull for the app feature in TypeScript.
## 4. Angular App
We developpe our app on Angular. Initially, we didn't used Angular, but because of the fuctionalities and the fact that this project is actually an android app, we decided to use Angular for our app. It has 4 mains features to give custumer a better experience when they chooses an jewel.
### - Jewel selection
It's the first page of app. It's display some buttons one by one, who can change with finger swipe and choose the kind of jewel the customer want. If customer do nothing, the next buttons display automatically every 5 secondes and return to the first one if all buttons are display.


### - Jewel display
This part display actually some .gltf/.glb models of jewels, ring, earring, necklace and bracelet.
Each model has its own 3D render component, and with services3-d, its initalize some propetize of display jewel like material(more detail below), camera angle, light display, gltf loader and gltf model. Customers can turn the model to each direction(360°).
### - Material choice
Customers can change metal and stone color. Each color correspond to an hexdecimal number:
```public colorMetal:number[] = [0xb3b3b3 /*silver*/, 0xcba135/*gold*/, 0xee918d /*rose*/, 0xffffff/*white*/] ```
```public colorStone:number[] = [0xb9e9ff/*Diamand*/, 0x003500/*emerald*/, 0xFF0101/*ruby*/, 0x0101FF/*sapphire*/] ```
 

In the begining, we used some texture.jpeg files for all texture but for some reason, hexadecimal numbers display better.
Each model has meshs who correspond to a part of model like stone part, metal part. When the customer change the color, its change actually diffent kind of meshs, all model has different meshs,
the colors display is adapte for each model.
```public metalMaterialParam = new MeshStandardMaterial({color: new THREE.Color(this.colorMetal[1]),metalness: 0.95, roughness: 0.4 }) ```
  

  ```public stoneMaterialParam = new MeshStandardMaterial({color: new THREE.Color(this.colorStone[2]),metalness: 1,transparent: true,opacity: 0.87,roughness: 0.4}) ```
 

  Some other feature like metalness or roughness make the model more realistic.
  All choice of customers can display on the 3D model and switch between them for compare all kind of posibility and find customisation the customer expected.



 
### - Form
This part was initially for record contact details and the request of customer and send it by email confirmation of purchase but was scrapped.

A feature was added to complete the app. We added a model donwload if the customer want to save it.
## 5. Improvement
Some improvemnt is possible especially on optimisation but some effort are made on making ergonomic features and an attractive interface. 
## 6. Conclusion
Despite some troble especially on framework choices and using effectively THREE.JS technology, the redering of the project is a great a really user friendly, we learned so much for example using Angular framework, THREE.JS and web developing in general. Some part of this project can be usefull for next project like the previous point and the management of Beta groupe.  



 



 


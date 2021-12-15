

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
1. Improvement
2. Conclusion  
</details>

---
## 1. Introduction
This project combined Alpha's and Beta's Groups with the goal to create an android app for Dubail Paris who need a jewel customisation app.
The Alpha group managed the Beta group and Beta group developed the interface of app.
However, Alphas work on the Angular Project and 3D models of jewel who
 represent the request product of customer.
 The main goal is to offer our client an app with customisation display of jewel the customers want and letting them vusualize it.


## 2. Technologies Used
On this project, we used some software to develop and manage:
GitHub is useful to host our repository, push and pull some feature to all of our team's work.
Visual studio code is the development software with some useful features which help us for developing purposes; debug and create the app.
Angular is a TypeScript framework for web application, this framework
is useful as the development tool for this project.
Trello is an app used for managing and organizing our task and divide this for all the team. With deadlines, TO DOs, in progress, finish and out of scope  sections, it's the main managing tool used on this project.
## 3. GitHub
On GitHub repository, we have 3 branch, main, save and test.
Most features are commit on test branch.
3 folders are used, render, projectDubail and app.
Render is used for 3D render, test some feature on JavaScript with THREE.JS .
ProjectDubail is actually an Angular app by the Alpha Group. Combined with THREE.JS, Angular can display 3D model very well and it's usefull for the app feature in TypeScript.
The folder used by the Beta Group, is used for interface of app. This part used HTML, CSS and JavaScript.App is designed like web site pages.
## 4. Angular App
We developpe our app on Angular. Initially, we don't used Angular, but because with this fuctionality and this project is actually an android app, we decide to used Angular for our app. It has 4 mains features to give custumer experience better when it chooses an jewel.
### - Jewel selection
It's the first page of app. It's display some buttons one by one, who can change with finger swipe and choose the kind of jewel the customer want. If customer do nothing, the next buttons display automatically every 5 secondes and return to the first one if all buttons are display.


### - Jewel display
This part display actually some gltf model of jewels, ring, earring, necklace and bracelet.
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
This part is initially for record contact details and the request of customer and send it by email confirmation of purchase.
In the feature, we add a model donwload if the customer want to save
## 5. Improvement
Some improvemnt is possible especially on optimisation but some effort are doing on ergonomic feature and attractive interface. 
## 6. Conclusion
Despite some troble especially on framework choice and using effectively THREE.JS technologie, the redering of the project is a quite pretty good, even some more details and experience on app developpement (especially web app), we learn so much for example using Angular framework, THREE.JS . Some part of this project can be usefull for next project like the previous point and the management of Beta groupe.  



 



 


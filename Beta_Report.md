 b
# Group A Project Report

---

<details>

<summary><strong>Table of Contents</strong></summary>

- [Group A Project Report](#group-a-project-report)
  - [1. Introduction](#1-introduction)
  - [2. Technologies Used](#2-technologies-used)
  - [3. GitHub Setup](#3-github-setup)
  - [4. Artistic Direction](#4-artistic-direction)
  - [5. Structure of the App](#5-structure-of-the-app)
    - [- Jewel Page](#--jewel-page)
      - [Header](#header)
      - [Footer](#footer)
    - [- Custom Pages](#--custom-pages)
    - [- Form Page](#--form-page)
    - [- Gratitude Page](#--gratitude-page)
  - [6. Possible Improvement](#6-possible-improvement)
  - [Conclusion](#conclusion)

</details>

---

## 1. Introduction

This project was the second of the year and the first managed by the alpha class and the first for a real client.

Our first client is a luxury jewellery group called 'Dubail'.

Dubail wanted an Android application coded in HTML CSS and JavaScript where it is possible to customise different types of jewels with different metal and stone. We took care of all the html, css and javascript and the alphas had the job of coding a 3D jewel and converting our code into an Android application.

This report is a condensed version of our 6 week project. This report is separated in different parts with the different pages of the app.

This report will not contain the work of alphas, it will only focus on the work of betas 

## 2. Technologies Used

During this project we learned and use some technologies to finish the project

  Languages

    - HTML
    - JavaScript
    - CSS

  Github

    - Git

  Centralise by

    - visual studio code

  Library

    - Bootstrap 

## 3. GitHub Setup

We used the platform GitHub to work in group and send the work we done to centralise it on one project so we can 'Push' us work and 'Pull' when someone finish a task to compile it,

We used the GitHub Desktop application for it,

## 4. Artistic Direction

We took inspiration from Apple for the front page. The graphic style of the page remains close to that of Dubail so as not to forget that the customisation application is affiliated to this one. We have decided to keep the style simple and easy to use.

## 5. Structure of the App

### - Jewel Page

We make a carousel with html and css for this carousel we take images photoshop by the Alpha team. these images represent each jewel.
they have two animations the first to show how to slide on this carousel.

```css

.box{
    left: 45%;
    position: relative;
    width: 50%;

}

.box span{
    display: inline-block;
    width: 2vh;
    height: 2vh;
    border-bottom: 3px solid rgb(2, 2, 2);
    border-right: 3px solid rgb(0, 0, 0);
    transform: rotate(135deg);
    margin: -0.01vh;
    animation: animate 3s infinite;
}

.box span:nth-child(2){
    animation-delay:-0.2s ;

}
.box span:nth-child(3){
    animation-delay:-0.4s ;
    transform: rotate(135deg);

}

@keyframes animate{
    0%{
        opacity: 0;
        transform: rotate(135deg) translate(-10px,-10px);
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0;
        transform: rotate(135deg) translate(10px,10px);
    }
}
```

The second animation is for the carousel the images change automatically.

```css
@keyframes tonext {
    75% {
      left: 0;
    }
    95% {
      left: 100%;
    }
    98% {
      left: 100%;
    }
    99% {
      left: 0;
    }
  }
  
  @keyframes tostart {
    75% {
      left: 0;
    }
    95% {
      left: -300%;
    }
    98% {
      left: -300%;
    }
    99% {
      left: 0;
    }
  }
  
  @keyframes snap {
    96% {
      scroll-snap-align: center;
    }
    97% {
      scroll-snap-align: none;
    }
    99% {
      scroll-snap-align: none;
    }
    100% {
      scroll-snap-align: center;
    }
  }

```


#### Header

```css

header{
    background-color: black;
    text-align: center;
    height: 100px;
}

body{ 
    padding: auto;
    margin: auto;   
  } 
  .cls-1 {
    fill: #fff;
}
```
  
For the header we decided to use the svg of the Dubail site on a black background to have the same colours as their site.the logo is centred in the middle of the page and the class cls-1 is the class for the colour of the letters in the svg. We set the padding and margin to auto because it allows the header to take the full width of the application.However, after three weeks of work it was decided that the header was not necessary for the all page on application. After that it was change by the Alpha Team to take less place on the screen

#### Footer

```css
a{
        text-decoration: none;
    }
 nav>a:hover{
        color :white;
    }

nav.container{
    display: flex;
    justify-content: space-between;

}

nav>a{
    color:white;
}

.footer{
    position: fixed;
    font-family: 'Cormorant Infant', serif;
    bottom: 0%;
    width: 100%;
    background-color: black;
    height: 5%;
    color:white;
    display: flex;
    }

```

For the footer we decided to link to the Dubail App's "Boutiques, Service and mention Legal" pages on a black background to match the colours of their site.the footer is always at the bottom of the application.However, after three weeks of work it was decided that the footer was not necessary for all pages on the application.After that it was change by the Alpha team the footer became a drop-down menu on the header.

### - Custom Pages

For the customization of the different jewels we need different pages that allow to change the colour of the metal, the colour of the stone and to add a potential engraving.

The first page you come to after choosing the jewel is the page for choosing the metal. We decided to do this because it seemed the most logical 

```html
<body>
    
    <img src="img/bague3D.jfif" alt="image bague3D">

    <!-- start of the container for the menu buttons   -->

<div class="btn-container">
    <div class="col-md-12 menu">
        <a class="col-md-3 menubutton" href="custom-metal-choice.html"> Choix du métal</a>
        <a class="col-md-3 menubutton" href="custom-stone-choice.html">Choix de la pierre</a>
        <a class="col-md-3 menubutton " href="custom-engraving.html">Gravure</a>
        <a class="col-md-3 menubutton" href="formulaire.html"> Confirmation</a>
      </div>

    </div>
     
<!-- end of the container for the menu buttons -->
    
<!-- start of the container for the metal choice buttons -->

    <div class="btn-choice">
        <a class="box" href="#">Platine <img src="img/Platine.png" alt="Platine" class="imgMetal"></a>
        <a class="box"  href="#">Or <img src="img/Or.png" alt="Gold" class="imgMetal"></a>
        <a class="box"  href="#">Or Rose <img src="img/OrRose.png" alt="PinkGold" class="imgMetal"></a>
        <a class="box"  href="#">Or Blanc <img src="img/OrBlanc.png" alt="WhiteGold" class="imgMetal"></a>
    </div>
 <!-- end of the container for the metal choice buttons -->
 
    <footer>
    </footer>
</body>
```

Below we have the body of our first page.

In this one we have two divs, the first one containing the navigation buttons and the second one containing the buttons for the different metal choices.
There is also an image that helps us to get an overview of the page with a potential 3D model.

For this app many bootstrap classes have been used to facilitate the responsive of the app. 

```css
/* Change the font of any text of the page     */
body{
    margin: auto ;
    font-family: 'Cormorant Infant', serif;
    height: 100%;
    width: 100%;
    background: linear-gradient(lightgrey, rgb(250, 250, 250));
}


.btn-container{
  width: 100%;
}


 .menu{
  display: flex;
} 
/* styling items and place them in line to be responsive of any devices */
 .menubutton {
   background-color: rgb(119, 119, 119);
   padding: 4% ;
   font-size: 73%;
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
   color: aliceblue;
   text-decoration: none;
   border: aliceblue solid 1px;
   
 }

.menubutton:active{
  background-color: rgb(161, 161, 161);
  color: aliceblue;
}
```

For the whole app we used the dubail font from their site. It is called 'Cormorant Infant'.

The css code above contains the classes used to design the navigation buttons. The buttons are arranged in a row and they are all the same size thanks to the bootstrap class.

The container 'col-md-12' allows to split the div into 12 columns of the same size no matter the screen size. Then with the class 'col-md-3' we define 4 zones with 3 columns each which allows to have 4 div of the same size displayed on the screen.

```css
/* display the buttons two by two  */
.btn-choice{
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 2%;
  justify-content: center;
}
/* styling items and make items responsive of any devices */
.box{
  background-color: rgb(223, 223, 217);
  width: 40%;
  height: 100px;
  padding: 1%;
  margin: 2%;
  border-radius: 10%;
  font-size: 110%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  color: rgb(185, 185, 185);
}
```

After the navigation buttons we will talk about the buttons for the different choices.

The buttons are designed to look like the apples buttons that are used to change the colours of the Iphones. We chose this design because we felt it was the cleanest and easiest for the user to understand.

The buttons is composed of a coloured circle in an image file and the name of the metal. The buttons are arranged two by two in columns.

As for the stone selection page, it's pretty much the same as the one above, except that we changed the coloured circles in the buttons.

The page that changes is the one for adding an engraving to the jewel.

```html
<!-- start of the container for the text box to engrave the jewel -->
    <div class="container engraving-container">
        <input class="form-control" type="text" placeholder="Entrez votre gravure">
        <button class="confirm-btn">Confirmer</button>
    </div>
```
This is the div that changes from the other pages. This one contains the text box and the confirm button for engraving.

Of course, the user can browse the different pages as he ​wishes. When he is satisfied with his result he presses the confirm button which will open the form.


### - Form Page
cq

### - Gratitude Page

```html
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Infant:wght@300&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="gratitude-page.css"> 
```

Those lines link some features to our page, the 6 first lines link google fonts to add some text fonts, the 7th link bootstrap and the last one link gratitude-page.css to gratitude-page.html. 

```html
<div>
    <p>Votre message a bien été pris en compte.</p>
    <a id="button" href=http://127.0.0.1:5500/collection.html>Nouvelle présentation</a>
</div>
```
The first line is just a basic paragraph with simple text.
The second one is the one that create the button.
We used the "a" (to put a link) as a button but you can also use "button".

```css
div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 85%;
}
```

The div is made in order to center the paragraph and the button horizontally modifying the css like above.
The first line is used to define the display in flex (The flex property is a shorthand property that defines the ability of a flexible element to change its dimensions to fill the available space of its container).
The second allows you to put the elements in a column and therefore to put them one above the other.
The third one says, put one element at the top and one at the bottom and add space between the two elements.
The fourth align the elements horizontally (in that case, it will align only the button because the text-align: center already center the p in the paragraph css).
The last one is used to enlarge the div and also the space between the paragraph and the button.

```css
p {
    font-family: 'Cormorant Infant', serif;
    text-align: center;            
    font-size: 250%;
    margin-top: 25%;
}
```

Description line by line :
- font family,
- alignement of the text at the middle of the container (here it's also the middle of the page),
- enlargment of the text size,
- margin between the top of the container (here it's also the top of the page) and the top of the paragraph,

```css
#button {
    width: 100px;
    text-align: center;
    color: #fff;
    background-color: black;
    text-decoration: none;
    padding: 5px;
    border-radius: 5px;
    margin-top: 25%;
    zoom: 175%;
    font-family: 'Quicksand', sans-serif;
}
```

The # in the css is link with the id in the html.
You can have only one element in an id so with the #, so the css can only change this element.

At the beginning, with the "a", you just have a clickable link but with the css, we modified the form of the "a" box with this block of css.

Desceiption line by line :
- width,
- alignment of the text,
- color of the background,
- decoration of the text (if you don't do anything, the text will be underline because it's an "a"),
- size of the padding,
- form of the corners,
- size of the space between the bottom of the "p" and the top of the button,
- size of the button,
- font family,

```css
#button:active {
    background-color: lightslategray;
}
```

The active means when you click on the button, the parameters of the button will change. In that case, the background color of the button will change.

```css
html,body {
    background: linear-gradient(lightgrey, #fff);
    height: 100%;
} 
```

This change the background color of the body with a linear gradient.
## 6. Possible Improvement 
## Conclusion


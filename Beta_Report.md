
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
    - [Welcome page](#welcome-page)
    - [- Jewel Page](#--jewel-page)
      - [Header](#header)
      - [Footer](#footer)
    - [- Custom Pages](#--custom-pages)
    - [- Form Page](#--form-page)
    - [- Gratitude Page](#--gratitude-page)
  - [6. Possible Improvement](#6-possible-improvement)

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

  IDE

    - visual studio code

  Library

    - Bootstrap 

## 3. GitHub Setup

We used the platform GitHub to work in group and send the work we done to centralise it on one project so we can 'Push' us work and 'Pull' when someone finish a task to compile it,

We used the GitHub Desktop application for it,

## 4. Artistic Direction

We took inspiration from Apple for the front page. The graphic style of the page remains close to that of Dubail so as not to forget that the customisation application is affiliated to this one. We have decided to keep the style simple and easy to use.

## 5. Structure of the App

### Welcome page

For the first page of the application, we have made a charging page. We used bootstrap.

```html
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
```

This link allow to use the Bootstrap library.

We have link the index.html to the index.css.

```html
<link rel="stylesheet" href="index.css">
```

We also had a index.js which allows to redirect to the jewel page. We link the .html to the .js.

```html
 <script src="index.js"></script>
```

The .js file is the timer for the loading page.

```js
setTimeout(function(){
    window.location.href = 'bijou.html';
    }, 3000);
```

setTimeout is use to define the time the user will spend on the page to 3000 miliseconds.
window.location.href is use to redirect the user to bijou.html after the timer.

We had a Dubail logo in .svg.
We have centered the SVG of the Dubail logo by puting it in a container.

```html
<div class="container">
```

```css
.container{
    display: flex;
    justify-content: center;
    align-items: middle;
    max-width: 100%;
    height: auto;
    height: 100%;
    max-height: 80%;
    align-content: center;
}
```

The flex property is a shorthand property that defines the ability of a flexible element to change its dimensions in order to fill the available space of its container.
We justify and align the content to center to put the container in the center of the screen and we align item to the middle to put it in the center of the screen. With these property, the .svg is verticaly and horizontaly align.
We put the height to auto to make te height automatic depending on the screen size and to 100% to put a maximum size.

We also add a spinner below the Dubail logo in css.

```html
<div class="spinner-border" role="status">
              <span class="sr-only"></span>
            </div>
```

We have made a fading of 2 seconds when the page load before the logo and spinners before they are displayed.

```css
body {
    background-color: whitesmoke;
    -webkit-animation-name:FADE;
    -webkit-animation-duration:2s;
    -webkit-animation-iteration-count:1;
    -moz-animation-name: FADE;
    -moz-animation-duration: 2s;
    background: linear-gradient(lightgrey, #fff);
}
```

The -webkit-animation-duration and the -webkit-animation-duration is to set the duration of the animation to 2 seconds. 
The -webkit-animation-iteration-count set the animation only happens once.

```css
@-moz-keyframes FADE{
    0%{ 
    opacity: 0;
    }
    100% { 
    opacity: 1;
    }
}
@-webkit-keyframes FADE{
    0%{ 
    opacity: 0;
    }
    100% { 
    opacity: 1;

    }
}
```

The @-moz-keyframes and the @-webkit-keyframes is use to set the opacity, and the fade for the fade animation.

The welcome page has been deleted because the team managers didn't want to keep it.

### - Jewel Page

We made a carrousel with html and css. No js required. For this carrousel, we took images modified with photoshop by the Alpha team. These images represent each jewel.
They have two animations the first to show how to slide on this carousel.

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

The second animation is for the carousel images can change automatically.

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
  
For the header we decided to use the svg of the Dubail site on a black background to have the same colors as their site. The logo is centred in the middle of the page and the class cls-1 is the class for the color of the letters in the svg. We set the padding and margin to auto because it allows the header to take the full width of the application. However, after three weeks of work, it was decided to remove the header for the all page on application. After that it was change by the Alpha Team to take less place on the screen

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

For the footer we decided to link to the Dubail "Boutiques, Service and mention Legal" pages on a black background to match the colors of their site. The footer is always at the bottom of the application. However, after three weeks of work it was decided that the footer was not necessary for all pages on the application. After that it was change by the Alpha team the footer became a drop-down (hamburger) menu on the header.

### - Custom Pages

For the customization of the different jewels we need different pages that allow to change the colour of the metal, the colour of the stone and to add a potential engraving.

The first page you can see after choosing the jewel is the page for choosing the metal. We decided to do this because it seemed the most logic choice.

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

For this app, many bootstrap classes have been used to facilitate the responsive of the app. 

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

Once the jewel is customized, the goal is for the user to enter his personal information in different fields in order to be able to validate his customization. We decided to create a form to meet these expectations.

#### The HTML part
----

* We started by telling the user which fields must be filled to validate his/her custom(s) by a simple text "* Champs requis".
All " * " are in the color red to allow the user to see them better.
Then, we created a "div" in order to contain all the fields that the user can fill, then different "div", smaller to contain and can modified more easily the "input"... In addition, we add the style "white-space: pre" to replace "<*br*>".
We also have created different "input", with different specificities like the "id" for the name, the "type" for the type of text enter (text, phone, time...), required or not, max lenght of the input enter, the size of the text box...
The "placehorder" give an example to the user of what he/her must enter.
The "form" is used to collect all user input. 

```html
<body>
  <div>
    <p><span style="color: red;">*</span> Champs Requis</p>
    <form action="#contact" method="post" id="form">
    <div class="case" style="white-space: pre">
      <label for='name'>Nom</label><span style="color: red;">*</span>
      <input type="text" size="27" maxlength="50" id="surname" required placeholder="Gaël" />
    </div>
    <div class="case" style="white-space: pre">
      <label for='prenom'>Prénom</label><span style="color: red;">*</span>
      <input type="text" size="27" maxlength="50" id="first_name" required placeholder="Lebrun"/>
    </div>
    <div class="case" style="white-space: pre">
      <label for='mail'>Mail</label><span style="color: red;">*</span>
      <input type="text" size="27" id="e-mail" required placeholder="gaël.lebrun@exemple.com" />
    </div>
```

* For the input "phone", we chose to be able to enter only numbers and some characters like "(" ;  ")" ; " - "... very useful for some phone numbers.

```html 
<div class="case" style="white-space: pre">
    <label for='phone'>Téléphone</label><span style="color: red;">*</span>
    <input type="tel" size="21" id="phone" onkeypress="return event.charCode >= 40 &&  event.charCode <= 57"
      required />
</div>
```

* You can choose the telephone code by selecting the flag for it. Additionally, you can find a placehorder for each nationality, to know what is expected.
As the Alphas had to use Angular, they could not keep the code in js.

```html
<div class="case" style="white-space: pre">
    <label for='phone'>Téléphone</label><span style="color: red;">*</span>
    <input type="tel" size="21" id="phone" onkeypress="return event.charCode >= 40 &&  event.charCode <= 57"
      required />
    <script src="formulaire.js"></script>
</div>
```

```js
var input = document.querySelector("#phone");
intlTelInput(input, {
  initialCountry: "fr",
  geoIpLookup: function (success, failure) {
    $.get("https://ipinfo.io", function () { }, "jsonp").always(function (resp) {
      var countryCode = (resp && resp.country) ? resp.country : "us";
      success(countryCode);
    });
  },
});
```

* The "text box" allows the user to add a message with no character limit. It is easier to set than an "input" in terms of size, which is why we prefer it here.

```html
<div class="case" style="white-space: pre">
   <label>Ajouter un message </label>
   <textarea cols="31" rows="5" type="text" id="message"></textarea>
</div>
```

* The first button allows the user to start his custom again if he is not satisfied or simply if he has changed his mind. The second opens the mailbox with Antonin as recipient, for example, with the title of the order number and the summary sentence. As the alphas set this with Angular, it just serves as an example. We also find all tag closures as this is the end of the form for the html part.

```html
      <div class="case">
        <button class="btn" id="Recommencer" href="bijou.html">Recommencer</button>
        <button class="btn" id="Envoyer"
          href="mailto:antopillet18@gmail.com? subject=Commande n°000001Dubail&body=Bonjour,  %0D%0A%0D%0ACi-joint le récapitulatif de votre  commande:">Envoyer</button>
      </div>
    </form>
  </div>
</body>
```

* Thanks to these links, we can display all the flags, have a cohesive placehorder and be linked to the css.

```html
  <link href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/css/intlTelInput.min.css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/intlTelInput.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.min.js"></script>
  <link rel="stylesheet" href="formulaire.css">
```

####The CSS part

---


* For the css part, we started by setting the whole with the body. The "font-family" allows us to choose the font, which is Arial here. The "zoom" is useful for the phone format. The "margin" provides us to put, here, all the content, where we want. Also, we changed the background color (base white by a gradient from grey to white, more "user friendly"), and we had align the text in the center of the form.

```css
body{
    font-family: Arial, Helvetica, sans-serif;
    zoom:235%;
    margin-top: 15%;
    margin: auto;
    background: linear-gradient(lightgrey, rgb(250, 250, 250));
    text-align: center;
}
```

* For all the input, we just wanted to have the border on the bottom of the text to give something "more modern". We put a transparant background to have the same color as the background.

```css
input {
    border: none;
    border-bottom: solid;
    border-width: 1px;
    background-color: transparent;
}

input:active {
    border: none;
}
```

* We changed the borders for the text area, notably by adding edges to the corners, making the borders thicker, and putting the background also transparent.

```css
textarea {
    border-style: solid;
    border-width: 2px;
    border-radius: 5px;
    background-color: transparent;
}
```

* Here we just readjust all the divs, which were wagered in class "case".

```css
.case {
    margin-bottom: 15px;
}
```

* For all the "p", we aligned the text to the left, and we shifted it a little bit to the right in order to have something more readable.

```css
p {
    text-align: left;
    margin-left: 10px;
}
```

* For the "placehorders", we just have the color to make them more visible, and more "user friendly".

```css
::placeholder {
    color: rgba(0, 0, 0, 0.336);
}
```

* For the class ". btn", including the "envoyé" and "recommencer" buttons, we changed the size, how they are activated with the "cursor: point", the shadows, the angles by rounding them... For the "recommencer" button, we put it in red to warn the user before clicking while for the "envoyer" button, we put it in green so as not to mislead the user.

```css
.btn {
    color: whitesmoke;
    border: none;
    width: 150px;
    height: 50px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 0.9rem;
    margin: 10px;
    cursor: pointer;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.008),
    0 6.7px 5.3px rgba(0, 0, 0, 0.012), 0 12.5px 10px rgba(0, 0, 0, 0.015),
    0 22.3px 17.9px rgba(0, 0, 0, 0.018), 0 41.8px 33.4px rgba(0, 0, 0, 0.022),
    0 100px 80px rgba(0, 0, 0, 0.03);
}

#Envoyer {
    background-color: rgb(10, 177, 10);
    box-shadow: 1px 1px 1px 1px #666; 
}

#Recommencer {
    background-color: rgb(218, 21, 21);
    box-shadow: 1px 1px 1px 1px #666; 
}
```

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

Description line by line :

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

I think that to improve our application we should employ an info graphic designer to redo the circles for the stone colours
and also to add swipe animations to return to the previous page.

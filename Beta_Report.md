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
  - [5. Structure of the Website](#5-structure-of-the-website)
    - [- Index](#--index)
    - [- Jewel Page](#--jewel-page)
      - [Header](#header)
      - [Footer](#footer)
    - [- Custom Pages](#-custom-pages)
    - [- Form Page](#-form-page)
    - [- Gratitude Page](#-gratitude-page)
  - [6. Possible Improvement](#6-possible-improvement)
  - [Conclusion](#conclusion)

</details>

---

## 1. Introduction

This project was the second of the year and the first managed by the alpha class and the first for a real client.

Our first client is a luxury jewellery group called 'Dubail'.

Dubail wanted a mobile application coded in HTML CSS and JavaScript where it is possible to customise different types of jewels with different metal and stone.

This report is a condensed version of our 6 week project. This report is separated in different parts with the different pages of the app.

## 2. Technologies Used

During this project we learned and use some technologies to finish the project

-Languages

    - HTML
    - JavaScript
    - CSS

-Github

    - Git

-Centralise by

    - visual studio code

## 3. GitHub Setup

We used the platform GitHub to work in group and send the work we done to centralise it on one project so we can 'Push' us work and 'Pull' when someone finish a task to compile it,

We used the GitHub Desktop application for it,

## 4. Artistic Direction

We took inspiration from Apple for the front page. The graphic style of the page remains close to that of Dubail so as not to forget that the customisation application is affiliated to this one. We have decided to keep the style simple and easy to use.

## 5. Structure of the Website 
### - Index

### - Jewel Page



For the jewellery page we decided to use the jewellery images from the Dubail website which are each links to the page for customising the jewellery.The four images are positioned in a grid with the bootstrap classes.Bootstrap allows to create parts for each different div so it allows to assign them a defined place that is responsive for each part. Moreover the img-fluid class allows to make the images responsive for the different type of mobile devices.

However we change this page.We delete all images to make a carousel this one was create with html and css with all images and you click on the image to choose the jewel.

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

For the footer we decided to link to the Dubail website's "Boutiques, Service and mention Legal" pages on a black background to match the colours of their site.the footer is always at the bottom of the application.However, after three weeks of work it was decided that the footer was not necessary for all pages on the application.After that it was change by the Alpha team the footer became a drop-down menu on the header.

### - Custom Pages
vhji
### - Form Page
kkug

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


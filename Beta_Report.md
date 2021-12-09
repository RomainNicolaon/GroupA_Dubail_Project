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

For the footer we decided to link to the Dubail website's "Boutiques, Service and mention Legal" pages on a black background to match the colours of their site.the footer is always at the bottom of the application.However, after three weeks of work it was decided that the footer was not necessary for all pages on the application.After that it was change by the Alpha team the footer became a drop-down menu on the header.

### - Custom Pages
### - Form Page
### - Gratitude Page 
## 6. Possible Improvement 
## Conclusion


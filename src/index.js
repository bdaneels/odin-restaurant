import CreateMethodProperty from 'es-abstract/2015/CreateMethodProperty';
import './style.css';
import {populateMenu} from './menu'

let body = document.querySelector('body')


class frontPage {

    constructor() {}

    
    createbg() {
    let startDiv = document.createElement('div')
    startDiv.setAttribute('id', 'content')
    startDiv.classList.add('h-screen', 'w-screen', 'flex', 'flex-col')
    body.appendChild(startDiv)
    }
    targetStartDiv () {
        let startDiv = document.querySelector('#content')
        return startDiv
    }
    createHeader(){
    let startDiv = document.querySelector('#content')
    let headerDiv = document.createElement('div')
    headerDiv.setAttribute('id', 'header')
    let homeButton = document.createElement('button')
    let menuButton = document.createElement('button')
    let aboutButton = document.createElement('button')
    homeButton.textContent = 'Home'
    menuButton.textContent = 'Menu'
    aboutButton.textContent = 'About'
    
    homeButton.setAttribute('id', 'headerbutton')
    menuButton.setAttribute('id', 'headerbutton')
    aboutButton.setAttribute('id', 'headerbutton')

    menuButton.addEventListener('click', () => populateMenu(), false)
    homeButton.addEventListener('click', () => frontpage.createHero(), false)

    headerDiv.appendChild(homeButton)
    headerDiv.appendChild(menuButton)
    headerDiv.appendChild(aboutButton)
    startDiv.appendChild(headerDiv)
    }

 
    createHero(){
    let startDiv = this.targetStartDiv()
    let previousHero = document.querySelector('#hero-container')
    if(previousHero) {previousHero.remove()}
    let heroContainer = document.createElement('div');
    heroContainer.setAttribute('id', 'hero-container');

    let restaurantTitle = document.createElement('h2');
    restaurantTitle.setAttribute('id', 'restaurant-title');
    restaurantTitle.textContent ='Daneels Brick Oven Pizze';
    
    let subTitle = document.createElement('div')
    subTitle.setAttribute('id', 'subtitle')
    subTitle.textContent = 'Restau & Bar à Vin'

    let heroText = document.createElement('div')
    heroText.setAttribute('id', 'hero-text-container')
    heroText.textContent = `Experience the perfect pizza and wine pairing`
    
    heroContainer.appendChild(restaurantTitle)
    heroContainer.appendChild(subTitle)
    heroContainer.appendChild(heroText)
    
    startDiv.appendChild(heroContainer)


    }


}

let frontpage = new frontPage
frontpage.createbg()
frontpage.createHeader()
frontpage.createHero()


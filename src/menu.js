


function populateMenu () {

    let previousMenu = document.querySelector('#menu-card')
    if (previousMenu) {previousMenu.remove()}

    let menuCard = document.createElement('div')
    menuCard.setAttribute('id', 'menu-card')
    let startDiv = document.querySelector('#hero-container')
    startDiv.innerHTML = ""
    
    let pizzaTitle = document.createElement('h2')
    pizzaTitle.setAttribute('id', 'menu-title')
    pizzaTitle.textContent = "Pizze"
    
    let pizzaContainer = document.createElement('div')
    pizzaContainer.setAttribute('id', 'pizza-container')

    
    /* margerita */
    let pizzaCard = document.createElement('div')
    
    menuCard.appendChild(pizzaTitle)
    menuCard.appendChild(pizzaContainer)

    

    startDiv.appendChild(menuCard)

}



export { populateMenu}
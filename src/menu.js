


function populateMenu () {

    let previousMenu = document.querySelector('#menu-card')
    if (previousMenu) {previousMenu.remove()}

    let menuCard = document.createElement('div')
    menuCard.setAttribute('id', 'menu-card')
    let startDiv = document.querySelector('#hero-container')
    startDiv.innerHTML = ""
    
    let pizzaTitle = document.createElement('h2')
    pizzaTitle.textContent = "Pizze"


    startDiv.appendChild(menuCard)

}



export { populateMenu}
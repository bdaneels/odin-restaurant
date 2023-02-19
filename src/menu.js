let pizzaObject = {
    Margerita: "Mozerella, Tomatosauce", 
    Calzoné: "Niet zomaar een gewoné",
    Salame: "Mozerella, Tomatosauce, Salami Slices",
    Bolognese: "Mozerella, Tomatosauce, Minced Meat", 
    Salmone: "Niet te verwarren met de Salame",
    Daneels: "Traditional pizza meets a kapsalon"



}


function populateMenu () {
    function createDiv() {
        let div = document.createElement('div')
        return div
    }
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
    function pizzaCards(object) {
        for( let pizza in pizzaObject) {
            let pizzaDiv = document.createElement('div')
            pizzaDiv.setAttribute('id', 'pizza-div')
            let pizzaTitle = document.createElement('h3')
            pizzaTitle.textContent = pizza.toString()
            let pizzaIngredients = document.createElement('div')
            pizzaIngredients.textContent = pizzaObject[pizza]
            
            pizzaDiv.appendChild(createDiv())
            pizzaDiv.appendChild(pizzaTitle)
            pizzaDiv.appendChild(pizzaIngredients)
            pizzaDiv.appendChild(createDiv())
            object.appendChild(pizzaDiv)

        }
    }
    

    
    menuCard.appendChild(pizzaTitle)
    menuCard.appendChild(pizzaContainer)
    pizzaCards(pizzaContainer)

    

    startDiv.appendChild(menuCard)

}



export { populateMenu}
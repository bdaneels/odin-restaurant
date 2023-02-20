

function populateAbout() {

    let aboutCard = document.createElement('div')
    aboutCard.setAttribute('id', 'about-card')
    let previousAbout = document.querySelector('#about-card')
    if (previousAbout) {previousAbout.remove()}
    let startDiv = document.querySelector('#hero-container')
    startDiv.innerHTML = ""

    let aboutText = document.createElement('div')
    aboutText.textContent = "This is a placeholder for an about us Element for a pizza restaurant"

    let aboutTitle = document.createElement('h2')
    aboutTitle.setAttribute('id', 'about-title')
    aboutTitle.textContent= "Our Contact Details"

    aboutCard.appendChild(aboutTitle)
    aboutCard.appendChild(aboutText)

    startDiv.appendChild(aboutCard)

    let bgDiv = document.querySelector('#content')
    bgDiv.classList.remove('menu')
    bgDiv.classList.add('content')


}



export {populateAbout}
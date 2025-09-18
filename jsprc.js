// parent node
const maincontainer = document.getElementById('main-container')
console.log('maincontainer')

// child node
const players = document.createElement('section')

// ccreate h1
const h1 = document.createElement('h1')
h1.innerText = "This is My Players SHow"
players.appendChild(h1)

// append sections

maincontainer.appendChild(players)
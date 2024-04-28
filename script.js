function createNode(data) {
  const card = document.createElement("div");
  card.classList.add("card", "draggable", data.type)
  card.setAttribute("id", data.id)
  card.draggable = true
  if (data.type == 'skull') {
    card.innerHTML = `<h1 id=${data.id}></h1>`
  } else {
    card.innerHTML = `<h1 id=${data.id}></h1>`
  }

  return card
}

function getRandomNumber() {
  const randomNumber = Math.random();
  const result = Math.floor(randomNumber * 4) + 1;
  return result;
}

function defineSkull() {
  const number = getRandomNumber()

  gcards[number - 1] = {
    id: number,
    type: 'skull',
    html: createNode({ id: number, type: 'skull' }),
    place: 'cards',
    active: true,
    visible: true,
    pos: 0
  }
}

function cardInvert(e) {
  for (let card of gcards) {
    if (card.active) {
      if (card.id == e.target.id) {
        card.visible = !card.visible
      }
    }
  }
  renderGame()
}

const gcards = [
  {
    id: 1,
    type: 'rose',
    html: createNode({ id: 1, type: 'rose' }),
    place: 'cards',
    active: true,
    visible: true,
    pos: 0
  },
  {
    id: 2,
    type: 'rose',
    html: createNode({ id: 2, type: 'rose' }),
    place: 'cards',
    active: true,
    visible: true,
    pos: 0
  },
  {
    id: 3,
    type: 'rose',
    html: createNode({ id: 3, type: 'rose' }),
    place: 'cards',
    active: true,
    visible: true,
    pos: 0
  },
  {
    id: 4,
    type: 'rose',
    html: createNode({ id: 4, type: 'rose' }),
    place: 'cards',
    active: true,
    visible: true,
    pos: 0
  }
]

const ghand = document.querySelector('.cards');
const gtable = document.querySelector('.table');

function renderGame() {

  ghand.innerHTML = ""
  gtable.innerHTML = ""
  for (let card of gcards) {

    card.html.style.order = card.pos


    if (!card.visible) {
      card.html.classList.add("hidden")
    } else {
      card.html.classList.remove("hidden")
    }
    if (!card.active) {
      card.html.classList.remove("hidden")
      card.html.classList.add("dead")
      card.html.draggable = false
    }

    if (card.place == 'cards') {
      ghand.appendChild(card.html)
    } else {
      gtable.appendChild(card.html)
    }
  }
}

function mechanics() {
  ghand.addEventListener('dragstart', (e) => {
    const target = e.target;
    selected = e.target.id

    console.log("ARRAST", selected)

    if (target.classList.contains('card')) {
      e.dataTransfer.setData('text/plain', target.textContent);
    }
  });

  // Add dragover and drop event listeners to the table
  gtable.addEventListener('dragover', (e) => {
    e.preventDefault(); // Allow drop
  });

  gtable.addEventListener('drop', (e) => {
    e.preventDefault();
    for (let card of gcards) {
      if (card.id == selected) {
        tablePos += 1
        card.pos = tablePos
        card.place = 'table'
        card.html.draggable = false
      }
    }
    renderGame()
  })

  const cardsList = document.getElementsByClassName('card');


  for (let card of cardsList) {
    card.addEventListener('click', cardInvert)
  }

  const hideAll = document.getElementById("hideall")
  hideAll.addEventListener('click', () => {
    for (card of gcards) {
      if (card.active) {
        card.visible = false
      }
    }

    renderGame()
  })

  const restart = document.getElementById("restart")
  restart.addEventListener('click', () => {
    for (card of gcards) {
      card.place = 'cards'
      card.html.draggable = true
    }
    renderGame()
  })

  const graveyard = document.getElementById("graveyard")

  graveyard.addEventListener('dragover', (e) => {
    e.preventDefault()
  })

  graveyard.addEventListener('drop', () => {
    for (card of gcards) {
      if (card.id == selected) {
        console.log(selected)
        card.active = false
      }
    }

    renderGame()
  })
}

let selected = 0

let tablePos = 0

 defineSkull()

renderGame()
mechanics()


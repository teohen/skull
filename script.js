function createNode(data) {
  const card = document.createElement("div");
  card.classList.add("card", "draggable", data.type)
  card.setAttribute("id", data.id)
  card.draggable = true
  card.innerHTML = data.id
  return card
}

const gcards = [
  {
    id: 1,
    type: 'rose',
    html: createNode({ id: 1, type: 'rose' }),
    place: 'hand',
    active: true,
    visible: true,
    pos: 0
  },
  {
    id: 2,
    type: 'rose',
    html: createNode({ id: 2, type: 'rose' }),
    place: 'hand',
    active: true,
    visible: true,
    pos: 0
  },
  {
    id: 3,
    type: 'rose',
    html: createNode({ id: 3, type: 'rose' }),
    place: 'hand',
    active: true,
    visible: true,
    pos: 0
  },
  {
    id: 4,
    type: 'skull',
    html: createNode({ id: 4, type: 'skull' }),
    place: 'hand',
    active: true,
    visible: true,
    pos: 0
  }
]

const ghand = document.querySelector('.hand');
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

    if (card.place == 'hand') {
      ghand.appendChild(card.html)
    } else {
      gtable.appendChild(card.html)
    }
  }
}

function mechanics() {
  // Add dragstart and dragend event listeners to each card
  ghand.addEventListener('dragstart', (e) => {
    const target = e.target;
    selected = e.target.id

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
      }
    }
    renderGame()
  })

  const cardsList = document.getElementsByClassName('card');


  for (let card of cardsList) {
    card.addEventListener('click', (e) => {
      for (let card of gcards) {
        if (card.active) {
          if (card.id == e.target.id) {
            card.visible = !card.visible
          }
        }
      }
      renderGame()
    })
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
      card.place = 'hand'
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
        card.active = false
      }
    }

    renderGame()
  })
}

const hidehand = document.getElementById("hidehand")
hidehand.addEventListener('click', () => {
  ghand.classList.add("hide")
})

const showhand = document.getElementById("showhand")
showhand.addEventListener('click', () => {
  ghand.classList.remove("hide")
})


let selected = 0

let tablePos = 0

renderGame()

mechanics()


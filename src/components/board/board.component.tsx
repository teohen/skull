import React from 'react'

import { ContainerBoard } from '../../styles/components/board.style'

interface BoardProps {
    id: string,
    className: string
}

const Board: React.FC<BoardProps> = (props) => {
  const drop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const idCard = e.dataTransfer.getData('id_card')

    const card = document.getElementById(idCard)
    card.style.display = 'block'

    e.target.appendChild(card)
  }

  const dragOver = e => {
    e.preventDefault()
  }

  return (

    <ContainerBoard
      id={props.id}
      clasName={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </ContainerBoard>
  )
}

export default Board

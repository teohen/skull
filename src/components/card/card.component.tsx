
import React, { useState, useContext } from 'react'
import HideContext from '../../contexts/hide.context'

import { ContainerCard } from './../../styles/components/card.style'

interface CardProps {
    id: string,
    className: string,
}

const Card: React.FC<CardProps> = (props) => {
  const { hidden } = useContext(HideContext)

  const dragStart = e => {
    console.log('drag')
    const target = e.target

    e.dataTransfer.setData('id_card', target.id)

    setTimeout(() => {
      target.style.display = 'none'
    }, 0)
  }

  const dragOver = e => {
    e.stopPropagation()
  }

  const [visible, setVisible] = useState(!hidden)

  const handleFlipCard = () => {
    setVisible(!visible)
  }

  return (
    <ContainerCard
      id={props.id}
      clasName={props.className}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {props.children}
    </ContainerCard>
  )
}

export default Card

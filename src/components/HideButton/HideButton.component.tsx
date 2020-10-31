
import React, { useState } from 'react'
import { HideButtonStyle } from '../../styles/components/HideButton.style'

const HideButton: React.FC = () => {
  return (
    <HideButtonStyle>
      <text>esconder</text>
    </HideButtonStyle>
  )
}

const hideCards = () => {
  console.log('escondendo as cartas')
}

export default HideButton

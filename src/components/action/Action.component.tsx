
import React, { useState, useContext } from 'react'
import HideContext from '../../contexts/hide.context'

import { ContainerAction } from '../../styles/components/action.style'

const Action: React.FC = () => {
  const { hidden } = useContext(HideContext)

  return (
    <ContainerAction >
      <button style={{ height: 100, width: 100 }}>Flip</button>
      <button style={{ height: 100, width: 100 }}>Delete</button>
      <button style={{ height: 100, width: 100 }}>Mark</button>
    </ContainerAction>
  )
}

export default Action

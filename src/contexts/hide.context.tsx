import React, { createContext } from 'react'

interface HideContextData {
    hidden: true
}

const HideContext = createContext<HideContextData>({} as HideContextData)

export const HideProvider: React.FC = ({ children }) => (
  <HideContext.Provider value={{ hidden: true }}>
    {children}
  </HideContext.Provider>
)

export default HideContext

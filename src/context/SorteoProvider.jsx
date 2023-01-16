import { useSteps } from 'chakra-ui-steps'
import { createContext, useState } from 'react'

const INITIAL_STATE = {
  participantes: [],
  cantidadGanadores: '',
  premio: '',
  ganador: ''
}

export const SorteoContext = createContext()

const SorteoProvider = ({ children }) => {
  const [sorteo, setSorteo] = useState(INITIAL_STATE)
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0
  })

  const handleUpdate = (updatedSorteo) => {
    setSorteo(prevData => ({
      ...prevData,
      ...updatedSorteo
    }))
  }

  return (
    <SorteoContext.Provider
      value={{ sorteo, handleUpdate, nextStep, prevStep, reset, activeStep }}
    >
      {children}
    </SorteoContext.Provider>
  )
}

export default SorteoProvider

import { Box, Button, ListItem, OrderedList } from '@chakra-ui/react'
import { useSorteo } from '../hooks/useSorteo'

import { shallow } from 'zustand/shallow'
import { useEffect, useState } from 'react'
import { generarResultados } from '../utils/generateResultados'

const StepThree = () => {
  // const [ganadores, setGanadores] = useState([])
  const { participantes, config } = useSorteo(
    (state) => ({
      participantes: state.participantes,
      config: state.configuracion
    }),
    shallow
  )
  const ganadores = generarResultados(
    participantes,
    Number(config.cantidad_ganadores)
  )

  console.log(ganadores)

  // useEffect(() => {
  //   const ganadores = generarResultados(
  //     participantes,
  //     Number(config.cantidad_ganadores)
  //   )
  //   setGanadores(ganadores)
  // }, [])

  return (
    <Box>
      {/* GANADOR{ganadores.length > 1 ? 'ES' : ''} */}

      <OrderedList
        display='flex'
        height='200px'
        justifyContent='center'
        alignItems='center'
      >
        {ganadores.map((g, i) => (
          <ListItem
            key={g}
            fontSize={40 - i * 7}
            w='150px'
            order={i === 0 ? 1 : i - 1}
            alignSelf={i === 0 ? 'flex-start' : 'inherit'}
          >
            {' '}
            {g}{' '}
          </ListItem>
        ))}
      </OrderedList>

      <Button>volder a sortear</Button>
    </Box>
  )
}

export default StepThree

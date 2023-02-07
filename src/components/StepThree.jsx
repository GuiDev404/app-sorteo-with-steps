import { Box, Heading, ListItem, OrderedList } from '@chakra-ui/react'
import { shallow } from 'zustand/shallow'

import { useSorteo } from '../hooks/useSorteo'
import { generarResultados } from '../utils/generateResultados'
import Confetti from './Confetti'

const StepThree = () => {
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

  return (
    <Box>
      <Heading textAlign='center' my={4} letterSpacing={1}>
        GANADOR{ganadores.length > 1 ? 'ES' : ''}
      </Heading>

      <OrderedList
        display='flex'
        height='200px'
        justifyContent='center'
        alignItems='center'
      >
        {ganadores.map((ganador, i) => {
          const isFirstItem = i === 0

          return (
            <ListItem
              key={ganador}
              fontSize={40 - i * 7}
              minW={isFirstItem ? 130 : ''}
              color={isFirstItem ? 'green.400' : ''}
              order={isFirstItem ? 1 : i - 1}
              alignSelf={isFirstItem ? 'flex-start' : 'inherit'}
            >
              {ganador}
            </ListItem>
          )
        })}
      </OrderedList>

      <Confetti />
    </Box>
  )
}

export default StepThree

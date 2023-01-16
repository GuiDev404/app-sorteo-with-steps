import { Box, Button, Flex } from '@chakra-ui/react'
import useSorteo from '../hooks/useSorteo'
import { steps } from '../const/config'

function generarGanadores (participantes, cantGan) {
  const ganadores = [...Object.keys(cantGan)].reduce((acc, n) => {
    const index = Math.floor(Math.random() * participantes.length)
    const [ganador] = participantes.splice(index, 1)
    return acc.concat(ganador)
  }, [])

  return ganadores
}

const StepThree = () => {
  const { sorteo, activeStep, reset } = useSorteo()

  const ganadores = generarGanadores(sorteo.participantes, sorteo.cantidadGanadores)

  return (
    <Box>
      GANADOR{ganadores.length > 1 ? 'ES' : ''} {ganadores.join(' - ')}

      <Flex width='100%' justifyContent='center' alignItems='center'>
        {activeStep === steps.length && (
          <Flex p={4}>
            <Button mx='auto' size='md' onClick={reset}>
              Nuevo sorteo
            </Button>
          </Flex>
        )}
      </Flex>
    </Box>
  )
}

export default StepThree

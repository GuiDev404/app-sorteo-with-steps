import { Container } from '@chakra-ui/react'
import Header from './components/Header'

import StepsSorteo from './components/StepsSorteo'

function App () {
  return (
    <Container maxW='container.lg' my={5}>
      <Header
        title='sortea.app'
        subtitle='Cargue los participantes, configure algunos detalles y !HAY UN GANADOR! 🏆'
      />

      <StepsSorteo />
    </Container>
  )
}

export default App

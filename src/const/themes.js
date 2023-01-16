import { extendTheme } from '@chakra-ui/react'
import { StepsStyleConfig as Steps } from 'chakra-ui-steps'

const theme = extendTheme({
  fonts: {
    heading: '\'Roboto\', sans-serif',
    body: '\'Albert Sans\', sans-serif'
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true
  },
  components: {
    Steps
  }
})

export default theme

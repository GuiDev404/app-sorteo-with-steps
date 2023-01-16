import { Box } from '@chakra-ui/react'
import SorteoProvider from '../context/SorteoProvider'

const StepContent = ({ children }) => {
  return (
    <SorteoProvider>
      <Box my={5}>{children}</Box>
    </SorteoProvider>
  )
}

export default StepContent

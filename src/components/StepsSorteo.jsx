import { Flex } from '@chakra-ui/react'
import { Step, Steps } from 'chakra-ui-steps'
import { steps } from '../const/config'
import useSorteo from '../hooks/useSorteo'

const StepsSorteo = () => {
  const { activeStep } = useSorteo()

  return (
    <Flex flexDir='column' width='100%'>
      <Steps activeStep={activeStep} fontFamily='Albert Sans'>
        {steps.map(({ label, content }) => (
          <Step label={label} key={label}>
            {content}
          </Step>
        ))}
      </Steps>
    </Flex>
  )
}

export default StepsSorteo

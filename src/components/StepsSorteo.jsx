import { Step, Steps, useSteps } from 'chakra-ui-steps'
import { Flex, Button } from '@chakra-ui/react'
import { steps } from '../const/config'

const StepsSorteo = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0
  })

  return (
    <Flex flexDir='column' width='100%'>
      <Steps activeStep={activeStep}>
        {steps.map(({ label, content }) => (
          <Step label={label} key={label}>
            {content}
          </Step>
        ))}
      </Steps>
      {activeStep === steps.length
        ? (
          <Flex p={4}>
            <Button mx='auto' size='sm' onClick={reset}>
              Volver a sortear
            </Button>
          </Flex>
          )
        : (
          <Flex width='100%' justify='flex-end'>
            <Button
              isDisabled={activeStep === 0}
              mr={4}
              onClick={prevStep}
              size='sm'
              variant='ghost'
            >
              Volver
            </Button>
            <Button size='sm' onClick={nextStep}>
              {activeStep === steps.length - 1 ? 'Confirmar' : 'Siguiente'}
            </Button>
          </Flex>
          )}
    </Flex>
  )
}

export default StepsSorteo

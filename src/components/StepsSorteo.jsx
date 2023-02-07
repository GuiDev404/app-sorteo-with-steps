import { Step, Steps, useSteps } from 'chakra-ui-steps'
import { Flex, Button } from '@chakra-ui/react'
import { steps } from '../const/config'
import { useSorteo } from '../hooks/useSorteo'

const StepsSorteo = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({ initialStep: 0 })
  const participantes = useSorteo((state) => state.participantes)

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
            <Button mx='auto' size='md' onClick={reset}>
              Volver a sortear
            </Button>
          </Flex>
          )
        : (
          <Flex width='100%' justify='flex-end'>
            <Button
              isDisabled={activeStep === 0 || activeStep === 2}
              mr={4}
              onClick={prevStep}
              size='md'
              variant='ghost'
            >
              Volver
            </Button>
            <Button size='md' onClick={nextStep} isDisabled={participantes.length < 1}>
              {activeStep === steps.length - 1 ? 'Confirmar' : 'Siguiente'}
            </Button>
          </Flex>
          )}
    </Flex>
  )
}

export default StepsSorteo

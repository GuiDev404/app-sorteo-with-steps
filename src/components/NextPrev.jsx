import { Button, Flex } from '@chakra-ui/react'
// import { useSteps } from 'chakra-ui-steps'
import React from 'react'
import { steps } from '../const/config'
import useSorteo from '../hooks/useSorteo'

const NextPrev = ({ onNext, onPrev }) => {
  const { activeStep, nextStep, prevStep } = useSorteo()

  const handlePrev = () => {
    prevStep()
    onPrev && onPrev()
  }

  const handleNext = () => {
    nextStep()
    onNext && onNext()
  }

  return (
    <Flex>
      {activeStep > 0 && activeStep < steps.length - 1 && (
        <Button
          isDisabled={activeStep === 0}
          mr={4}
          onClick={handlePrev}
          size='md'
          variant='ghost'
        >
          Volver
        </Button>
      )}
      <Button size='md' onClick={handleNext}>
        {activeStep === steps.length - 1 ? 'Confirmar ganador' : 'Siguente'}
      </Button>
    </Flex>
  )
}

export default NextPrev

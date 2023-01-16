import {
  Box,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text
} from '@chakra-ui/react'
import React, { useId, useState } from 'react'
import useSorteo from '../hooks/useSorteo'
import NextPrev from './NextPrev'

const StepTwo = () => {
  const { sorteo, handleUpdate } = useSorteo()
  const [config, setConfig] = useState({
    premio: sorteo.premio,
    cantidadGanadores: sorteo?.cantidadGanadores
  })
  const id = useId()

  const handleChange = (e) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      [e?.target?.name ?? 'cantidadGanadores']: e?.target?.value ?? e
    }))
  }

  const handleConfig = () => {
    handleUpdate(config)
  }

  return (
    <>
      <Box display='flex' gap={2} flexDirection='column'>
        <FormControl>
          <FormLabel htmlFor={`${id}-cantidad`}>
            Ingrese la cantidad de ganadores
          </FormLabel>

          <NumberInput
            min={1}
            max={sorteo.participantes.length}
            isDisabled={sorteo.participantes.length === 0}
            onChange={handleChange}
            value={config.cantidadGanadores}
          >
            <NumberInputField
              name='cantidadGanadores'
              placeholder='Ej: 3'
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <Text fontSize='sm' color='gray.500'>
            {' '}
            * Debe ser menor o igual a la cantidad de participantes
          </Text>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={`${id}-premio`}>Ingrese el premio</FormLabel>
          <Input
            onChange={handleChange}
            value={config.premio}
            name='premio'
            id={`${id}-premio`}
            placeholder='Ej: un termo'
          />
        </FormControl>
      </Box>

      <NextPrev onNext={handleConfig} onPrev={handleConfig} />
    </>
  )
}

export default StepTwo

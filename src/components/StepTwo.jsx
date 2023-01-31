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
import { useSorteo } from '../hooks/useSorteo'
// import useSorteo from '../hooks/useSorteo'
// import NextPrev from './NextPrev'

const StepTwo = () => {
  const id = useId()
  const setConfiguracion = useSorteo((state) => state.setConfiguracion)
  const configuracion = useSorteo((state) => state.configuracion)

  const [premio, setPremio] = useState(configuracion.premio)
  const [cantidadGanadores, setCantidadGanadores] = useState(configuracion.cantidad_ganadores)

  const handleChangePremio = (e) => {
    setPremio(e.target.value)
    updateConfig()
  }

  const handleChangeCantidadGanadores = (cantidad) => {
    setCantidadGanadores(Number(cantidad))
    updateConfig()
  }

  const updateConfig = () => {
    setConfiguracion({ premio, cantidad_ganadores: cantidadGanadores })
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
            max={2}
            // isDisabled={configuracion.participantes.length === 0}
            onChange={handleChangeCantidadGanadores}
            value={cantidadGanadores}
            name='cantidad_ganadores'
            form={`form-${id}`}
          >
            <NumberInputField
              form={`form-${id}`}
              name='cantidad_ganadores'
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
            onChange={handleChangePremio}
            value={premio}
            name='premio'
            id={`${id}-premio`}
            placeholder='Ej: un termo'
          />
        </FormControl>
      </Box>

      {/* <NextPrev onNext={handleConfig} onPrev={handleConfig} /> */}
    </>
  )
}

export default StepTwo

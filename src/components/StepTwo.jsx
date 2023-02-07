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
import React, { useId } from 'react'
import { useSorteo } from '../hooks/useSorteo'

const StepTwo = () => {
  const id = useId()
  const participantes = useSorteo((state) => state.participantes)
  const setConfiguracion = useSorteo((state) => state.setConfiguracion)
  const configuracion = useSorteo((state) => state.configuracion)

  const handleChangePremio = (e) => {
    updateConfig({ premio: e.target.value })
  }

  const handleChangeCantidadGanadores = (cantidad) => {
    updateConfig({ cantidad_ganadores: Number(cantidad) })
  }

  const updateConfig = (rest) => {
    setConfiguracion({ ...configuracion, ...rest })
  }

  return (
    <>
      <Box my={4} display='flex' gap={2} flexDirection='column'>
        <FormControl>
          <FormLabel htmlFor={`${id}-cantidad`}>
            Ingrese la cantidad de ganadores
          </FormLabel>

          <NumberInput
            isDisabled={participantes.length < 2}
            min={1}
            max={participantes.length > 3 ? 3 : participantes.length}
            onChange={handleChangeCantidadGanadores}
            defaultValue={configuracion.cantidad_ganadores}
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

          {participantes.length < 2 && (
            <Text fontSize='sm' mt={1} color='red.400'>
              * Debe haber al menos 2 participante
            </Text>
          )}
        </FormControl>

        <FormControl>
          <FormLabel htmlFor={`${id}-premio`}>Ingrese el premio</FormLabel>
          <Input
            onChange={handleChangePremio}
            name='premio'
            id={`${id}-premio`}
            placeholder='Ej: un termo'
            defaultValue={configuracion.premio}
          />
        </FormControl>
      </Box>

    </>
  )
}

export default StepTwo

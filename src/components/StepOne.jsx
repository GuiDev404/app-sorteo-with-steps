import {
  Box,
  FormControl,
  FormLabel,
  Tag,
  Text,
  Textarea
} from '@chakra-ui/react'
import React, { useId, useState } from 'react'
import useSorteo from '../hooks/useSorteo'
import NextPrev from './NextPrev'

const StepOne = () => {
  const { sorteo, handleUpdate } = useSorteo()
  const id = useId()

  const [participantes, setParcipantes] = useState(sorteo.participantes.join(','))
  const withoutRepeats = [...new Set(participantes.split(','))].filter(Boolean)

  const handleParticipantes = () => {
    handleUpdate({ participantes: withoutRepeats })
  }

  const handleChange = (e) => {
    const rawParcipantes = e.target.value.toLowerCase()
    setParcipantes(rawParcipantes)
  }

  return (
    <>
      <Box
        display='flex'
        gap={2}
        flexDirection='column'
      >
        <FormControl>
          <FormLabel htmlFor={`${id}-nombre`}>
            Ingrese el nombre del participante
          </FormLabel>
          <Textarea
            name='nombre'
            id={`${id}-nombre`}
            placeholder='Ej: Carlos'
            onChange={handleChange}
            value={participantes}
          />
        </FormControl>

        {/* <Button type="submit" w={250}>
          {" "}
          Agregar{" "}
        </Button> */}
      </Box>

      <Box my={3} display='flex' gap='1' bg='gray.700' rounded='md' p={4}>
        {withoutRepeats.length > 0
          ? (
              withoutRepeats.map((participante) => (
                <Tag size='lg' py={1} px={2} key={participante}>
                  {' '}
                  {participante}{' '}
                </Tag>
              ))
            )
          : (
            <Text fontSize='xl' fontWeight='black' textAlign='center' w='100%' p={2}>
              Agregue participantes
            </Text>
            )}
      </Box>

      <NextPrev onNext={handleParticipantes} />
    </>
  )
}

export default StepOne

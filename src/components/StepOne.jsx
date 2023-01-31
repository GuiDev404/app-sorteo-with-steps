import {
  Box,
  FormControl,
  FormLabel,
  Tag,
  Text,
  Textarea
} from '@chakra-ui/react'
import React, { useId, useState } from 'react'
import { useSorteo } from '../hooks/useSorteo'

const StepOne = () => {
  const setParticipantes = useSorteo((state) => state.setParticipantes)
  const participantesStored = useSorteo((state) => state.participantes)
  const id = useId()

  const [participantes, setParcipantes] = useState(
    participantesStored.join(',')
  )
  const participantesSinRepetir = [...new Set(participantes.split(','))].filter(
    Boolean
  )

  const handleChange = (e) => {
    const rawParcipantes = e.target.value.toLowerCase()
    setParcipantes(rawParcipantes)

    setParticipantes(participantesSinRepetir)
  }

  return (
    <>
      <Box
        display='flex'
        gap={2}
        as='form'
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
        {participantesSinRepetir.length > 0
          ? (
              participantesSinRepetir.map((participante) => (
                <Tag size='lg' py={1} px={2} key={participante}>
                  {' '}
                  {participante}{' '}
                </Tag>
              ))
            )
          : (
            <Text
              fontSize='xl'
              fontWeight='black'
              textAlign='center'
              w='100%'
              p={2}
            >
              Agregue participantes
            </Text>
            )}
      </Box>

      {/* <NextPrev onNext={handleParticipantes} /> */}
    </>
  )
}

export default StepOne

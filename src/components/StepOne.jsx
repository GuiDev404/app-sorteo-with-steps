import React, { useId } from 'react'
import { Box, FormControl, FormLabel, Text, Textarea } from '@chakra-ui/react'
import { useSorteo } from '../hooks/useSorteo'
import PlusIcon from './PlusIcon'
import ListOfTags from './ListOfTags'

const StepOne = () => {
  const setParticipantes = useSorteo((state) => state.setParticipantes)
  const participantes = useSorteo((state) => state.participantes)
  const id = useId()

  const handleChange = (e) => {
    setParticipantes(e.target.value.trim())
  }

  return (
    <>
      <Box
        mt={4}
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
            minHeight={150}
            maxHeight={150}
            id={`${id}-nombre`}
            placeholder='Ej: Carlos, Marcos'
            onChange={handleChange}
            defaultValue={participantes.join(',')}
          />
        </FormControl>

      </Box>

      <Box my={3} display='flex' gap='1' bg='gray.700' rounded='md' p={4}>
        {participantes.length > 0
          ? <ListOfTags tags={participantes} />
          : (
            <Text
              fontSize='xl'
              fontWeight='black'
              gap='2'
              display='flex'
              justifyContent='center'
              alignItems='center'
              w='100%'
              p={2}
            >
              <PlusIcon width='30' height='30' />
              <Text as='span'> Agregue participantes </Text>
            </Text>
            )}
      </Box>

    </>
  )
}

export default StepOne

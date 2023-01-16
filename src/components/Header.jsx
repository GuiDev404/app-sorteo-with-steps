import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Header = ({ title, subtitle }) => {
  return (
    <Box
      my={10}
      as='header'
      gap={3}
      display='flex'
      alignItems='center'
      flexDir='column'
    >
      <Heading size='3xl' color='green.400'>
        {title}
      </Heading>
      <Text color='gray.400' fontSize='xl'>
        {subtitle}
      </Text>
    </Box>
  )
}

export default Header

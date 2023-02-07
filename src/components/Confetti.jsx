import { Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useReward } from 'react-rewards'

const Confetti = () => {
  const { reward } = useReward('rewardId', 'confetti')

  useEffect(() => {
    reward()
  }, [])

  return (
    <Text id='rewardId' textAlign='center' />
  )
}

export default Confetti

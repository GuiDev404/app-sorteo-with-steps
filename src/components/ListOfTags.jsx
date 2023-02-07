import { Tag } from '@chakra-ui/react'

const ListOfTags = ({ tags }) => {
  return tags.map((participante) => (
    <Tag
      size='lg'
      py={1}
      px={2}
      key={participante}
    >
      {participante}
    </Tag>
  ))
}

export default ListOfTags

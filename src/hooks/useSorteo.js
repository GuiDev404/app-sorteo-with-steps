import { useContext } from 'react'
import { SorteoContext } from '../context/SorteoProvider'

const useSorteo = () => {
  return useContext(SorteoContext)
}

export default useSorteo

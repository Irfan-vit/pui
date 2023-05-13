import getProducts from '../query/getProducts'
import { useQuery } from '@tanstack/react-query'
import { filterCategory } from '../utils/filterCategory'
import { useFilter } from '../context/filter/filterContext'

const useFilteredProducts = () => {
  const { filterState } = useFilter()
  const products = useQuery(['products', filterState], getProducts)
  const results = []
  // const result = filterCategory(filterState, products?.data ?? [])
  results.push
  return [result, products]
}

export default useFilteredProducts

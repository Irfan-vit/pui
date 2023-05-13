import getProducts from '../queries/getProducts'
import { useQuery } from '@tanstack/react-query'
import { filterCategory } from '../utils/filterCategory'

import { useFilterProducts } from '../context/filterProductsContext'

const useFilteredProducts = () => {
  const { filterState } = useFilterProducts()
  const products = useQuery(['products', filter], getProducts)
  const results = filterCategory(filterState, products?.data ?? [])
  return [...results, products]
}

export default useFilteredProducts
import { useQuery } from '@tanstack/react-query'

import getProducts from '../queries/getProducts'
import { filterCategory } from '../helpers/filterCategory'
import { useFilterProducts } from '../context/filterProductsContext'

const useFilteredProducts = () => {
  const { filterState } = useFilterProducts()
  const products = useQuery(['products', filterState], getProducts)
  console.log(products)
  const result = filterCategory(filterState, products?.data ?? [])
  return [...result, products]
}

export default useFilteredProducts

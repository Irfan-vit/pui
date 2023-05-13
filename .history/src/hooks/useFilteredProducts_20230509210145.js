import { useQuery } from '@tanstack/react-query'

import getProducts from '../queries/getProducts'
import { filterCategory } from '../helpers/filterCategory'
import { useFilterProducts } from '../context/filterProductsContext'

const useFilteredProducts = () => {
  const { filterState } = useFilterProducts()
  const products = useQuery(['products'], getProducts)
  console.log(products)
  const results = filterCategory(filterState, products?.data ?? [])
  return [...results, products]
}

export default useFilteredProducts

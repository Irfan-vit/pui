// import getProducts from '../queries/getProducts'

import { filterCategory } from '../utils/filterCategory'

import { useFilterProducts } from '../context/filterProductsContext'

const useFilteredProducts = () => {
  const { filterState } = useFilterProducts()
  // const products = useQuery(['products'], getProducts)
  const results = filterCategory(filterState, products?.data ?? [])
  return [...results]
}

export default useFilteredProducts

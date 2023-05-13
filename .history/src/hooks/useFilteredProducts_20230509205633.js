// import getProducts from '../queries/getProducts'

import { filterCategory } from '../'

import { useFilterProducts } from '../context/filterProductsContext'

const useFilteredProducts = () => {
  const { filterState, products } = useFilterProducts()
  // const products = useQuery(['products'], getProducts)
  const results = filterCategory(filterState, products?.data ?? [])
  return [...results, products]
}

export default useFilteredProducts


import { filterCategory } from '../helpers/filterCategory'
import { useFilterProducts } from '../context/filterProductsContext'

const useFilteredProducts = () => {
  const { filterState, products } = useFilterProducts()

  const result = filterCategory(filterState, products?.data ?? [])
  return [result, products]
}

export default useFilteredProducts

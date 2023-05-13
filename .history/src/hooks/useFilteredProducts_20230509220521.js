import { filterCategory } from '../helpers/filterCategory'
import { useFilterProducts } from '../context/filterProductsContext'
import { useProducts } from '../context/getProductsContext'

const useFilteredProducts = () => {
  const { products } = useProducts()
  const { filterState } = useFilterProducts()

  const result = filterCategory(filterState, products ?? [])
  return [result, products]
}

export default useFilteredProducts

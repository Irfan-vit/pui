import { filterCategory } from '../helpers/filterCategory'
import { useFilterProducts } from '../context/filterProductsContext'
import { useProducts } from '../context/getProductsContext'

const useFilteredProducts = () => {
  const {pro}
  const { filterState, products } = useFilterProducts()

  const result = filterCategory(filterState, products?.data ?? [])
  return [result, products]
}

export default useFilteredProducts

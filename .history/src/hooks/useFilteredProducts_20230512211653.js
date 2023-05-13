import { filterCategory } from '../helpers/filterCategory'
import { useFilterProducts } from '../context/filterProductsContext'
import { useProducts } from '../context/getProductsContext'
import { filterSearch } from '../helpers/filterSearch'

const useFilteredProducts = () => {
  const { products } = useProducts()
  const { filterState } = useFilterProducts()

  const result = filterCategory(filterState, products ?? [])
  const searchedList = filterSearch(search, result)
  return [result]
}

export default useFilteredProducts

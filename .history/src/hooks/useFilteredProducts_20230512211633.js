import { filterCategory } from '../helpers/filterCategory'
import { useFilterProducts } from '../context/filterProductsContext'
import { useProducts } from '../context/getProductsContext'
import 

const useFilteredProducts = () => {
  const { products } = useProducts()
  const { filterState } = useFilterProducts()

  const result = filterCategory(filterState, products ?? [])
  const searchedList = getSearchedList(search, ratingList);
  return [result]
}

export default useFilteredProducts

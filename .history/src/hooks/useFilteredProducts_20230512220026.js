import { filterCategory } from '../helpers/filterCategory'
import { useFilterProducts } from '../context/filterProductsContext'
import { useProducts } from '../context/getProductsContext'
import { filterSearch } from '../helpers/filterSearch'

const useFilteredProducts = () => {
  const { products } = useProducts()
  const { filterState, search, setSearch } = useFilterProducts()

  const result = filterCategory(filterState, products ?? [])
  const searchedList = filterSearch(search, result)
  console.log(searchedList, 'this is search')
  return [searchedList]
}

export default useFilteredProducts

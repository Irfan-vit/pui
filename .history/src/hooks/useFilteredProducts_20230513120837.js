import { filterCategory } from '../helpers/filterCategory'
import { useFilterProducts } from '../context/filterProductsContext'
import { useProducts } from '../context/getProductsContext'
import { filterSearch } from '../helpers/filterSearch'
import { filterSortPrice } from '../helpers/filterSortPrice'
import { filterRating } from '../helpers/filterRating'

const useFilteredProducts = () => {
  const { products } = useProducts()
  const { filterState, search, setSearch } = useFilterProducts()

  const result = filterCategory(filterState, products ?? [])
  const sortedList = filterSortPrice(filterState, result)
  const RatingList = filterRating(fil)
  const searchedList = filterSearch(search, sortedList)

  console.log(searchedList, 'this is search')
  return [searchedList]
}

export default useFilteredProducts

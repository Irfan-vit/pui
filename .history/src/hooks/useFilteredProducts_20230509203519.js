import getProducts from '../queries/getProducts'
import { useQuery } from '@tanstack/react-query'
// import { filterCategory } from '../utils/filterCategory'
// import { useFilter } from '../context/filter/filterContext'

import {useFilterProducts} from 

const useFilteredProducts = () => {
  // const { filterState } = useFilter()
  const products = useQuery(['products'], getProducts)
  const results = []
  // console.log(products)
  // const result = filterCategory(filterState, products?.data ?? [])
  results.push(products?.data?.filter((e) => e.categoryName === 'mens') ?? [])
  return [...results, products]
}

export default useFilteredProducts

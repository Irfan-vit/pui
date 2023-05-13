import { useFilterProducts } from '../../context/filterProductsContext'
import { StyledSelect } from './SelectStyles'
const Select = () => {
  const { filterDispatch, filterState } = useFilterProducts()
  return (
    <form action="">
      <label
        htmlFor="categories"
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <StyledSelect name="categories" id="categories">
          <option value="select" onClick={}>Go To Products</option>
          <option value="cat1">Casual</option>
          <option value="cat2">Fitness</option>
          <option value="cat3">Track</option>
          <option value="cat4">Sports</option>
        </StyledSelect>
      </label>
    </form>
  )
}
export default Select

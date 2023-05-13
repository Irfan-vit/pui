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
          <option value="select" onClick={() => filterDispatch({ type: '' })}>
            Go To Products
          </option>
          <option value="casual" onClick={() => filterDispatch({ type: 'casual' })}>
            Casual
          </option>
          <option value="cat2" onClick={() => filterDispatch({ type: '' })}>
            Fitness
          </option>
          <option value="cat3" onClick={() => filterDispatch({ type: '' })}>
            Track
          </option>
          <option value="cat4" onClick={() => filterDispatch({ type: '' })}>
            Sports
          </option>
        </StyledSelect>
      </label>
    </form>
  )
}
export default Select
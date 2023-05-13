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
          <option value="fitness" onClick={() => filterDispatch({ type: 'fitness' })}>
            Fitness
          </option>
          <option value="track" onClick={() => filterDispatch({ type: 'track' })}>
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

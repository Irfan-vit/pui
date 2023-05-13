import { useNavigate } from 'react-router-dom'
import { useFilterProducts } from '../../context/filterProductsContext'
import { StyledSelect } from './SelectStyles'

const Select = () => {
  const { filterDispatch, filterState } = useFilterProducts()
  const navigate = useNavigate()
  return (
    <form action="">
      <label
        htmlFor="categories"
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <StyledSelect name="categories" id="categories">
          <option
            value="select"
            onClick={() => {
              filterDispatch({ type: 'reset' })
              navigate('/product')
            }}
          >
           Link Go To Products
          </option>
          <option
            value="casual"
            onClick={() => {
              filterDispatch({ type: 'casual' })
              navigate('/product')
            }}
          >
            Casual
          </option>
          <option
            value="fitness"
            onClick={() => {
              navigate('/product')
              filterDispatch({ type: 'fitness' })
            }}
          >
            Fitness
          </option>
          <option
            value="track"
            onClick={() => {
              navigate('/product')
              filterDispatch({ type: 'track' })
            }}
          >
            Track
          </option>
          <option
            value="sports"
            onClick={() => {
              navigate('/product')
              filterDispatch({ type: 'sports' })
            }}
          >
            Sports
          </option>
        </StyledSelect>
      </label>
    </form>
  )
}
export default Select

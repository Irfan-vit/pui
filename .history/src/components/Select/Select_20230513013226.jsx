import { redirect } from 'react-router-dom'
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
          <option
            value="select"
            onClick={() => {
              redirect('/product')
              filterDispatch({ type: '' })
            }}
          >
            Go To Products
          </option>
          <option
            value="casual"
            onClick={() => {
              redirect('/product')
              filterDispatch({ type: 'casual' })
            }}
          >
            Casual
          </option>
          <option
            value="fitness"
            onClick={() => filterDispatch({ type: 'fitness' })}
          >
            Fitness
          </option>
          <option
            value="track"
            onClick={() => filterDispatch({ type: 'track' })}
          >
            Track
          </option>
          <option
            value="sports"
            onClick={() => filterDispatch({ type: 'sports' })}
          >
            Sports
          </option>
        </StyledSelect>
      </label>
    </form>
  )
}
export default Select
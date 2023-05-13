import Search from '../animations/Floats/Search'

import { StyledSearchInput } from './SearchInputStyles'
import { useFilterProducts } from '../../context/filterProductsContext'
const SearchInput = ({ value, setValue }) => {
  const { search, setSearch } = useFilterProducts()
  return (
    <form action="">
      <StyledSearchInput>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Search />
      </StyledSearchInput>
    </form>
  )
}
export default SearchInput

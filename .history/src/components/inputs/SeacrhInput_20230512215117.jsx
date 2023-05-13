import Search from '../animations/Floats/Search'

import { StyledSearchInput } from './SearchInputStyles'
import 
const SearchInput = ({value, setValue }) => {
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

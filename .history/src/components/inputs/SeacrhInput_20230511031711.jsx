import styled from 'styled-components'

import Search from '../animations/Floats/Search'

const StyledSearchInput = styled.div`
  position: relative;
  width: 100%;
  > input {
    outline: none;
    cursor: pointer;
    padding: var(--font-xxxs) var(--font-xxs);
    color: ${(props) => props.theme.primaryText};
    border: 1px solid ${(props) => props.theme.primaryHeading};
    box-shadow: var(--box-shadow-small);
    width: 100%;
    :focus {
      border: 1px solid ${(props) => props.theme.action};
      outline: none;
    }
  }
  > a {
    position: absolute;
    right: 0;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: ${(props) => props.theme.textMuted};
    cursor: pointer;
    :hover {
      color: ${(props) => props.theme.primaryColor};
    }
  }
`

const SearchInput = () => {
  return (
    <StyledSearchInput>
      <input type="text" />
      <Search />
    </StyledSearchInput>
  )
}
export default SearchInput

import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'

const StyledSearchInput = styled.div`
  display: inline-block;
  position: relative;
  > input {
    max-width: 25vw;
    min-width: 35vw;
    display: inline-block;
    outline: none;
    cursor: pointer;
    font-size: var(--font-md);
    border-radius: var(--border-size4);
    padding: var(--font-xxxs) var(--font-xxs);
    color: ${(props) => props.theme.textColor};
    border: 1px solid ${(props) => props.theme.textMuted};
    box-shadow: var(--box-shadow-small);
    padding-right: 25px;
    @media (max-width: 550px) {
      min-width: 80vw;
    }
    :focus {
      border: 1px solid ${(props) => props.theme.primaryColor};
      outline: none;
    }
  }
  > span {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(-50%, -25%);
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
      <span>
        <FiSearch />
      </span>
    </StyledSearchInput>
  )
}
export default SearchInput

import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'
import Lottie from 'lottie-react'

const StyledSearchInput = styled.div`
  /* display: inline-block; */
  position: relative;
  width: 50%;
  > input {
    outline: none;
    cursor: pointer;
    font-size: var(--font-md);
    border-radius: var(--border-size4);
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
        {/* <FiSearch /> */}
        <Lottie
          animationData={logoRun}
          style={style}
          loop={true}
          interactivity={interactivity}
          initialSegment={[49, 72]}
        />
      </span>
    </StyledSearchInput>
  )
}
export default SearchInput

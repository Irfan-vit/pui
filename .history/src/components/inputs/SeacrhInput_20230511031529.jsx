import styled from 'styled-components'
import Lottie from 'lottie-react'
import search from '../../assets/search2.json'

import seach

const style = {
  height: '1.5rem',
  display: 'inline-block',
  cursor: 'pointer',
}

const interactivity = {
  mode: 'cursor',
  actions: [
    {
      position: { x: [0, 1], y: [0, 1] },
      type: 'loop',
      frames: [0, 20],
    },
    {
      position: { x: -1, y: -1 },
      type: 'stop',
      frames: [0],
    },
  ],
}

const StyledSearchInput = styled.div`
  /* display: inline-block; */
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
      <a href="#">
        <Lottie
          animationData={search}
          style={style}
          loop={true}
          interactivity={interactivity}
          initialSegment={[0, 20]}
        />
      </a>
    </StyledSearchInput>
  )
}
export default SearchInput

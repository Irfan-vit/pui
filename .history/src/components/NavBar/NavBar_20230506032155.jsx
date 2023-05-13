import styled from 'styled-components'
import Lottie from 'lottie-react'
import logoRun from '../../assets/logo.json'
import Select from '../Select/Select'
import SearchInput from '../inputs/SeacrhInput'

const style = {
  height: '5rem',
  display: 'inline-block',
}

const interactivity = {
  mode: 'cursor',
  actions: [
    {
      position: { x: [1, 0], y: [1, 0] },
      type: 'seek',
      frames: [49, 72],
    },
    {
      position: { x: -1, y: -1 },
      type: 'stop',
      frames: [49],
    },
  ],
}

const StyledNavBarWrapper = styled.header`
  background-color: ${(props) => props.theme.offSetBg};
`

const StyledNav = styled.nav``

const NavBar = () => {
  return (
    <StyledNavBarWrapper>
      <StyledNav>
        <Lottie
          animationData={logoRun}
          style={style}
          loop={true}
          interactivity={interactivity}
          initialSegment={[49, 72]}
        />
        <div>
          <Select />
        </div>
        <div>
          <SearchInput />
        </div>
      </StyledNav>
    </StyledNavBarWrapper>
  )
}

export default NavBar

import styled from 'styled-components'
import Lottie from 'lottie-react'
import logoRun from '../../assets/logo.json'

const style = {
  height: '5rem',
  display: 'inline-block',
}

const interactivity = {
  mode: 'cursor',
  actions: [
    {
      position: { x: [0, 1], y: [0, 1] },
      type: 'loop',
      frames: [49, 55],
    },
    {
      position: { x: -1, y: -1 },
      type: 'stop',
      frames: [55],
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
          autoPlay={false}
          interactivity={interactivity}
        />
      </StyledNav>
    </StyledNavBarWrapper>
  )
}

export default NavBar

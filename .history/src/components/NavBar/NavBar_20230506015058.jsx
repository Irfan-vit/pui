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
      type: 'seek',
      frames: [49, 72],
    },
    {
      position: { x: -1, y: -1 },
      type: 'stop',
      frames: [49],
      // type: 'play',
      // frames: [0, 72],
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
          <form></form>
        </div>
      </StyledNav>
    </StyledNavBarWrapper>
  )
}

export default NavBar

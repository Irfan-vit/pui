import styled from 'styled-components'
import Lottie from 'lottie-react'
import logoRun from '../../assets/logoRun.json'

const style = {
  height: '5rem',
  // width: '100px',
  display: 'inline-block',
}

const StyledNavBarWrapper = styled.header`
  background-color: ${(props) => props.theme.offSetBg};
`

const StyledNav = styled.nav``

const NavBar = () => {
  return (
    <StyledNavBarWrapper>
      <StyledNav>
        <h1>
          <Lottie animationData={logoRun} style={style} loop={true} />
        </h1>
      </StyledNav>
    </StyledNavBarWrapper>
  )
}

export default NavBar

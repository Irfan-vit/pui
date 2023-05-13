import styled from 'styled-components'
import Lottie from 'lottie-react'
import logoRun from '../../assets/logoRun.json'

const StyledNavBarWrapper = styled.header`
  background-color: ${(props) => props.theme.offSetBg};
  max-height: 10vh;
`

const StyledNav = styled.nav``

const NavBar = () => {
  return (
    <StyledNavBarWrapper>
      <StyledNav>
        <Lottie animationData={logoRun} loop={true} />
      </StyledNav>
    </StyledNavBarWrapper>
  )
}

export default NavBar

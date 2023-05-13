import styled from 'styled-components'
import Lottie from 'lottie-react'
import logoRun from '../../assets/logoRun.json'

const style = {
  height: '2rem',
  wid
}

const StyledNavBarWrapper = styled.header`
  background-color: ${(props) => props.theme.offSetBg};
`

const StyledNav = styled.nav``

const NavBar = () => {
  return (
    <StyledNavBarWrapper>
      <StyledNav>
        <Lottie animationData={logoRun} style={style} loop={true} />
      </StyledNav>
    </StyledNavBarWrapper>
  )
}

export default NavBar

import styled from 'styled-components'

const StyledNavBarWrapper = styled.header`
  background-color: ${props => props.theme.off};
`

const StyledNav = styled.nav``

const NavBar = () => {
  return (
    <StyledNavBarWrapper>
      <StyledNav></StyledNav>
    </StyledNavBarWrapper>
  )
}

export default NavBar
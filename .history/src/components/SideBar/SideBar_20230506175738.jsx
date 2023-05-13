import styled from 'styled-components'

import Select from '../Select/Select'
import { FaBars } from 'react-icons/fa'

const StyledSideNavWrapper = styled.div`
  background-color: ${(props) => props.theme.offSetBg};
  min-height: 10vh;
`

const StyledSideNav = styled.nav``

const SideNav = () => {
  return (
    <StyledSideNavWrapper>
      <aside>
        <a href="#main-menu">
          <FaBars />
        </a>
        <StyledSideNav>
          <Select />
        </StyledSideNav>
      </aside>
    </StyledSideNavWrapper>
  )
}
export default SideNav

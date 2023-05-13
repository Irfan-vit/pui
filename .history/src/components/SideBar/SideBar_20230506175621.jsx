import styled from 'styled-components'

import Select from '../Select/Select'
import { FaBars } from 'react-icons/fa'

const StyledSideNavWrapper = styled.div`
  background-color: ${(props) => props.theme.offSetBg};
`

const StyledSideNav = styled.nav`
  width: 100%;
`

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

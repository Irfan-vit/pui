import styled from 'styled-components'

import Select from '../Select/Select'
import { FaBars } from 'react-icons/fa'

const StyledSideNavWrapper = styled.div``

const 

const SideNav = () => {
  return (
    <StyledSideNavWrapper>
      <aside>
        <a href="#main-menu">
          <FaBars />
        </a>
        <nav >
          <Select />
        </nav>
      </aside>
    </StyledSideNavWrapper>
  )
}
export default SideNav

import styled from 'styled-components'

import Select from '../Select/Select'
import { FaBars } from 'react-icons/fa'

const StyledSideNavWrapper = styled.div``

const SideNav = () => {
  return (
    <StyledSideNavWrapper>
      <aside>
        <a href="#main-menu">
          <FaBars />
        </a>
        <div>
            <FaBars
        </div>
      </aside>
    </StyledSideNavWrapper>
  )
}
export default SideNav

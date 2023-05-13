import styled from 'styled-components'
import Lottie from 'lottie-react'
import logoRun from '../../assets/logo.json'
import Select from '../Select/Select'
import SearchInput from '../inputs/SeacrhInput'
import { FaMoon, FaShoppingCart, FaHeart, FaUserAlt } from 'react-icons/fa'
FaMoon

const style = {
  height: '5rem',
  display: 'inline-block',
  cursor: 'pointer',
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
      frames: [72],
    },
  ],
}

const StyledNavBarWrapper = styled.header`
  background-color: ${(props) => props.theme.offSetBg};
  > * div {
    color: red;
    text-align: center;
  }
`

const NavList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  
`

const StyledNav = styled.nav``

const NavBar = () => {
  return (
    <StyledNavBarWrapper>
      <StyledNav>
        <div>
          <a href="#">
            <Lottie
              animationData={logoRun}
              style={style}
              loop={true}
              interactivity={interactivity}
              initialSegment={[49, 72]}
            />
          </a>
        </div>
        <div>
          <Select />
        </div>
        <div>
          <SearchInput />
        </div>
        <div>
          <ul>
            <li>
              <a href="">
                <FaShoppingCart />
                <p>Cart</p>
              </a>
            </li>
            <li>
              <a href="">
                <FaHeart />
                <p>Wishlist</p>
              </a>
            </li>
            <li>
              <a href="">
                <FaUserAlt />
                <p>Login</p>
              </a>
            </li>
            <li>
              <a href="">
                <FaMoon />
                <p>Theme</p>
              </a>
            </li>
          </ul>
        </div>
      </StyledNav>
    </StyledNavBarWrapper>
  )
}

export default NavBar

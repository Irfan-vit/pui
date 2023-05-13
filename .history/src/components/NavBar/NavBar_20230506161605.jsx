import styled from 'styled-components'
import Lottie from 'lottie-react'
import logoRun from '../../assets/logo.json'
import Select from '../Select/Select'
import SearchInput from '../inputs/SeacrhInput'
import { FaShoppingCart, FaHeart, FaUserAlt } from 'react-icons/fa'

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
  > * {
    font-weight: var(--font-weight-semi-bold);
  }
`

const NavList = styled.div`
  > ul {
    display: flex;
    flex-flow: row wrap;
    list-style-type: none;
    justify-content: space-between;
    gap: 2;
  }
  > ul > li > a {
    flex-basis: 30%;
    text-decoration: none;
    margin: 0;
    padding: 0;
    :hover {
      text-decoration-line: underline;
      text-decoration-style: line;
      /* text-emphasis: filled circle red; */
      /* text-emphasis-style: '"'; */
      /* text-emphasis-position: under; */
    }
    :active,
    :focus {
      color: green;
      text-decoration-line: underline;
      text-decoration-style: line;
    }
  }
`

const StyledNav = styled.nav`
  margin: 0 auto;
  text-align: center;
  @media (min-width: 550px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    /* gap: 2%; */
    > div:nth-child(1) {
      flex-basis: 5%;
    }
    > div:nth-child(2) {
      flex-basis: 10%;
    }
    > div:nth-child(3) {
      flex-basis: 50%;
    }
    > div:nth-child(4) {
      flex-basis: 25%;
    }
  }
`

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
              initialSegment={[49, 71]}
            />
          </a>
        </div>
        <div>
          <Select />
        </div>
        <div>
          <SearchInput />
        </div>
        <NavList>
          <ul>
            <li>
              <a href="">
                <FaShoppingCart />
                <p>Cart</p>
              </a>
            </li>
            <li>
              <a href="#">
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
          </ul>
        </NavList>
      </StyledNav>
    </StyledNavBarWrapper>
  )
}

export default NavBar

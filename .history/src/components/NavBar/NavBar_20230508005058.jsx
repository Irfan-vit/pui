import styled from 'styled-components'
import Lottie from 'lottie-react'
import logoRun from '../../assets/logo.json'
import Select from '../Select/Select'
import SearchInput from '../inputs/SeacrhInput'
import { FaShoppingCart, FaHeart, FaUserAlt } from 'react-icons/fa'

const style = {
  height: '5rem',
  width: '4rem',
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

const NavList = styled.div`
  > ul {
    display: flex;
    flex-flow: row wrap;
    list-style-type: none;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }
  > ul > li {
    flex-basis: 23%;
  }
  > ul > li > a {
    text-decoration: none;
    margin: 0;
    padding: 0;
    transition: 0.3s;
    text-decoration: underline;
    text-decoration-color: transparent;
    -webkit-text-decoration-color: transparent;
    -moz-text-decoration-color: transparent;
    text-decoration: none;
    color: ${(props) => props.theme.higilight};
    /* :hover {
      text-decoration-color: ${(props) => props.theme.offSetText};
    } */
    :hover,
    :active,
    :focus {
      color: ${(props) => props.theme.offSetText};
      text-decoration-line: underline;
      text-decoration-style: line;
      text-decoration-color: ${(props) => props.theme.offSetText};
      text-underline-offset: 3px;
    }
  }
`

const StyledNav = styled.nav`
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  height: 25vh;
  background-color: ${(props) => props.theme.offSetBg};
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  text-align: center;
  > div {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
  }
  > div:nth-child(1) {
    order: 1;
    flex-basis: 50%;
  }
  > div:nth-child(2) {
    order: 2;
    flex-basis: 50%;
    display: flex;
    flex-flow: column-reverse wrap;
    > div:nth-child(1) {
      width: 100%;
    }
    > div:nth-child(2) {
      width: 100%;
      > ul {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        align-content: center;
      }
    }
  }

  @media (min-width: 900px) {
    height: 15vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    /* > div {
      margin: 0;
    } */
    /* gap: 2%; */
    > div:nth-child(1) {
      flex-basis: 30%;
      order: 1;
      flex-flow: row wrap;
      justify-content: space-between;
      display: flex;
      > div:nth-child(1) {
        flex-basis: 30%;
      }
      > div:nth-child(2) {
        flex-basis: 70%;
      }
    }
    > div:nth-child(2) {
      flex-basis: 70%;
      order: 2;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      > div:nth-child(1) {
        flex-basis: 60%;
      }
      > div:nth-child(2) {
        flex-basis: 40%;
        > ul {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-around;
          align-items: center;
          align-content: center;
        }
      }
    }
  }

  @media (min-width: 550px) {
    height: 15vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    /* > div {
      margin: 0;
    } */
    /* gap: 2%; */
    > div:nth-child(1) {
      flex-basis: 30%;
      order: 1;
      flex-flow: row wrap;
      justify-content: space-between;
      display: flex;
      > div:nth-child(1) {
        flex-basis: 30%;
      }
      > div:nth-child(2) {
        flex-basis: 70%;
      }
    }
    > div:nth-child(2) {
      flex-basis: 70%;
      order: 2;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      > div:nth-child(1) {
        flex-basis: 60%;
      }
      > div:nth-child(2) {
        flex-basis: 40%;
        > ul {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-around;
          align-items: center;
          align-content: center;
        }
      }
    }
  }
`

const NavBar = () => {
  return (
    <StyledNav>
      <div>
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
      </div>
      <div>
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
      </div>
    </StyledNav>
  )
}

export default NavBar

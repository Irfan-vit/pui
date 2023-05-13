import { StyledNavWrapper, StyledNav, StyledNavList } from './NavBarStyles'
import HeroLogo from '../animations/HeroAnimations/HeroLogo'

import Select from '../select/Select'
import SearchInput from '../inputs/SeacrhInput'

const NavBar = () => {
  return (
    <StyledNavWrapper>
      <StyledNav>
        <div>
          <div>
            <a href="#">
              <HeroLogo />
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
          <StyledNavList>
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
          </StyledNavList>
        </div>
      </StyledNav>
    </StyledNavWrapper>
  )
}

export default NavBar

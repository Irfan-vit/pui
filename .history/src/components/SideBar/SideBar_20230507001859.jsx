import styled from 'styled-components'

import { FaBars, FaWindowClose, FaStream } from 'react-icons/fa'

const SideNav = () => {
  return (
    <aside>
      <a href="#main-menu">
        <FaBars />
      </a>
      <StyledSideNav id="main-menu">
        <StyledMobileNavIcons>
          <a href="">
            <span></span>
            <span></span>
            span
          </a>
          <a href="#">
            <FaWindowClose />
          </a>
        </StyledMobileNavIcons>
        <StyledFormWrapper>
          <StyledForm action="">
            <h4>Sort By Price</h4>
            <label htmlFor="sortPrice">
              <input
                className="form-checkbox-field"
                type="radio"
                name="sort"
                value="HIGH_TO_LOW_PRICE"
              />
              High to Low
            </label>
            <label htmlFor="sortPrice">
              <input
                className="form-checkbox-field"
                type="radio"
                name="sort"
                value="LOW_TO_HIGH_PRICE"
              />
              Low to High
            </label>
          </StyledForm>
          <StyledForm action="">
            <h4>Sort By Category</h4>
            <label htmlFor="">
              <input className="form-checkbox-field" type="checkbox" />
              Category1
            </label>
            <label htmlFor="">
              <input className="form-checkbox-field" type="checkbox" />
              Category1
            </label>
            <label htmlFor="">
              <input className="form-checkbox-field" type="checkbox" />
              Category1
            </label>
            <label htmlFor="">
              <input className="form-checkbox-field" type="checkbox" />
              Category1
            </label>
          </StyledForm>
          <StyledForm action="">
            <h4>Sort By Ranking</h4>
            <label htmlFor="">
              <input className="form-checkbox-field" type="checkbox" />4 star
              and above
            </label>
            <label htmlFor="">
              <input className="form-checkbox-field" type="checkbox" />3 star
              and above
            </label>
            <label htmlFor="">
              <input className="form-checkbox-field" type="checkbox" />2 star
              and above
            </label>
            <label htmlFor="">
              <input className="form-checkbox-field" type="checkbox" />1 star
              and above
            </label>
          </StyledForm>
        </StyledFormWrapper>
      </StyledSideNav>
    </aside>
  )
}
export default SideNav

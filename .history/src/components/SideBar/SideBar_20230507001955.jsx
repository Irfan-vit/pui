import styled from 'styled-components'

import { FaBars, FaWindowClose, FaStream } from 'react-icons/fa'

const StyledSideNavWrapper = styled.div`
  > aside > a {
    font-size: var(--font-lg);
    position: absolute;
    @media (min-width: 550px) {
      display: none;
    }
  }
`

const StyledSideNav = styled.nav`
  background-color: ${(props) => props.theme.offSetBg};
  z-index: 2;
  @media (max-width: 550px) {
    display: none;
    :target {
      display: block;
    }
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  /* margin-top: 1rem; */
  @media (max-width: 550px) {
  }
`

const StyledFormWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-content: center;
  color: ${(props) => props.theme.offSetText};
`

const StyledMobileNavIcons = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  @media (min-width: 550px) {
    display: none;
  }
  > a {
    margin-left: 1rem;
    font-size: var(--font-lg);
    color: green;
  }
`

const SideNav = () => {
  return (
    <StyledSideNavWrapper>
      <aside>
        <a href="#main-menu">
          <FaBars />
        </a>
        <StyledSideNav id="main-menu">
          <StyledMobileNavIcons>
            <a href="">
              <FaStream />
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
    </StyledSideNavWrapper>
  )
}
export default SideNav

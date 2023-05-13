import styled from 'styled-components'

import { FaBars, FaWindowClose, FaStream } from 'react-icons/fa'

const StyledSideNavWrapper = styled.div`
  background-color: ${(props) => props.theme.offSetBg};
  > aside > a {
    
  }
`

const StyledSideNav = styled.nav`
  @media (max-width: 550px) {
    display: none;
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

const SideNav = () => {
  return (
    <StyledSideNavWrapper>
      <aside>
        <a href="#main-menu">
          <FaBars />
        </a>
        <StyledSideNav>
          <div>
            <a href="#">
              <FaWindowClose />
            </a>
            <a href="">
              <FaStream />
            </a>
          </div>
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

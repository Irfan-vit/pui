import styled from 'styled-components'

import { FaBars, FaWindowClose, FaStream } from 'react-icons/fa'

const StyledAsideWrapper = styled.div`
  > aside > a {
    font-size: var(--font-lg);
    position: absolute;
    /* top: 0; */
    /* z-index: -1; */
    @media (min-width: 550px) {
      display: none;
    }
  }
`

const StyledSideNav = styled.nav`
  background-color: ${(props) => props.theme.offSetBg};
  @media (max-width: 550px) {
    position: absolute;
    width: 100%;
    /* height: 100vh; */
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
  /* height: 100vh; */
`

const StyledMobileNavIcons = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  @media (min-width: 550px) {
    display: none;
  }
  > a {
    margin: 0 1rem;
    font-size: var(--font-lg);
    color: green;
  }
`

const StyledSideNavWrapper = styled.div``

const SideNav = () => {
  return (
    <aside>
      <ul>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
          
        </li>
        <StyledForm action="">
          <h4>Sort By Ranking</h4>
          <label htmlFor="">
            <input className="form-checkbox-field" type="checkbox" />4 star and
            above
          </label>
          <label htmlFor="">
            <input className="form-checkbox-field" type="checkbox" />3 star and
            above
          </label>
          <label htmlFor="">
            <input className="form-checkbox-field" type="checkbox" />2 star and
            above
          </label>
          <label htmlFor="">
            <input className="form-checkbox-field" type="checkbox" />1 star and
            above
          </label>
        </StyledForm>
      </ul>
    </aside>
  )
}
export default SideNav

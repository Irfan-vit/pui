import styled from 'styled-components'

import Select from '../Select/Select'
import { FaBars, FaWindowClose, FaStream } from 'react-icons/fa'

const StyledSideNavWrapper = styled.div`
  background-color: ${(props) => props.theme.offSetBg};
`

const StyledSideNav = styled.nav``

const StyledForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  min-height: 20vh;
  /* justify-content: space-around; */
  ali
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
          <div>
            <StyledForm action="">
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
          </div>
        </StyledSideNav>
      </aside>
    </StyledSideNavWrapper>
  )
}
export default SideNav

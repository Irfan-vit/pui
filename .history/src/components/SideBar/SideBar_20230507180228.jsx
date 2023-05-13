import styled from 'styled-components'

import { FaBars, FaWindowClose, FaStream } from 'react-icons/fa'

const StyledForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: fl;
  text-align: left;
  min-width: 10vw;
  @media (max-width: 550px) {
  }
`
const StyledAside = styled.div`
  /* position: fixed; */
  /* background-color: ${(props) => props.theme.offSetBg}; */
`

const SideNav = () => {
  return (
    <StyledAside>
      <div>
        <a href="">
          <FaBars />
        </a>
      </div>
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
        </li>
      </ul>
    </StyledAside>
  )
}
export default SideNav

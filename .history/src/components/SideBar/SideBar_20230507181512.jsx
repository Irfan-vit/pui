import styled from 'styled-components'

import { FaBars, FaWindowClose, FaStream } from 'react-icons/fa'

const StyledForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  /* justify-content: center;
  align-items: flex-start;
  align-content: center; */
  text-align: left;
  > label > input > span {
    /* color: ${(props) => {
      props.theme.primaryText
    }}; */
    color: red;
  }
  @media (max-width: 550px) {
  }
`
const StyledAside = styled.div`
  /* position: fixed; */
  /* background-color: ${(props) => props.theme.offSetBg}; */
  > ul {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    align-content: center;
    > li {
      list-style-type: none;
      margin: 1rem 0;
    }
  }
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
              <span>High to Low</span>
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

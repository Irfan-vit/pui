import styled from 'styled-components'

import { FaBars, FaWindowClose, FaStream } from 'react-icons/fa'

const StyledForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  /* justify-content: center;
  align-items: flex-start;
  align-content: center; */
  text-align: left;
  > h4 {
    color: ${(props) => props.theme.PrimaryHeading};
  }
  > label {
    color: ${(props) => props.theme.primaryText};
  }
  > label > span {
    margin-left: var(--spacing-unit);
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
      /* margin: 1rem 0; */
    }
    > li * {
      margin-top: 0.5rem;
    }
  }
`

const SideNav = () => {
  return (
    <StyledAside>
      {/* <div>
        <a href="">
          <FaBars />
        </a>
      </div> */}
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
              <span>Low to High</span>
            </label>
          </StyledForm>
        </li>
        <hr />
        <li>
          <StyledForm action="">
            <h4>Sort By Category</h4>
            <label htmlFor="">
              <input className="form-checkbox-field" type="checkbox" />
              <span>Category1</span>
            </label>
            <label htmlFor="">
              <input className="form-checkbox-field" type="checkbox" />
              <span>Category1</span>
            </label>
            <label htmlFor="">
              <input className="form-checkbox-field" type="checkbox" />
              <span>Category1</span>
            </label>
            <label htmlFor="">
              <input className="form-checkbox-field" type="checkbox" />
              <span>Category1</span>
            </label>
          </StyledForm>
        </li>
        <li>
          <StyledForm action="">
            <h4>Sort By Ranking</h4>
            <label htmlFor="">
              <input className="form-checkbox-field" type="checkbox" />
              <span>4 star and above</span>
            </label>
            <label htmlFor="">
              <input className="form-checkbox-field" type="checkbox" />
              <span>3 star and above</span>
            </label>
            <label htmlFor="">
              <input className="form-checkbox-field" type="checkbox" />
              <span>2 star and above</span>
            </label>
            <label htmlFor="">
              <input className="form-checkbox-field" type="checkbox" />
              <span>1 star and above</span>
            </label>
          </StyledForm>
        </li>
      </ul>
    </StyledAside>
  )
}
export default SideNav

import styled from 'styled-components'

import { FaBars, FaWindowClose, FaStream } from 'react-icons/fa'
import SideNavToggle from '../Floats/SideNavToggle'

const StyledForm = styled.form`
  display: flex;
  flex-flow: column wrap;
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
  /* @media (max-width: 550px) {
    display: none;
  } */
`
const StyledAside = styled.div`
  @media (max-width: 1000px) {
    position: fixed;
    top: 0;
    height: 100%;
    width: 25%;
    background-color: ${(props) => props.theme.offSetBg};
    display: none;
    :target {
      display: block;
    }
  }
  /* background-color: ${(props) => props.theme.offSetBg}; */
  > div {
    display: none;
    @media (max-width: 1000px) {
      display: block;
      position: fixed;
      top: 94%;
    }
  }
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
      margin-bottom: 0.5rem;
    }
  }
`

const SideNav = () => {
  return (
    <>
      <a href="#main-menu">toggle</a>
      <StyledAside id="main-menu">
        <div>
          {/* <a href="#main-menu">
            <SideNavToggle />
          </a> */}
        </div>
        <ul>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h4 style={{ textAlign: 'left' }}>
              <a href=""></a>
            </h4>
            <h4 style={{ textAlign: 'right' }}>Clear</h4>
          </div>
          <li>
            <hr
              style={{
                borderTop: '1px solid #a9b1ba',
              }}
            />
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
          <li>
            <hr
              style={{
                borderTop: '1px solid #a9b1ba',
              }}
            />
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
            <hr
              style={{
                borderTop: '1px solid #a9b1ba',
              }}
            />
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
    </>
  )
}
export default SideNav

import styled from 'styled-components'

import SideNavToggle from '../Floats/SideNavToggle'
import SideNavClose from '../Floats/SideNavClose'

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
`
const StyledAside = styled.div`
  margin-top: 15vh;
  z-index: 0;
  @media (max-width: 550px) {
    margin-top: 25vh;
  }
  @media (max-width: 1000px) {
    z-index: 2;
    position: fixed;
    top: 0;
    height: 100%;
    width: 200px;
    background-color: ${(props) => props.theme.primaryBg};
    display: none;
    :target {
      display: block;
    }
  }
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
    }
    > li * {
      margin-bottom: 0.5rem;
    }
    > li:last-child {
      margin-top: auto;
      color: red;
    }
  }
`
const SideToggle = styled.a`
  z-index: 1;
  display: none;
  @media (max-width: 1000px) {
    display: block;
    position: fixed;
    bottom: 0;
  }
`

const SideToggleClose = styled.a`
  z-index: 1;
  display: none;
  @media (max-width: 1000px) {
    display: block;
    position: fixed;
    top: 15vh;
    left: 200px;
  }
  @media (max-width: 550px) {
    
  }
`

const SideNav = () => {
  return (
    <>
      <SideToggle href="#main-menu">
        <SideNavToggle />
      </SideToggle>
      <StyledAside id="main-menu">
        <ul>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h4 style={{ textAlign: 'left' }}>Form</h4>
            <h4 style={{ textAlign: 'right' }}>
              <a href="#">Clear</a>
            </h4>
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
          <li>
            <SideToggleClose href="#">
              <SideNavClose />
            </SideToggleClose>
          </li>
        </ul>
      </StyledAside>
    </>
  )
}
export default SideNav

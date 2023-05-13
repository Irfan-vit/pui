import SideNavToggle from '../animations/Floats/SideNavToggle'
import SideNavClose from '../animations/Floats/SideNavClose'

import { useFilterProducts } from '../../context/filterProductsContext'

// import {
//   StyledSideToggle,
//   StyledFormHeader,
//   StyledForm,
//   StyledAside,
//   StyledSideToggleClose,
//   Hr,
// } from './SideBarStyles'

import styled from 'styled-components'

const StyledSideToggle = styled.a`
  z-index: 1;
  display: none;
  @media (max-width: 900px) {
    display: block;
    position: fixed;
    bottom: 0;
  }
`

const StyledFormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.higilight};
  > * > a {
    text-decoration: none;
    color: ${(props) => props.theme.higilight};
    text-decoration-line: underline;
    text-underline-offset: 2px;
    :hover,
    :active,
    :focus {
      color: ${(props) => props.theme.PrimaryHeading};
      text-decoration-line: underline;
      text-decoration-style: line;
      text-decoration-color: ${(props) => props.theme.PrimaryHeading};
      text-underline-offset: 2px;
    }
  }
  > :first-child {
    text-align: left;
  }
  > :last-child {
    text-align: right;
  }
`

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
  padding: 0 1rem;
  z-index: 0;
  @media (max-width: 900px) {
    margin-top: 9rem;
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
    @media (max-width: 900px) {
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
  }
`

const StyledSideToggleClose = styled.a`
  z-index: 1;
  display: none;
  @media (max-width: 900px) {
    display: block;
    position: fixed;
    top: 9rem;
    left: 200px;
  }
`

const Hr = styled.hr`
  border-top: '1px solid #a9b1ba';
`

const SideNav = () => {
  const { filterDispatch } = useFilterProducts()
  return (
    <>
      <StyledSideToggle href="#main-menu">
        <SideNavToggle />
      </StyledSideToggle>
      <StyledAside id="main-menu">
        <ul>
          <StyledFormHeader>
            <h4>Form</h4>
            <h4>
              <a href="#">Clear</a>
            </h4>
          </StyledFormHeader>
          <li>
            <Hr />
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
            <Hr />
            <StyledForm action="">
              <h4>Sort By Category</h4>
              <label htmlFor="">
                <input
                  className="form-checkbox-field"
                  type="checkbox"
                  onChange={() => filterDispatch({ type: 'track' })}
                />
                <span>Track</span>
              </label>
              <label htmlFor="">
                <input
                  className="form-checkbox-field"
                  type="checkbox"
                  onChange={() => filterDispatch({ type: 'sports' })}
                />
                <span>Sports</span>
              </label>
              <label htmlFor="">
                <input
                  className="form-checkbox-field"
                  type="checkbox"
                  onChange={() => filterDispatch({ type: 'casual' })}
                />
                <span>Casual</span>
              </label>
              <label htmlFor="">
                <input
                  className="form-checkbox-field"
                  type="checkbox"
                  onChange={() => filterDispatch({ type: 'fitness' })}
                />
                <span>Fitness</span>
              </label>
            </StyledForm>
          </li>
          <li>
            <Hr />
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
            <StyledSideToggleClose href="#">
              <SideNavClose />
            </StyledSideToggleClose>
          </li>
        </ul>
      </StyledAside>
    </>
  )
}
export default SideNav

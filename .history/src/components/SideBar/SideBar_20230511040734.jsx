import styled from 'styled-components'

import SideNavToggle from '../animations/Floats/SideNavToggle'
import SideNavClose from '../animations/Floats/SideNavClose'

import { useFilterProducts } from '../../context/filterProductsContext'

import {
  StyledSideToggle,
  StyledFormHeader,
  StyledForm,
  StyledAside,
  StyledSideToggleClose,
} from './SideBarStyles'

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

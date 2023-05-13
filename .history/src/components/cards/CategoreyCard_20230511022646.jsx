import styled from 'styled-components'

import {StyledFigure, StyledLinkWr}

const StyledFigure = styled.figure`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  > div {
    display: grid;
    grid-column: 1/2;
    grid-row: 1/3;
    > img {
      width: 0;
      height: 0;
      min-height: 25rem;
      min-width: 100%;
    }
  }
  > figcaption {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    grid-column: 1/2;
    grid-row: 1/3;
    background-image: linear-gradient(
      rgba(232, 205, 255, 0.507),
      rgba(193, 175, 241, 0.9)
    );
    > h2 {
      color: ${(props) => props.theme.offSetText};
      font-family: var(--font-family-heading);
      font-size: var(--font-xxl);
      font-weight: var(--font-weight-strong);
    }
  }
  :hover {
    grid-template-columns: 2fr;
  }
`

const StyledLinkWrapper = styled.a`
  text-decoration: none;
`

const CategoreyCard = (props) => {
  return (
    <>
      <StyledLinkWrapper href="#">
        <StyledFigure>
          <div>
            <img src={props.imgSrc} alt="shoe categories" />
          </div>
          <figcaption>
            <h2>{props.categoryName.toUpperCase()}</h2>
          </figcaption>
        </StyledFigure>
      </StyledLinkWrapper>
    </>
  )
}

export default CategoreyCard

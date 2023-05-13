import styled from 'styled-components'

import { Button } from '../buttons/Primary'

const StyledProductCard = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, auto);
  gap: 0 1rem;
  > * {
    grid-column: 2/3;
    margin-top: 0;
  }
  > img {
    grid-column: 1/2;
    grid-row: 1/6;
    object-fit: fill;
    height: 100%;
    width: 100%;
  }

  @media (min-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, auto);
    gap: 0 1em;
    > * {
      grid-column: 1/2;
    }
    > img {
      grid-column: 1/2;
      /* margin-bottom: 1rem; */
      /* object-fit: fill; */
      max-height: 150px;
      max-width: 250px;
      > img {
        /* width: 0; */
        /* height: 0; */
        /* min-height: 13rem; */
        /* min-width: 100%; */
      }
    }
  }
`

const ProductCard = (props) => {
  return (
    <StyledProductCard>
      <h4>{props.title}</h4>
      <h3>Nike Air Max</h3>
      {/* <section> */}
      <img src={props.imgSrc} alt="image" />

      </div>
    </StyledProductCard>
  )
}

export default ProductCard

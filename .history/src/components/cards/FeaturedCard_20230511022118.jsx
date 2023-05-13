import styled from 'styled-components'

import { StyledProductCard } from './styles/CardStyles'

const StyledProductCard = styled.article`
  background-color: #fafafa;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, auto);
  > img {
    grid-column: 1/2;
    height: 100%;
    width: 100%;
    /* height: 25vh;
    width: 32vh; */
  }

  > * {
    grid-column: 2/3;
    margin-top: 0;
  }
  > img {
    grid-column: 1/2;
    grid-row: 1/6;
    object-fit: fill;
  }
`

const FeaturedCard = (props) => {
  return (
    <StyledProductCard>
      <img src={props.imgSrc} alt="image" />
    </StyledProductCard>
  )
}

export default FeaturedCard

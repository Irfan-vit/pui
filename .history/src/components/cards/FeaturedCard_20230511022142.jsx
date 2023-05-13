import styled from 'styled-components'

import { StyledProductCard } from './styles/CardStyles'

const FeaturedCard = (props) => {
  return (
    <StyledProductCard>
      <img src={props.imgSrc} alt="image" />
    </StyledProductCard>
  )
}

export default FeaturedCard

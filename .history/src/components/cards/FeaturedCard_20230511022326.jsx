import styled from 'styled-components'

import { StyledProductCard } from './styles/FeaturedStyles'

const FeaturedCard = (props) => {
  return (
    <StyledProductCard>
      <img src={props.imgSrc} alt="image" />
    </StyledProductCard>
  )
}

export default FeaturedCard

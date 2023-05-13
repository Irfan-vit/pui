import { Link } from 'react-router-dom'
import { StyledProductCard } from './styles/FeaturedStyles'

const FeaturedCard = (props) => {
  return (
    <Link >
      <StyledProductCard>
        <img src={props.imgSrc} alt="image" />
      </StyledProductCard>
    </Link>
  )
}

export default FeaturedCard

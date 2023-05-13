import { Link } from 'react-router-dom'
import { StyledProductCard } from './styles/FeaturedStyles'

const FeaturedCard = (props) => {
  return (
    <Link to=''>
      <StyledProductCard>
        <img src={props.imgSrc} alt="image" />
      </StyledProductCard>
    </Link>
  )
}

export default FeaturedCard

import { Link } from 'react-router-dom'
import { StyledFigure, StyledLinkWrapper } from './styles/CategoryStyles'

const CategoreyCard = (props) => {
  return (
    <>
      <Link to>
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
      </Link>
    </>
  )
}

export default CategoreyCard

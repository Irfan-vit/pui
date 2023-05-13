import { Link } from 'react-router-dom'
import { StyledFigure, StyledLinkWrapper } from './styles/CategoryStyles'
import { useFilterProducts } from '../../context/filterProductsContext'

const CategoreyCard = (props) => {
  const { filterDispatch } = useFilterProducts()
  return (
    <>
      <Link to={'/product'} onClick={() => filterDispatch({ type: ' })}>
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

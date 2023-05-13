import { StyledFigure, StyledLinkWrapper } from './styles/CategoryStyles'
v

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
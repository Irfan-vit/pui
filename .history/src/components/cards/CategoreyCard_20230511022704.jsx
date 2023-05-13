import styled from 'styled-components'

import { StyledFigure, StyledLinkWrapper } from './styles/CategoryStyles'

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

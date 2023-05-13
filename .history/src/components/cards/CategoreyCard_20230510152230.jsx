import styled from 'styled-components'

const StyledFigure = styled.figure``

const CategoreyCard = (props) => {
  return (
    <StyledFigure>
      <img src={props.imgSrc} alt="shoe categories" />
      <figcaption></figcaption>
      <h2></h2>
    </StyledFigure>
  )
}

export default CategoreyCard

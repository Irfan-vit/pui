import styled from 'styled-components'

const StyledFigure = styled.figure`
  display: grid;
  grid-template-columns: ;
  grid-template-rows: repeat(3, auto);

  > img {
    grid-column: 1/2;
    grid-row: 1/3;
  }
  > figcaption {
    grid-column: 1/2;
    grid-row: 2/3;
  }
`

const CategoreyCard = (props) => {
  return (
    <StyledFigure>
      <img src={props.imgSrc} alt="shoe categories" />
      <figcaption>
        <h2></h2>
      </figcaption>
    </StyledFigure>
  )
}

export default CategoreyCard

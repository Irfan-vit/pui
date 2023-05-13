import styled from 'styled-components'

const StyledFigure = styled.figure`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  > div {
    grid-column: span 1;
    grid-row: span 1;
    > img {
      min-width: 100%;
      max-height: 350px;
    }
  }
  > figcaption {
    grid-column: span 1.2;
    grid-row: span 1;
  }
`

const CategoreyCard = (props) => {
  return (
    <StyledFigure>
      <div>
        <img src={props.imgSrc} alt="shoe categories" />
      </div>
      <figcaption>
        <h2>Category</h2>
      </figcaption>
    </StyledFigure>
  )
}

export default CategoreyCard

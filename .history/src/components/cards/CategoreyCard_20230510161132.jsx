import styled from 'styled-components'

const StyledFigure = styled.figure`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);

  > div {
    grid-column: 1/2;
    grid-row: 1/3;
    background-color: red;
    > img {
      max-width: 100%;
      max
    }
  }
  > figcaption {
    background-color: red;
    grid-column: 1/2;
    grid-row: 2/3;
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

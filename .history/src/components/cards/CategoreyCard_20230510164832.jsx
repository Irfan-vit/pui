import styled from 'styled-components'

const StyledFigure = styled.figure`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  > div {
    display: grid;
    grid-column: 1/2;
    grid-row: 1/3;
    > img {
      width: 0;
      height: 0;
      min-height: 20rem;
      min-width: 100%;
      /* object-fit: cover; */
    }
  }
  > figcaption {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    grid-column: 1/2;
    grid-row: 1/3;
    background-image: linear-gradient(
      rgba(232, 205, 255, 0.507),
      rgba(193, 175, 241, 0.9)
    );
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

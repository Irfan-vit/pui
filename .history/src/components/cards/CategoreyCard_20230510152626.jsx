import styled from 'styled-components'

const StyledFigure = styled.figure`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3,auto);
  . [
    
  ]
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

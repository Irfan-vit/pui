import styled from 'styled-components'

const StyledFigure =  styled.figure``

const CategoreyCard = (props) => {
  return (
    <figure>
      <img src={props.imgSrc} alt="shoe categories" />
      <h2></h2>
    </figure>
  )
}

export default CategoreyCard

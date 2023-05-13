import styled from 'styled-components'
const StyledToastCard = styled.div`
  z-index: 4;

  position: static;
  margin-top: 10px;
  background-color: ${(props) =>
    props.varient === 'error'
      ? 'var(--negative-color)'
      : 'var(--positive-color)'};
`

const StyledToastContainer = styled.div``

export { StyledToastCard, StyledToastContainer }

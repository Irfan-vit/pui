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

const StyledToastContainer = styled.div`
  display: block;
  position: absolute;
  top: 0%;
  right: 0%;
  width: 20%;
  z-index: 999;
`

export { StyledToastCard, StyledToastContainer }

import styled from 'styled-components'
const StyledToastCard = styled.div`
  z-index: 4;

  position: static;
  margin-top: 10px;
  background-color: ${(props) =>
    props.varient === 'error'
      ? 'var(--positive-color)'
      : 'var(--negative-color)'};
`

export { StyledToastCard, StyledSuccessToast, StyledErrorToast }

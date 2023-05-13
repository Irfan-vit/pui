import styled from 'styled-components'
const StyledToastCard = styled.div`
  z-index: 4;
  .toast {
    position: static;
    margin-top: 10px;
  }
  .primary {
    background-color: var(--primary-color);
    color: var(--white-color);
  }
  .secondary {
    background-color: var(--secondary-color);
    color: var(--black-color);
  }
  .danger {
    background-color: var(--danger-color);
    color: var(--white-color);
  }
  .warning {
    background-color: var(--warning-color);
    color: var(--black-color);
  }
  .success {
    background-color: var(--positive-color);
    color: var(--black-color);
  }
`

export { StyledToastCard }

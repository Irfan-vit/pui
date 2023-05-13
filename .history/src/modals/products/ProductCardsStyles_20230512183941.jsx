import styled from 'styled-components'

const StyledProductCardsWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  @media (min-width: 630px) {
    max-width: 1280px;
    display: grid;
    grid-template-columns: repeat(2, minmax(10px, 1fr));
    gap: 0 1rem;
  }
  @media (min-width: 1300px) {
    max-width: 1280px;
    grid-template-columns: repeat(4, minmax(10px, 1fr));
  }
`
export { StyledProductCardsWrapper }

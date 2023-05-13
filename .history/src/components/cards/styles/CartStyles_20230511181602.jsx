import styled from 'styled-components'

const StyledCartCardWrapper = styled.div`
  padding: 1rem;
  margin: 0 auto;
  text-align: center;
  @media (min-width: 550px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    > :first-child {
      flex-basis: 30%;
    }
    > :last-child {
      flex-basis: 70%;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
    }
  }
`

const StyledCartImage = styled.div`
  flex-basis: 30%;
  > div {
    height: 10rem;
    width: 0;

    object-fit: scale-down;
  }
`
export { StyledCartImage, StyledCartCardWrapper }

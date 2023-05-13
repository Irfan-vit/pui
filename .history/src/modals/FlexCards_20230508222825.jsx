import GenericCard from '../components/cards/GenericCard'

import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.footer};
  margin: 0 auto;
`

const Cards = styled.div`
  margin-top: 9.1rem;
  @media (min-width: 550px) {
    margin-top: 9rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1%;
  }
  @media (min-width: 900px) {
    margin-top: 0;
  }
`

const FlexCards = () => {
  return (
    <>
      <Wrapper>
        <Cards>
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
          <GenericCard />
        </Cards>
      </Wrapper>
    </>
  )
}

export default FlexCards

import GenericCard from './GenericCard'

import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.footer};
  margin: 0 auto;
  margin-top: 16vh;
`

const Cards = styled.div`
  margin-top: 16vh;
  @media (min-width: 550px) {
    /* display: flex; */
    /* flex-flow: row wrap; */
    /* justify-content: space-between; */
    /* align-items: center; */
    /* gap: 1%; */
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

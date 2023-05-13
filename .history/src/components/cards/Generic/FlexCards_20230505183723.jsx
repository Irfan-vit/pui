import GenericCard from '../cards/GenericCard'

import styled from 'styled-components'

import Title from '../headings/Title'

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.footer};
  /* max-width: 1200px; */
  margin: 0 auto;
  padding: 1rem;
`

const Cards = styled.div`
  @media (min-width: 550px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1%;
  }
`

const FlexCards = () => {
  return (
    <>
      {/* <Title heading="Featured" /> */}
      <Wrapper>
        <Cards>
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

import GenericCard from './GenericCard'

import styled from 'styled-components'

import HeroProducts from '../../HeroAnimations/HeroProducts'

const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.footer};
  /* max-width: 1200px; */
  margin: 0 auto;
  /* padding: 1rem; */
  @media (max-width: 550px) {
    /* margin-top: 30vh; */
  }
`

const Cards = styled.div`
  margin-top: 25vh;
  @media (min-width: 550px) {
    margin-top: 15vh;
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
        <
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

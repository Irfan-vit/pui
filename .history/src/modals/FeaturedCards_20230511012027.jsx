import GenericCard from '../components/cards/GenericCard'
import FeaturedTitle from '../components/headings/FeaturedTitle'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.offSetBg};
  margin: 0 auto;
  padding: 1rem;
  margin: 1rem 0;
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

const FeaturedCards = () => {
  return (
    <>
      <FeaturedTitle heading="Featured" />
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

export default FeaturedCards

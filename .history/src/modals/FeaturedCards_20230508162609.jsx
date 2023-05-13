import GenericCard from '../components/cards/Generic/GenericCard'
import Example from '../components/headings/LottieHero'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.offSetBg};
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

const StyledLOttie = styled.div`
  height: 8rem;
  width: 13rem;
  margin: 0 auto;
  @media (min-width: 550px) {
    height: 10rem;
    width: 15rem;
  }
  @media (min-width: 900px) {
    height: 10rem;
    width: 15rem;
  }
`

const FeaturedCards = () => {
  return (
    <>
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

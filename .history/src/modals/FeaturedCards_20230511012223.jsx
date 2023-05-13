import GenericCard from '../components/cards/GenericCard'
import FeaturedTitle from '../components/headings/FeaturedTitle'
import styled from 'styled-components'
import useFilteredProducts from '../hooks/useFilteredProducts'

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
  const [results] = useFilteredProducts()
  return (
    <>
      <FeaturedTitle heading="Featured" />
      <Wrapper>
        <Cards>
          <Cards>
            {results.filter((e) => (
              e.isFeatured <GenericCard {...e} key={e._id} />
            ))}
          </Cards>
        </Cards>
      </Wrapper>
    </>
  )
}

export default FeaturedCards

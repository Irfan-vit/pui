import FeaturedTitle from '../components/headings/FeaturedTitle'
import styled from 'styled-components'
import useFilteredProducts from '../hooks/useFilteredProducts'

import FeaturedCard from '../components/cards/FeaturedCard'

const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.offSetBg};
  margin: 0 auto;
  padding: 1rem;
  margin: 1rem 0;
`

const Cards = styled.div`
  @media (min-width: 550px) {
    > * {
      /* flex-basis: 33%; */
    }
  }
  @media (min-width: 1000px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    > * {
      flex-basis: 24%;
    }
  }
`

const FeaturedCards = () => {
  const [results] = useFilteredProducts()
  return (
    <>
      <FeaturedTitle heading="Featured" />
      <Wrapper>
        <Cards>
          {results.map((e) => {
            if (e.isFeatured) {
              return <FeaturedCard {...e} key={e._id} />
            }
          })}
        </Cards>
      </Wrapper>
    </>
  )
}

export default FeaturedCards

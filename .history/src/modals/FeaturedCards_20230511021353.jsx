import FeaturedTitle from '../components/headings/FeaturedTitle'
import styled from 'styled-components'
import useFilteredProducts from '../hooks/useFilteredProducts'

import FeaturedCard from '../components/cards/FeaturedCard'

const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.offSetBg};
  margin: 0 auto;
`

const Cards = styled.div`
  > * {
    margin: 0.5rem 1rem;
  }

  @media (min-width: 550px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    > * {
      flex-basis: 45%;
    }
  }
  @media (min-width: 1000px) {
    > * {
      flex-basis: 23%;
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

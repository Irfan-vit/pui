import FeaturedTitle from '../../components/headings/FeaturedTitle'
import styled from 'styled-components'
import useFilteredProducts from '../../hooks/useFilteredProducts'

import FeaturedCard from '../../components/cards/FeaturedCard'

import 

const StyledCards = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.offSetBg};
  margin: 0 auto;
  > * {
    margin: 1%;
  }

  @media (min-width: 550px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    > * {
      flex-basis: 48%;
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
      <StyledCards>
        {results.map((e) => {
          if (e.isFeatured) {
            return <FeaturedCard {...e} key={e._id} />
          }
        })}
      </StyledCards>
    </>
  )
}

export default FeaturedCards

import FeaturedTitle from '../../components/headings/FeaturedTitle'
import styled from 'styled-components'
import useFilteredProducts from '../../hooks/useFilteredProducts'

import FeaturedCard from '../../components/cards/FeaturedCard'

import { StyledCards } from './FeaturedCardStyles'

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

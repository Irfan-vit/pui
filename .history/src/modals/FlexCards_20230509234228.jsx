import GenericCard from '../components/cards/GenericCard'

import styled from 'styled-components'

import useFilteredProducts from '../hooks/useFilteredProducts'

const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.footer};
  margin: 0 auto;
`

const Cards = styled.div`
  @media (min-width: 550px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
  }
  gap
  @media (min-width: 900px) {
    margin-top: 0;
  }
`

const FlexCards = () => {
  const [results] = useFilteredProducts()
  console.log(results, 'this is results')
  return (
    <>
      <Wrapper>
        <Cards>
          {results.map((e) => (
            <GenericCard {...e} key={e._id} />
          ))}
        </Cards>
      </Wrapper>
    </>
  )
}

export default FlexCards

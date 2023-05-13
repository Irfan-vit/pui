import GenericCard from '../components/cards/GenericCard'

import styled from 'styled-components'

import useFilteredProducts from '../hooks/useFilteredProducts'

import {}

const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.footer};
  margin: 0 auto;
`

const Cards = styled.div`
  margin-top: 9.3rem;
  @media (min-width: 550px) {
    margin-top: 9rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1%;
  }
  @media (min-width: 900px) {
    margin-top: 0;
  }
`

const FlexCards = () => {
  const [results, query] = useFilteredProducts()
  console.log(results, 'this is results')
  if (query.isLoading) return <h1>loading</h1>
  if (query.isSuccess)
    return (
      <>
        <Wrapper>
          <Button></Button>
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
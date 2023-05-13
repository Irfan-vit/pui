import { useQuery } from '@tanstack/react-query'

import fettchPro

import styled from 'styled-components'

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

async function getProducts() {
  const {
    data: { products },
  } = await fetchProducts('https://sprint/sprint-api/v1/products')
  return products
}

const FlexCards = () => {
  const products = useQuery(['products'], getProducts)
  return (
    <>
      <Wrapper>
        <Cards></Cards>
      </Wrapper>
    </>
  )
}

export default FlexCards

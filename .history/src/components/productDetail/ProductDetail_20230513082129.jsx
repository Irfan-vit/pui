import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFilteredProducts from '../../hooks/useFilteredProducts'
import ProductDetailCard from './ProductDetailCard'
import { useProducts } from '../../context/getProductsContext'
import NavBar from '../navBar/NavBar'
import FeaturedCards from '../../modals/featured/FeaturedCards'
import Footer from '../footer/Footer'
import ScrollDown from '../animations/HeroAnimations/ScrollDown'

const StyledProductDetailWrapper = styled.div`
  box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.3);
  background-color: #fafafa;
  margin-top: 10rem;
  max-width: 550px;
  margin: 0 auto;
  position: relative;
  @media (min-width: 850px) {
    position: relative;
    max-width: 850px;
    display: flex;
    /* flex-flow: row wrap; */
    justify-content: space-between;
    align-content: center;
    /* margin: 0 auto; */
    margin-top: 30vh;
    padding: 2rem;
  }
`

const StyledDeaturedCardsWrapper = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  margin-bottom: 10%;
  margin-top: 10%;
`

const StyledScrillDown = styled.div`
  > * {
    background-color: red;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    position: absolute;
    righr
  }
`

const ProductDetail = () => {
  const { productsQuery } = useProducts()
  const [data, setData] = useState({})
  const { productId } = useParams()
  useEffect(() => {
    setData(productsQuery?.data?.find((item) => item._id === productId) ?? [])
  }, [])
  if (productsQuery.isLoading) return <h1>Loading...</h1>
  if (productsQuery.isSuccess)
    return (
      <>
        <NavBar />
        <StyledProductDetailWrapper>
          <ProductDetailCard data={data} />
        </StyledProductDetailWrapper>
        <StyledScrillDown>
          <ScrollDown />
        </StyledScrillDown>
        <StyledDeaturedCardsWrapper>
          <FeaturedCards />
        </StyledDeaturedCardsWrapper>
        <Footer />
      </>
    )
}

export default ProductDetail

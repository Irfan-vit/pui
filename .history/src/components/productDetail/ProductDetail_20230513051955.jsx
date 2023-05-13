import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFilteredProducts from '../../hooks/useFilteredProducts'
import ProductDetailCard from './ProductDetailCard'
import { useProducts } from '../../context/getProductsContext'
import NavBar from '../navBar/NavBar'

const StyledProductDetailWrapper = styled.div`
  box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.3);
  background-color: #fafafa;
  @media (min-width: 850px) {
    position: relative;
    max-width: 850px;
    display: flex;
    /* flex-flow: row wrap; */
    justify-content: space-between;
    align-content: center;
    margin: 0 auto;
    margin-top: 25vh;
    padding: 2rem;
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
      <StyledProductDetailWrapper>
        <NavBar />
        <ProductDetailCard data={data} />
      </StyledProductDetailWrapper>
    )
}

export default ProductDetail

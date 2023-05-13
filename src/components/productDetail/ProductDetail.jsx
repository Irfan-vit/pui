import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductDetailCard from './ProductDetailCard'
import { useProducts } from '../../context/getProductsContext'
import NavBar from '../navBar/NavBar'

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
    justify-content: space-between;
    align-content: center;
    margin-top: 30vh;
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
      <>
        <NavBar />
        <StyledProductDetailWrapper>
          <ProductDetailCard data={data} />
        </StyledProductDetailWrapper>
      </>
    )
}

export default ProductDetail

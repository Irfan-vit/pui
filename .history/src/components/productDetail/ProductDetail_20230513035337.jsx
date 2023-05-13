import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFilteredProducts from '../../hooks/useFilteredProducts'
import ProductDetailCard from './ProductDetailCard'
import { useProducts } from '../../context/getProductsContext'

const StyledProductDetailWrapper = styled.div`
  @media (min-width: 550px) {
    max-width: 1280px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
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
        <ProductDetailCard data={data} />
      </StyledProductDetailWrapper>
    )
}

export default ProductDetail

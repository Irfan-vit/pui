import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFilteredProducts from '../../hooks/useFilteredProducts'
import ProductDetailCard from './ProductDetailCard'
import { useProducts } from '../../context/getProductsContext'

const StyledProductDetailWrapper = styled.div``
const StyledProductDetailImage = styled.div``
const StyledProductDetail = styled.div``

const ProductDetail = () => {
  const { productsQuery } = useProducts()
  const [data, setData] = useState({})
  const { productId } = useParams()
  useEffect(() => {
    setData(products.find((item) => item._id === productId))
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

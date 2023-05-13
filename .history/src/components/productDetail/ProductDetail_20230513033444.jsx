import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFilteredProducts from '../../hooks/useFilteredProducts'
import ProductDetailCard from './ProductDetailCard'

const StyledProductDetailWrapper = styled.div``
const StyledProductDetailImage = styled.div``
const StyledProductDetail = styled.div``

const ProductDetail = ({
  _id,
  title,
  price,
  categoryName,
  imgSrc,
  rating,
  inCart,
  inWishlist,
}) => {
  const [data, setData] = useState({})
  const [results] = useFilteredProducts()
  const { productId } = useParams()
  useEffect(() => {
    setData(results.find((item) => item._id === productId))
  }, [])
  console.log(data)
  return (
    <StyledProductDetailWrapper>
      <ProductDetailCard
        key={_id}
        _id={_id}
        price={price}
        title={title}
        imgSrc={imgSrc}
        rating={rating}
        categoryName={categoryName}
      />
    </StyledProductDetailWrapper>
  )
}

export default ProductDetail

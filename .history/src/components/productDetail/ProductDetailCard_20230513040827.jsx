import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFilteredProducts from '../../hooks/useFilteredProducts'

const StyledProductDetailImage = styled.div``
const StyledProductDetail = styled.div``

const ProductDetailCard = ({
  data: { _id, price, imgSrc, title, categoryName, rating },
}) => {
  const [data, setData] = useState({})
  const [results] = useFilteredProducts()
  const { productId } = useParams()
  useEffect(() => {
    setData(results.find((item) => item._id === productId))
  }, [])
  console.log(data)
  return (
    <>
      <StyledProductDetailImage>
        <img src={imgSrc} alt="" />
      </StyledProductDetailImage>
      <StyledProductDetail>
        <h2>{title}</h2>
        <article className="terms">
          <p>
            The <strong>{title}</strong> shoes are suitable for
            <strong> {categoryName} </strong>.
          </p>
          <p>
            We guarentee the Products at <strong>Sprint Store </strong> are 100%
            Original.
          </p>
          <p>All Products brought from us are eleigible for 7 days return.</p>
        </article>
        <h3>Product Information</h3>
        <hr />
        <div>
          <p>Price:</p>
          <p>₹{price}</p>
        </div>
        <div>
          <p>Delivery charges:</p>
          <p>₹499</p>
        </div>
        <hr />
        <div class="order-details">
          <h3>Total:</h3>
          <h3>₹{parseInt(price) + parseInt('499')}</h3>
        </div>
        <hr />
      </StyledProductDetail>
    </>
  )
}

export default ProductDetailCard

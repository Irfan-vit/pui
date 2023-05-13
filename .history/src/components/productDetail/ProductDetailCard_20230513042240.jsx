import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFilteredProducts from '../../hooks/useFilteredProducts'

const StyledProductDetailImage = styled.div`
  /* position: absolute;
  top: -10%;
  left: -10%; */
  > img {
    max-width: 100%;
    max-height: 100%;
  }
`
const StyledProductDetail = styled.div`
  > h2,
  strong {
    color: ${(props) => props.theme.PrimaryHeading};
  }
  > article > p {
    color: ${(props) => props.theme.primaryText};
  }
`

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
        <p>Price: ₹{price}</p>

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
      </StyledProductDetail>
    </>
  )
}

export default ProductDetailCard

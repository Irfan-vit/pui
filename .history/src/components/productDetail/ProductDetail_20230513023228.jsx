import styled from 'styled-components'

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
  return (
    <StyledProductDetailWrapper>
      <StyledProductDetailImage>
        <img src={imgSrc} alt="" />
      </StyledProductDetailImage>
      <StyledProductDetail>
        <h2>Nike Air</h2>
        <article className="terms">
          <p>
            The <strong>title</strong> shoes are suitable for
            <strong> categoryName </strong>.
          </p>
          <p>
            We guarentee the Products at <strong>Sprint Store </strong> are 100%
            Original.
          </p>
          <p>All Products brought from us are eleigible for 7 days return.</p>
        </article>
      </StyledProductDetail>
    </StyledProductDetailWrapper>
  )
}

export default ProductDetail

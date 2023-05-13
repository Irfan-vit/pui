import styled from 'styled-components'

const StyledProductDetailWrapper = styled.div``
const StyledProductDetailImage = styled.div``
const StyledProductDetail = styled.div``

const ProductDetail = () => {
  return (
    <StyledProductDetailWrapper>
      <StyledProductDetailImage>
        <img src="" alt="" />
      </StyledProductDetailImage>
      <StyledProductDetail>
        <h2>Nike Air</h2>
        <article className="terms">
          <div>
            The <strong>title}</strong> shoes are suitable for
            <strong> {categoryName}</strong>.
          </div>
          <div>
            We guarentee the Products at <strong>Sprint Store </strong> are 100%
            Original.
          </div>
          <p>All Products brought from us are eleigible for 7 days return.</p>
        </article>
      </StyledProductDetail>
    </StyledProductDetailWrapper>
  )
}

export default ProductDetail

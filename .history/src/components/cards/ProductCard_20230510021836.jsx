import styled from 'styled-components'

const StyledProductCard = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, auto);
  gap: 0 0.2rem;
  > * {
    grid-column: 2/3;
    margin-top: 0;
  }
  > img {
    grid-column: 1/2;
    grid-row: 1/6;
    /* height: 100%; */
    object-fit: fill;
    height: 100%;
  }
  @media (min-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, auto);
    gap: 0 1em;
    > * {
      grid-column: 1/2;
    }
    > img {
      grid-column: 1/2;
      margin-bottom: 1rem;
      object-fit: contain;
    }
  }
`

const ProductCard = (props) => {
  return (
    <StyledProductCard>
      <h4>{props.title}</h4>
      <h3>Nike Air Max</h3>
      <img src={} alt="image" />
      <div className="about">
        <h6 className="product-description">Sustainable Materials</h6>
        <p className="product-price">₹ 8,995</p>
        <span>available in colors</span>
        <div className="colors">
          <div className="blue-unit"></div>
          <div className="green-unit"></div>
          <div className="red-unit"></div>
        </div>
      </div>
      <p>
        <a href="https://add/link" target="_blank" rel="noreferrer">
          <button className="btn" id="default-btn">
            Add to Cart
          </button>
        </a>
      </p>
      <p>
        {' '}
        <a href="https://add/link" target="_blank" rel="noreferrer">
          <button className="btn btn-otl-default">Save to Wishlist</button>
        </a>
      </p>
    </StyledProductCard>
  )
}

export default ProductCard

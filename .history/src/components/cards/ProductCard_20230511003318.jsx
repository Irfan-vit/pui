import styled from 'styled-components'

import { Button } from '../buttons/Primary'

import { Rating } from 'react-simple-star-rating'

const StyledProductCard = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, auto);
  gap: 0 1rem;
  > * {
    grid-column: 2/3;
    margin-top: 0;
  }
  > img {
    grid-column: 1/2;
    grid-row: 1/6;
    object-fit: fill;
    height: 100%;
    width: 100%;
  }

  > h3 {
    font-size: var(--font-lg);
    font-weight: var(--font-weight-bold);
    color: ${(props) => props.theme.PrimaryHeading};
  }

  > div > p {
    color: ${(props) => props.theme.primaryText};
    font-size: var(--font-sm);
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
      height: 0;
      width: 0;
      min-height: 15rem;
      min-width: 15rem;
    }
  }
`

const ProductCard = (props) => {
  return (
    <StyledProductCard>
      <h3>{props.title}</h3>
      <p>{props.categoryName}</p>
      <img src={props.imgSrc} alt="image" />
      <div className="about">
        <p className="product-price">₹ {props.price}</p>
        <Rating initialValue={props.rating} transition size={20} />
        <p>
          <a href="https://add/link" target="_blank" rel="noreferrer">
            <Button className="btn" id="default-btn">
              Add to Cart
            </Button>
          </a>
        </p>
        <p>
          <a href="https://add/link" target="_blank" rel="noreferrer">
            <Button varient="outline" className="btn btn-otl-default">
              Save to Wishlist
            </Button>
          </a>
        </p>
      </div>
    </StyledProductCard>
  )
}

export default ProductCard

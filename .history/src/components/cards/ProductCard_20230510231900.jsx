import styled from 'styled-components'

import { Button } from '../buttons/Primary'

import { Rating } from 'react-simple-star-rating'

import {
  MdOutlineSentimentDissatisfied,
  MdOutlineSentimentNeutral,
  MdOutlineSentimentSatisfied,
  MdOutlineSentimentVeryDissatisfied,
  MdOutlineSentimentVerySatisfied,
} from 'react-icons/md'

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
      <h4>{props.title}</h4>
      <h3>Nike Air Max</h3>
      <div></div>
      <img src={props.imgSrc} alt="image" />
      <div className="about">
        <p className="product-price">₹ 8,995</p>
        <Rating initialValue={props.rating} readonly sixe={20} />
        <p>
          <a href="https://add/link" target="_blank" rel="noreferrer">
            <Button className="btn" id="default-btn">
              Add to Cart
            </Button>
          </a>
        </p>
        <p>
          {' '}
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

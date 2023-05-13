import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFilteredProducts from '../../hooks/useFilteredProducts'
import { Button } from '../buttons/Primary'

const StyledProductDetailImage = styled.div`
  @media (min-width: 850px) {
    flex-basis: 90%;
    > img {
      max-width: 100%;
      max-height: 100%;
      position: absolute;
      top: 2em;
      left: -3em;
      filter: saturate(150%) contrast(120%) hue-rotate(10deg)
        drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));
    }
  }
`
const StyledProductDetail = styled.div`
  > h2,
  h3,
  strong {
    color: ${(props) => props.theme.PrimaryHeading};
    font-family: var(--font-family-heading);
  }
  > ul > li {
    color: ${(props) => props.theme.primaryText};
    font-size: var(--font-md);
  }
  > h1 {
    color: ${(props) => props.theme.offSetText};
    font-family: var(--font-family-hero);
    font-size: var(--font-xxxl);
    > span {
      font-size: var(--font-lg);
    }
  }
  @media (min-width: 850px) {
    flex-basis: 50%;
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
        <h1>
          <span>₹</span> {price}
        </h1>
        <ul className="terms">
          <h3>About</h3>
          <li>
            The <strong>{title}</strong> shoes are suitable for
            <strong> {categoryName} </strong>.
          </li>
          <li>
            We guarentee the Products at <strong>Sprint Store </strong> are 100%
            Original.
          </li>
          <li>All Products brought from us are eleigible for 7 days return.</li>
        </ul>
        <Link>
          <Button>Add to cart</Button>
        </Link>
      </StyledProductDetail>
    </>
  )
}

export default ProductDetailCard

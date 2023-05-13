import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFilteredProducts from '../../hooks/useFilteredProducts'
import { Button } from '../buttons/Primary'
import { useCart } from '../../context/cartContext'
import { useWishlist } from '../../context/wishlistContext'
import { useToast } from '../../context/toastContext'

const StyledProductDetailImage = styled.div`
  > img {
    min-width: 100%;
    min-height: 100%;
    max-width: 100%;
    max-height: 100%;
  }
  @media (min-width: 850px) {
    flex-basis: 50%;
    > img {
      min-width: 0%;
      min-height: 0%;
      max-width: 100%;
      max-height: 100%;
      position: absolute;
      top: 1.8em;
      left: -13em;
      filter: saturate(150%) contrast(120%) hue-rotate(10deg)
        drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));
    }
  }
`
const StyledProductDetail = styled.div`
  padding: 2rem;
  > h2,
  h3,
  strong {
    color: ${(props) => props.theme.PrimaryHeading};
    font-family: var(--font-family-heading);
  }
  > ul > li {
    color: ${(props) => props.theme.primaryText};
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
  const { addToCart, cartState } = useCart()
  const { addToWishlist, wishlistState, removeFromWishlist } = useWishlist()
  const { toastDispatch } = useToast()
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
        {cartState.cart.find((item) => item._id === _id) ? (
          <Link to="/cart">
            <Button>Buy Now</Button>
          </Link>
        ) : (
          <Link
            onClick={() => {
              addToCart({
                _id,
                title,
                price,
                categoryName,
                imgSrc,
                rating,
              })
              toastDispatch({
                type: 'ADD_TOAST',
                payload: {
                  _id: _id,
                  message: `${title} Added to Cart`,
                  autoDelete: 3000,
                },
              })
            }}
          >
            <Button>Add to cart</Button>
          </Link>
        )}
        {wishlistState.wishlist.find((item) => item._id === _id) ? (
          <Link
            onClick={() => {
              removeFromWishlist(
                { _id, title, price, categoryName, imgSrc, rating },
                _id,
              )
              toastDispatch({
                type: 'ADD_TOAST',
                payload: {
                  _id: _id,
                  message: `${title} Removed from Wishlist`,
                  autoDelete: 3000,
                  theme: 'error',
                },
              })
            }}
          >
            <Button varient="outline">Remove from Wishlist</Button>
          </Link>
        ) : (
          <Link
            onClick={() => {
              addToWishlist(
                { _id, title, price, categoryName, imgSrc, rating },
                _id,
              )
              toastDispatch({
                type: 'ADD_TOAST',
                payload: {
                  _id: _id,
                  message: `${title} Added to Wishlist`,
                  autoDelete: 3000,
                },
              })
            }}
          >
            <Button varient="outline">Add to Wishlist</Button>
          </Link>
        )}
      </StyledProductDetail>
    </>
  )
}

export default ProductDetailCard

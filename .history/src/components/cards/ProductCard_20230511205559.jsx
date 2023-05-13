import { Button } from '../buttons/Primary'
import { Rating } from 'react-simple-star-rating'
import { StyledProductCard, StyledIcons } from './styles/ProductStyles'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'

import { useCart } from '../../context/cartcontext'

const ProductCard = ({ _id, price, imgSrc, title, rating, categoryName }) => {
  const { addToCart } = useCart()
  return (
    <StyledProductCard>
      <h3>{title}</h3>
      <p>{categoryName}</p>
      <img src={imgSrc} alt="image" />
      <div className="about">
        <p className="product-price">₹ {price}</p>
        <Rating initialValue={rating} transition size={20} />
        <a href="https://add/link" target="_blank" rel="noreferrer">
          <Button varient="outline" className="btn btn-otl-default">
            View Details
          </Button>
        </a>
        <StyledIcons>
          <a
            href="#"
            onClick={() =>
              addToCart({ _id, title, price, imgSrc, rating }, _id)
            }
          >
            <AiOutlineHeart
              onClick={() =>
                addToCart({ _id, title, price, imgSrc, rating }, _id)
              }
            />
          </a>
          <a href="">
            <AiOutlineShoppingCart />
          </a>
        </StyledIcons>
      </div>
    </StyledProductCard>
  )
}

export default ProductCard

const ProductCard = () => {
  return (
    <article>
      <h4>Soft and Smooth</h4>
      <h3>Nike Air Max</h3>
      <img src="https://add/image" alt="image" />
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
        {' '}
        <a href="https://add/link" target="_blank" />
          <button className="btn" id="default-btn">
            Add to Cart
          </button>
        </a>
      </p>
      <p>
        {' '}
        <a href="https://add/link" target="_blank" />
          <button className="btn btn-otl-default">Save to Wishlist</button>
        </a>
      </p>
    </article>
  )
}

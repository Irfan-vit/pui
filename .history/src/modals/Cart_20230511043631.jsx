import NavBar from '../components/navBar/NavBar'
import Footer from '../components/footer/Footer'
import CartCards from './CartCards'

const Cart = () => {
  return (
    <>
      <NavBar />
      <div>
        <CartCards />
      </div>
      <Footer />
    </>
  )
}

export default Cart

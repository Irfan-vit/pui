import styled from 'styled-components'

import CartCards from '../components/cards/CartCard'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

const Cart = () => {
  return (
    <>
      <NavBar />
      <div>
        <CartCard />
      </div>
      <Footer />
    </>
  )
}

export default Cart

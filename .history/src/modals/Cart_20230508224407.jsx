import styled from 'styled-components'

import CartCards from './CategoryCards'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

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

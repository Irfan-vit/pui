import Home from './modals/Home'
import Cart from './modals/Cart'
import Product from './modals/Products'
import { Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Cart />
      <Product />
      <Home />
    </>
  )
}

export default App

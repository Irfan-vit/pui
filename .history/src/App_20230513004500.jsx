import Home from './modals/Home'
import Cart from './modals/Cart'
import Product from './modals/Products'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/" element={<Cart />} />
        <Product />
        
      </Routes>
    </>
  )
}

export default App

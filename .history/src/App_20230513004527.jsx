import Home from './modals/Home'
import Cart from './modals/Cart'
import Product from './modals/Products'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        
      </Routes>
    </>
  )
}

export default App

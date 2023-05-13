import Home from './modals/Home'
import Cart from './modals/Cart'
import Product from './modals/Products'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Product />
        <Home />
      </Routes>
    </>
  )
}

export default App

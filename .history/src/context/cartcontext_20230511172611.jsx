import { createContext, useContext } from 'react'
import { useReducer } from 'react'
import { initialCartState, cartReducer } from '../reducer/cartReducer'
const ProductsContext = createContext()

const cart
Provider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState)
  return (
    <cart
    Context.Provider value={{ cartState, cartDispatch }}>
      {children}
    </cart
    Context.Provider>
  )
}

const usecart
 = () => useContext(cart
    Context)

export { cart
    Provider, usecart
 }

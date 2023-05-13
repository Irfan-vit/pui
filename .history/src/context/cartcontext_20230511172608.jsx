import { createContext, useContext } from 'react'
import { useReducer } from 'react'
import { initialCartState, cartReducer } from '../reducer/cartReducer'
const ProductsContext = createContext()

const Provider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState)
  return (
    <Context.Provider value={{ cartState, cartDispatch }}>
      {children}
    </Context.Provider>
  )
}

const use = () => useContext(Context)

export { Provider, use }

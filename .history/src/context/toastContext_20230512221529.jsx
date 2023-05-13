import { createContext, useContext, useReducer } from 'react'
import { initialReducerState, toastReducer } from '../'
const ToastContext = createContext()

const ToastProvider = ({ children }) => {
  const [toastState, toastDispatch] = useReducer(
    toastReducer,
    initialReducerState,
  )
  return (
    <ToastContext.Provider value={{ toastState, toastDispatch }}>
      {children}
    </ToastContext.Provider>
  )
}

const useToast = () => useContext(ToastContext)

export { ToastProvider, useToast }

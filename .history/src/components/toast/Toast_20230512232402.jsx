import { useState, useEffect } from 'react'
import { useToast } from '../../context/toastContext'
import Example from '../animations/Alerts/Success'
import './Toast.css'

function Toast({ _id, message, autoDelete, theme }) {
  const { toastDispatch } = useToast()
  useEffect(() => {
    setTimeout(() => {
      setDisplay('')
      toastDispatch({ type: 'DELETE_TOAST', payload: _id })
    }, 100000000000)
  }, [])
  const [display, setDisplay] = useState('show')
  return (
    <>
      <div style={{ zIndex: 4,  }} className={`toast success ` + theme} key={_id}>
        <p>{message}</p>
        <Example />
      </div>
    </>
  )
}

export default Toast

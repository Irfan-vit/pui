import { useState, useEffect } from 'react'
import { useToast } from '../../context/toastContext'
import {StyledT}
import './Toast.css'

function Toast({ _id, message, autoDelete }) {
  const { toastDispatch } = useToast()
  useEffect(() => {
    setTimeout(() => {
      setDisplay('')
      toastDispatch({ type: 'DELETE_TOAST', payload: _id })
    }, autoDelete)
  }, [])
  const [display, setDisplay] = useState('show')
  return (
    <>
      <div style={{ zIndex: 4 }} className={`toast success `} key={_id}>
        <h3>{message}</h3>
      </div>
    </>
  )
}

export default Toast

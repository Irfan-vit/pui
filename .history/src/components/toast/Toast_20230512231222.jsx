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
    }, autoDelete)
  }, [])
  const [display, setDisplay] = useState('show')
  return (
    <>
      <div
        style={{ zIndex: 4 }}
        className={`toast ${display} ` + theme}
        key={_id}
      >
        <p>
          <Example />
          {message}
        </p>
      </div>
    </>
  )
}

export default Toast
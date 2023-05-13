import { useState, useEffect } from 'react'
import { useToast } from '../../'
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
        style={{ zIndex: 1 }}
        className={`toast ${display} ` + theme}
        key={_id}
      >
        <p>{message}</p>
      </div>
    </>
  )
}

export default Toast

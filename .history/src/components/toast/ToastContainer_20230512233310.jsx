import React from 'react'
import { useToast } from '../../context/toastContext'
import Toast from './Toast'
import './Toast.css'
function ToastContainer() {
  const { toastState } = useToast()
  return (
    <div className="toast-container">
      {toastState.map(({ _id, message, autoDelete }) => {
        return (
          <Toast
            key={_id}
            _id={_id}
            message={message}
            autoDelete={autoDelete}
          />
        )
      })}
    </div>
  )
}

export default ToastContainer

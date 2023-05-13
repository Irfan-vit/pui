import React from 'react'
import { useToast } from '../../context/toastContext'
import Toast from './Toast'
import {Sty}
import './Toast.css'
function ToastContainer() {
  const { toastState } = useToast()
  return (
    <div className="toast-container">
      {toastState.map(({ _id, message, autoDelete, theme }) => {
        return (
          <Toast
            key={_id}
            _id={_id}
            message={message}
            autoDelete={autoDelete}
            theme={theme}
          />
        )
      })}
    </div>
  )
}

export default ToastContainer

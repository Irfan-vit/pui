import { useState, useEffect } from 'react'
import { useToast } from '../../context/toastContext'
import { StyledToastCard } from './ToastStyles'
import './Toast.css'

function Toast({ _id, message, autoDelete, theme }) {
  const { toastDispatch } = useToast()
  useEffect(() => {
    setTimeout(() => {
      toastDispatch({ type: 'DELETE_TOAST', payload: _id })
    }, autoDelete)
  }, [])
  return (
    <>
      <StyledToastCard varient={'erroe'} key={_id}>
        <h3>{message}</h3>
      </StyledToastCard>
    </>
  )
}

export default Toast

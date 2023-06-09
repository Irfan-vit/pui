import { useToast } from '../../context/toastContext'
import Toast from './Toast'
import { StyledToastContainer } from './ToastStyles'
function ToastContainer() {
  const { toastState } = useToast()
  return (
    <StyledToastContainer className="toast-container">
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
    </StyledToastContainer>
  )
}

export default ToastContainer

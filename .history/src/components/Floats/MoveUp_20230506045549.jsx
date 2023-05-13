import { useLottie, useLottieInteractivity } from 'lottie-react'
import theme from '../../assets/up2.json'

const style = {
  height: '3rem',
  display: 'inline-block',
  cursor: 'pointer',
  position: 'fixed',
  bottom: '0',
  right: '0',
}

const options = {
  animationData: theme,
}

const MoveUp = () => {
  const lottieObj = useLottie(options, style)
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'cursor',
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        type: 'stop',
        frames: [0, 110],
      },
      {
        position: { x: -1, y: -1 },
        type: 'stop',
        frames: [25],
      },
    ],
  })

  return Animation
}

export default MoveUp

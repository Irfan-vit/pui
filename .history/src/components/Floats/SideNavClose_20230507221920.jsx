import { useLottie, useLottieInteractivity } from 'lottie-react'
import theme from '../../assets/close.json'

const style = {
  height: '3rem',
  display: 'block',
  cursor: 'pointer',
  //   position: 'fixed',
  //   top: '0',
  //   right: '0',
}

const options = {
  animationData: theme,
}

const SideNavClose = () => {
  const lottieObj = useLottie(options, style)
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'cursor',
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        type: 'loop',
        frames: [78],
      },
      {
        position: { x: -1, y: -1 },
        type: 'loop',
        frames: [0, 78],
      },
    ],
  })

  return Animation
}

export default SideNavClose

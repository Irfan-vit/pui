import { useLottie, useLottieInteractivity } from 'lottie-react'
import theme from '../../assets/theme.json'

const style = {
  height: 300,
}

const options = {
  animationData: theme,
}

const PlaySegmentsOnHover = () => {
  const lottieObj = useLottie(options, style)
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'cursor',
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        type: 'loop',
        frames: [0, 20]],
      },
      {
        position: { x: -1, y: -1 },
        type: 'stop',
        frames: [20],
      },
    ]
  })

  return Animation
}

export default PlaySegmentsOnHover

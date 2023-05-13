import { useLottie, useLottieInteractivity } from 'lottie-react'
import robotAnimation from './robotAnimation.json'

const style = {
  height: 300,
  border: 3,
}

const options = {
  animationData: robotAnimation,
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
        frames: [45, 60],
      },
      {
        position: { x: -1, y: -1 },
        type: 'stop',
        frames: [45],
      },
    ],
  })

  return Animation
}

export default PlaySegmentsOnHover

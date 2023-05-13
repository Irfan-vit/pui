import { useLottie, useLottieInteractivity } from 'lottie-react'
import likeButton from '../../assets/shop copy.json'

const style = {
  height: '100%',
  width: '100%',
}

const options = {
  animationData: likeButton,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Example = () => {
  const lottieObj = useLottie(options, style)
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'scroll',
    actions: [
      //   {
      //     visibility: [0, 0.2],
      //     type: 'stop',
      //     frames: [0],
      //   },
      //   {
      //     visibility: [0.2, 0.7],
      //     type: 'seek',
      //     frames: [0, 476],
      //   },
      {
        visibility: [0, 0.3],
        type: 'stop',
        frames: [0],
      },
      {
        visibility: [0.3, 0.9],
        type: 'seek',
        frames: [0, 60],
      },
    ],
  })

  return Animation
}

export default Example
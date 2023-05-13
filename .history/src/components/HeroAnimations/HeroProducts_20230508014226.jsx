import { useLottie, useLottieInteractivity } from 'lottie-react'
import likeButton from '../../assets/like.json'

const style = {
  marginTop: '15vh',
  height: 300,
  border: 3,
  borderStyle: 'solid',
  borderRadius: 7,
}

const options = {
  animationData: likeButton,
}

const HeroProducts = () => {
  const lottieObj = useLottie(options, style)
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'scroll',
    actions: [
      {
        visibility: [0, 0.2],
        type: 'stop',
        frames: [0],
      },
      {
        visibility: [0.2, 0.45],
        type: 'seek',
        frames: [0, 45],
      },
      {
        visibility: [0.45, 1.0],
        type: 'loop',
        frames: [45, 60],
      },
    ],
  })

  return Animation
}

export default HeroProducts

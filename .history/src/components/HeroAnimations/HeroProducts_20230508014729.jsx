import { useLottie, useLottieInteractivity } from 'lottie-react'
import likeButton from '../../assets/shop.json'

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
    mode: 'cursor',
    actions: [
      {
        x: [0, 1], y: [0, 1]
        type: 'seek',
        frames: [0],
      },
      {
        visibility: [0.2, 1],
        type: 'stop',
        frames: [0, 38],
      },
    ],
  })

  return Animation
}

export default HeroProducts
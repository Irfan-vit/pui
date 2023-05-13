import { useLottie, useLottieInteractivity } from 'lottie-react'
import likeButton from '../../assets/shop.json'

const style = {
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
        visibility: [0.4, 0.9],
        type: 'seek',
        frames: [0, 38],
      },
    ],
  })

  return Animation
}

export default HeroProducts

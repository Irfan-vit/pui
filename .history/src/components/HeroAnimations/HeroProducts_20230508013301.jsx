import { useLottie, useLottieInteractivity } from 'lottie-react'
import likeButton from '../../assets/shop.json'

const style = {
    mar
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
        visibility: [0, 1],
        type: 'seek',
        frames: [0, 60],
      },
    ],
  })

  return Animation
}

export default HeroProducts

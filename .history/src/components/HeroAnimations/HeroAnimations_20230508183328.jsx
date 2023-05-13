import { useLottie, useLottieInteractivity } from 'lottie-react'
import likeButton from '../../assets/shop copy.json'

const style = {
  marginTop: '15vh',
  height: 300,
}

const options = {
  animationData: likeButton,
}

const HeroProducts = () => {
  const lottieObj = useLottie(options, style)
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'cursor',
    actions: [],
  })

  return Animation
}

export default HeroProducts

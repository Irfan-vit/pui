import { useLottie, useLottieInteractivity } from 'lottie-react'
import likeButton from '../../assets/shop.json'
import styled from 'styled-components'

const style = {
  marginTop: '15vh',
  height: 300,
  border: 3,
  borderStyle: 'solid',
  borderRadius: 7,
  borderColor: '##897dec',
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
        visibility: [0, 0.4],
        type: 'seek',
        frames: [50],
      },
      {
        visibility: [0.3, 0.7],
        type: 'stop',
        frames: [1, 50],
      },
    ],
  })

  return Animation
}

export default HeroProducts

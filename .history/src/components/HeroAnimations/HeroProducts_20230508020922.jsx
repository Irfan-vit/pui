import { useLottie, useLottieInteractivity } from 'lottie-react'
import likeButton from '../../assets/sale.json'

const style = {
  marginTop: '15vh',
  height: 300,
  //   border: 3,
  //   borderStyle: 'solid',
  //   borderRadius: 7,
  //   borderColor: '#474a56',
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
        position: { x: [0, 1], y: [0, 1] },
        type: 'loop',
        frames: [1, 50],
      },
      {
        position: { x: -1, y: -1 },
        type: 'stop',
        frames: [53],
      },
    ],
  })

  return Animation
}

export default HeroProducts

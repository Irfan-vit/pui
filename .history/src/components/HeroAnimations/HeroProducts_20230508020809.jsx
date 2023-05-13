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
    mode: 'cur',
    actions: [
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

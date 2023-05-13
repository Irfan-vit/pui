import rocket from '../../../assets/bms-rocket.json'
import { useLottie } from 'lottie-react'

const Mission = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: rocket,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  const { Animation } = useLottie(defaultOptions)

  return Animation
}

export default Mission

{
  /* <MissionAnimate
options={defaultOptions}
animationData={rocket}
resizeMode="center"
autoSize
/> */
}

import rocket from '../../../assets/bms-rocket.json'
import { useLottie, useLottieInteractivity } from 'lottie-react'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: rocket,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Mission = () => {
  const lottieObj = useLottie(defaultOptions)

  return <a href="#">{An
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

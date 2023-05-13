import rocket from '../../../assets/bms-rocket.json'
import { useLottie } from 'lottie-react'

style ={
    
}

const MissionAnimation = ({ children }) => {
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

export default MissionAnimation

{
  /* <MissionAnimate
options={defaultOptions}
animationData={rocket}
resizeMode="center"
autoSize
/> */
}

import Lottie from 'lottie-react'
import rocket from '../../assets/bms-rocket.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: rocket,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}


<MissionAnimate
options={defaultOptions}
animationData={rocket}
resizeMode="center"
autoSize
/>
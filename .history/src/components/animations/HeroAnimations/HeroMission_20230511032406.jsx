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

const Mission = () => {
    const lottieObj = useLottie(options, style)
    const Animation = useLottieInteractivity({
      lottieObj,
      mode: 'cursor',
      actions: [
        {
          position: { x: [0, 1], y: [0, 1] },
          type: 'loop',
          frames: [0, 20],
        },
        {
          position: { x: -1, y: -1 },
          type: 'stop',
          frames: [0],
        },
      ],
    })
  
    return <a href="#">{Animation}</a>
}
  
  export default Mission


<MissionAnimate
options={defaultOptions}
animationData={rocket}
resizeMode="center"
autoSize
/>
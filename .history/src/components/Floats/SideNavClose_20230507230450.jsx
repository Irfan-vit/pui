import { useLottie, useLottieInteractivity } from 'lottie-react'
import theme from '../../assets/menuToggle.json'

const style = {
  height: '2.5rem',
  display: 'block',
  cursor: 'pointer',
  //   position: 'fixed',
  //   top: '0',
  //   right: '0',
}

const options = {
  animationData: theme,
}

const SideNavClose = () => {
  const lottieObj = useLottie(options, style)
//   const Animation = useLottieInteractivity({
//     lottieObj,
//     mode: 'cursor',
//     actions: [
//       {
//         // position: { x: [0, 1], y: [0, 1] },
//         position: { x: -1, y: -1 },
//         type: 'loop',
//         frames: [0, 170],
//       },
//       //   {
//       //     position: { x: -1, y: -1 },
//       //     type: 'stop',
//       //     frames: [160],
//       //   },
//     ],
  })

  return Animation
}

export default SideNavClose

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



const SideNavClose = () => {
  const lottieObj = useLottie(options, style)
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return View;
  })

  return Animation
}

export default SideNavClose

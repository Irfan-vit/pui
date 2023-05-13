import { useLottie } from 'lottie-react'
import groovyWalkAnimation from '../../../assets/added.json'

const style = {
  height: '10rem',
  width: '10rem',
}

const Cta = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}

export default Cta

import { useLottie } from 'lottie-react'
import groovyWalkAnimation from '../../../assets/.json'

const style = {
  height: 30,
  width: 15,
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

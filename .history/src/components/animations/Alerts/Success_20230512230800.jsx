import { useLottie } from 'lottie-react'
import groovyWalkAnimation from '../../../assets/cta.json'

const style = {
  height: 300,
  width: 150,
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

import { useLottie } from 'lottie-react'
import groovyWalkAnimation from '../../../assets/attention.json'

const style = {
  height: '5rem',
  width: '5rem',
}

const Attention = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}

export default Attention

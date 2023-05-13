import { useLottie } from 'lottie-react'
import groovyWalkAnimation from '../../../assets/attention.json'

const style = {
  height: '15rem',
  width: '15rem',
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

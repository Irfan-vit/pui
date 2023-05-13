import { useLottie } from 'lottie-react'
import groovyWalkAnimation from '../../../assets/.json'

const style = {
  height: 300,
  width: 150,
}

const Example = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}

export default Example

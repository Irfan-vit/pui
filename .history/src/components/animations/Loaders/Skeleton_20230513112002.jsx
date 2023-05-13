import { useLottie } from 'lottie-react'
import groovyWalkAnimation from '../../../assets/skeleton.json'

const style = {
  height: 300,
  margin: '0 auto',
  display: 'inl',
  justifyContent: 'center',
}

const Skeleton = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}

export default Skeleton

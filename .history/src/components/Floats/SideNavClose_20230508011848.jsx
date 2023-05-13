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
  const options = {
    animationData: theme,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}

export default SideNavClose

import styled from 'styled-components'
import { Button } from '../buttons/Primary'

import heroImage from '../../assets/banners/hero.jpg'

import Lottie from 'lottie-react'
import logoRun from '../../assets/logo.json'
import '../../utils/colors.css'
import '../../utils/typography.css'
import { StyledHeroImg } from './HeroImgStyles'

const Hero = () => (
  <StyledHeroImg
    style={{
      backgroundImage: `linear-gradient(
      rgba(232, 205, 255, 0.507),
      rgba(193, 175, 241, 0.9)
    ),url(${heroImage})`,
      height: '300px',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div>
      <h1>
        <div>
          <a href="#">
            <Lottie
              animationData={logoRun}
              style={style}
              loop={true}
              interactivity={interactivity}
              initialSegment={[49, 71]}
            />
          </a>
        </div>
        Sprint Store
      </h1>
      <h2>The best shoes for the best people</h2>
      <Button>Shop Now</Button>
    </div>
  </HeroImg>
)

export default Hero

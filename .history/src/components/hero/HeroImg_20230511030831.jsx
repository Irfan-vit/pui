import styled from 'styled-components'
import { Button } from '../buttons/Primary'

import heroImage from '../../assets/banners/hero.jpg'

import { StyledHeroImg } from './HeroImgStyles'

const Hero = () => (
  <StyledHeroImg
    style={{
      height: 300px;
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div>
      <h1>Sprint Store</h1>
      <h2>The best shoes for the best people</h2>
      <Button>Shop Now</Button>
    </div>
  </StyledHeroImg>
)

export default Hero

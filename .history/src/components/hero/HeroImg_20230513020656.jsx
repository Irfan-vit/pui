import { Li } from 'react-router-dom'
import Attention from '../animations/HeroAnimations/HeroCta'
import { Button } from '../buttons/Primary'

import { StyledHeroImg } from './HeroImgStyles'

const Hero = () => (
  <StyledHeroImg>
    <div>
      <h1>Sprint Store</h1>
      <h2>The best shoes for the best people</h2>
      <div>
        <Attention />
        <Link></Link> <Button>Shop Now</Button>
      </div>
    </div>
  </StyledHeroImg>
)

export default Hero

import styled from 'styled-components'
import { Button } from '../buttons/Primary'

import heroImage from '../../assets/banners/hero_1200.jpg'

import Lottie from 'lottie-react'
import logoRun from '../../assets/logo.json'
import '../../utils/colors.css'
import '../../utils/typography.css'

const style = {
  height: '4rem',
  width: '4rem',
  display: 'inline-block',
  cursor: 'pointer',
}

const interactivity = {
  mode: 'cursor',
  actions: [
    {
      position: { x: [0, 1], y: [0, 1] },
      type: 'seek',
      frames: [49, 72],
    },
    {
      position: { x: -1, y: -1 },
      type: 'stop',
      frames: [72],
    },
  ],
}

const Hero = () => (
  <HeroImg>
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

const HeroImg = styled.div`
  margin: 0 auto;
  background-image: linear-gradient(
      rgba(232, 205, 255, 0.507),
      rgba(193, 175, 241, 0.9)
    ),
    url(heroImage);
  min-height: 50vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  > div {
    min-height: 50vh;
    color: ${(props) => props.theme.offSetText};
    display: flex;
    flex-flow: column wrap;
    flex-basis: auto;
    align-items: center;
    align-content: space-evenly;
    justify-content: space-evenly;
    text-align: center;
  }
  > div > h1 {
    font-size: var(--font-xxl);
    font-family: var(--font-family-hero);

    @media (min-width: 550px) {
      font-size: var(--font-xxxl);
    }

    @media (min-width: 900px) {
      font-size: var(--font-xxxxl);
    }
  }
  div > h2 {
    font-size: var(--font-xl);
    font-family: var(--font-family-hero);

    @media (min-width: 550px) {
      font-size: var(--font-xxl);
    }

    @media (min-width: 900px) {
      font-size: var(--font-xxxl);
    }
  }
`

export default Hero

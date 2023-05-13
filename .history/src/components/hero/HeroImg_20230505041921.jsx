import styled from 'styled-components'
import { Button } from '../buttons/Primary'
import '../utils/colors.css'
import '../utils/typography.css'

const Hero = () => (
  <HeroImg>
    <div>
      <h1>Stylish Art Online</h1>
      <Button>Shop Now</Button>
    </div>
  </HeroImg>
)

const HeroImg = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://plus.unsplash.com/premium_photo-1674939148262-54e2707ec176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
  min-height: 50vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  > div {
    min-height: 50vh;
    color: white;
    display: flex;
    flex-flow: column wrap;
    flex-basis: auto;
    align-items: center;
    align-content: space-evenly;
    justify-content: space-evenly;
    text-align: center;
  }
  > div > h1 {
    font-size: 3em;
    font-family: var(--font-family-hero);

    @media (min-width: 550px) {
      font-size: 3.5em;
    }

    @media (min-width: 900px) {
      font-size: 4em;
    }
  }
`

export default Hero

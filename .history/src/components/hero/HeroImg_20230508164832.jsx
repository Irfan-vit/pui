import styled from 'styled-components'
import { Button } from '../buttons/Primary'
import '../../utils/colors.css'
import '../../utils/typography.css'

const Hero = () => (
  <HeroImg>
    <div>
      <h1>Sprint Store</h1>
      <h2>Make your move memorable</h2>
      <Button>Shop Now</Button>
    </div>
  </HeroImg>
)

const HeroImg = styled.div`
  margin: 0 auto;
  background-image: linear-gradient(
      rgba(54, 45, 71, 0.5),
      rgba(29, 10, 67, 0.5)
    ),
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

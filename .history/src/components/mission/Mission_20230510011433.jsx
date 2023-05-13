import styled from 'styled-components'

import Lottie from 'lottie-react'
import rocket from '../../assets/bms-rocket.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: rocket,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const StledMissionWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin: 3rem;
`
const StyledMission = styled.div`
  display: block;
  line-height: 1.7;
  @media (min-width: 550px) {
    display: flow-root;
    max-width: 900px;
  }
  p > h2 {
    color: #474a56;
    font-size: var(--font-xxl);
  }
`
const MissionAnimate = styled(Lottie)`
  height: 16vh;
  display: block;
  @media (min-width: 550px) {
    float: left;
    shape-outside: polygon(50% 0px, 103.91% 32.04%, 41.55% 119.54%, 0px 50%);
    height: 20vh;
  }
`

const Mission = () => {
  return (
    <StledMissionWrapper>
      <StyledMission>
        <p>
          <MissionAnimate
            options={defaultOptions}
            animationData={rocket}
            resizeMode="center"
            autoSize
          />
          <h2>Our Mission</h2>
          Our mission is what drives us to do everything possible to expand
          human potential. We do that by creating groundbreaking sport
          innovations, by making our products more sustainable. we always strive
          to match and exceed consumer expectations and provide them with the
          highest value, be it for any situation, from getting ready for a
          nighttime stroll to working up a sweat on the pitch, .
        </p>
      </StyledMission>
    </StledMissionWrapper>
  )
}

export default Mission

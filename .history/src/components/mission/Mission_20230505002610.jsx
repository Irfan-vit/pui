import styled from 'styled-components'

import Lottie from 'lottie-react'
import rocket from '../assets/bms-rocket.json'

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto
          blanditiis libero saepe ipsa veritatis in, doloremque quam dolorum
          reiciendis mollitia cupiditate inventore numquam culpa natus et
          placeat illo aliquid? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Accusantium nemo ratione fugit laboriosam, sequi
          accusamus aliquid qui necessitatibus modi totam natus magni dolor
        </p>
      </StyledMission>
    </StledMissionWrapper>
  )
}

export default Mission

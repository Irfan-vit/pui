import styled from 'styled-components'
import '../utils/colors.css'
import '../utils/typography.css'
import { Button } from '../buttons/Primary'

const FigureCard = styled.figure`
  margin: 0;
  padding: 0;
  box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.09), 0 2px 2px 0 rgba(0, 0, 0, 0.23);

  @media (min-width: 550px) {
    flex-basis: 49%;
  }
  @media (min-width: 900px) {
    flex-basis: 24%;
  }
  > div {
    background-image: url('https://plus.unsplash.com/premium_photo-1674939148262-54e2707ec176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
    min-height: 150px;
  }
  > figcaption {
    background-color: #fafafa;
    color: ${(props) => props.theme.textColor};
    padding: 1rem;
  }
  > figcaption > h2 {
    color: ${(props) => props.theme.primaryColor};
  }
  > figcaption > p {
    color: ${(props) => props.theme.textColor};
  }
  > figcaption > div {
    display: flex;
    justify-content: center;
  }
`

const GenericCard = () => {
  return (
    <FigureCard>
      <div className="one"></div>
      <figcaption>
        <h2>Abstract 1</h2>
        <p>
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
          dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
        </p>
        <div>
          <Button varient="outline">Go to Details</Button>
        </div>
      </figcaption>
    </FigureCard>
  )
}
export default GenericCard

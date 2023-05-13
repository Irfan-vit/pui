import styled from 'styled-components'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'

const FigureCard = styled.figure`
  margin: 0;
  padding: 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  margin: 1.5% 0;

  @media (min-width: 550px) {
    flex-basis: 49%;
    margin: 0.5% 0;
  }
  @media (min-width: 1000px) {
    flex-basis: 24%;
    margin: 0.5% 0;
  }
  > div {
    background-image: url('https://plus.unsplash.com/premium_photo-1674939148262-54e2707ec176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
    height: 100%;
  }
  > figcaption {
    background-color: #fafafa;
    padding: 1rem;
    position: relative;
    min-height: 150px;
    /* min-width: 300px ; */
  }
  > figcaption > h2 {
    /* color: ${(props) => props.theme.primaryHeading}; */
    font-size: var(--font-lg);
    font-weight: var(--font-weight-bold);
    color: ${(props) => props.theme.PrimaryHeading}
  }
  > figcaption > h3 {
    font-size: var(--font-lg);
    font-weight: var(--font-weight-semi-bold);
    color: ${(props) => props.theme.PrimaryHeading}
  }
  > figcaption > p {
    color: ${(props) => props.theme.primaryText};
    font-size: var(--font-sm);
  }
  > figcaption > div {
    display: flex;
    justify-content: center;
  }
`

const GenericCard = (props) => {
  return (
    <FigureCard>
      <div
        className="one"
        style={{
          backgroundImage: `url(${props.imgsrc})`,
          width: '100%',
          height: '100%',
        }}
      ></div>
      <figcaption>
        <h2>{props.title}</h2>
        <p>{props.categoryName}.</p>
        <h3>{props.price}</h3>
      </figcaption>
    </FigureCard>
  )
}
export default GenericCard

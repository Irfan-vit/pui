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
    flex-basis: 32.5%;
    margin: 0.5% 0;
  }
  > div {
    background-image: url('https://plus.unsplash.com/premium_photo-1674939148262-54e2707ec176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
    min-height: 150px;
  }
  > figcaption {
    background-color: #fafafa;
    padding: 1rem;
    position: relative;
    min-height: 150px;
    min-width: 300px ;
  }
  > figcaption > h2 {
    /* color: ${(props) => props.theme.primaryHeading}; */
    font-size: var(--font-lg);
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
const StyledIcons = styled.div`
  font-size: var(--font-lg);
  position: absolute;
  right: 0;
  top: 0%;
  display: flex;
  flex-flow: row wrap;
  margin-left: 1rem;
  justify-content: flex-end;
  > a {
    text-decoration: none;
    margin-right: 1rem;
  }
`

const GenericCard = (props) => {
  return (
    <FigureCard>
      <div className="one"></div>
      <figcaption>
        <StyledIcons>
          <a href="">
            <AiOutlineHeart />
          </a>
          <a href="">
            <AiOutlineShoppingCart />
          </a>
        </StyledIcons>
        <h2>{props.title}</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </figcaption>
    </FigureCard>
  )
}
export default GenericCard

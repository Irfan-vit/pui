import styled from 'styled-components'

const FigureCard = styled.figure`
  margin: 0;
  padding: 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  margin: 1.5% 0;

  @media (min-width: 550px) {
    flex-basis: 49%;
    margin: 0.5% 0;
  }
  @media (min-width: 900px) {
    flex-basis: 24%;
    margin: 0.6% 0;
  }
  > div {
    background-image: url('https://plus.unsplash.com/premium_photo-1674939148262-54e2707ec176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
    min-height: 150px;
    position: relative;
  }
  > figcaption {
    background-color: #fafafa;
    padding: 1rem;
    position: absolute;
    width: 100%;
  }
  > figcaption > h2 {
    /* color: ${(props) => props.theme.primaryHeading}; */
    color: ${(props) => props.theme.PrimaryHeading}
  }
`

const GenericCard = () => {
  return (
    <FigureCard>
      <div className="one"></div>
      <figcaption>
        <h2>Abstract 1</h2>
      </figcaption>
    </FigureCard>
  )
}
export default GenericCard

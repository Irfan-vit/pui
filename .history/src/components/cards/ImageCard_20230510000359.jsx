import styled from 'styled-components'

const FigureCard = styled.figure`
  position: relative;
  margin: 0;
  padding: 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  margin: 1.5% 0;

  @media (min-width: 550px) {
    flex-basis: 49%;
    margin: 0.5% 0;
  }
  /* @media (min-width: 900px) {
    flex-basis: 24%;
    margin: 0.6% 0;
  } */
  > div {
    background-image: linear-gradient(
        rgba(232, 205, 255, 0.507),
        rgba(193, 175, 241, 0.9)
      ),
      url('https://plus.unsplash.com/premium_photo-1674939148262-54e2707ec176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
    min-height: 300px;
  }

  > figcaption > h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    /* background-color: #9457e45a; */
    text-align: center;
    color: ${(props) => props.theme.offSetText};
    font-family: var(--font-family-heading);
    font-size: var(--font-xxl);
    font-weight: var(--font-weight-strong);
  }
`

const GenericCard = (props) => {
  console.log(props)
  return (
    <FigureCard>
      <div
        className="one"
        style={{
          backgroundImage: 'url(`${props.imgSrc}`)',
          height: '300px',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <figcaption>
        <h2>{props.categoryName}</h2>
      </figcaption>
    </FigureCard>
  )
}
export default GenericCard
import styled from 'styled-components'

const StyledProductCard = styled.article`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  background-color: #fafafa;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, auto);
  /* gap: 0 1em; */
  > * {
    grid-column: 1/2;
  }
  > img {
    grid-column: 1/2;
    height: 0;
    width: 0;
    min-height: 15rem;
    min-width: 15rem;
  }

  > * {
    grid-column: 2/3;
    margin-top: 0;
    padding: 0.5rem;
  }
  > img {
    grid-column: 1/2;
    grid-row: 1/6;
    object-fit: fill;
    /* height: 100%; */
    /* width: 100%; */
  }

  > h3 {
    font-size: var(--font-lg);
    font-weight: var(--font-weight-bold);
    color: ${(props) => props.theme.PrimaryHeading};
  }

  > div {
    position: relative;
  }

  > div > p,
  > p {
    color: ${(props) => props.theme.primaryText};
    font-size: var(--font-sm);
  }

  > div > a {
    text-decoration: none;
  }

  > div > a > button {
    display: block;
    margin: 0 auto;
    text-decoration: none;
  }
`

const FeaturedCard = (props) => {
  return (
    <StyledProductCard>
      {/* <h3>{props.title}</h3>
      <p>{props.categoryName}</p> */}
      <img src={props.imgSrc} alt="image" />
    </StyledProductCard>
  )
}

export default FeaturedCard

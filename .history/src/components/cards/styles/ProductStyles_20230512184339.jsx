import styled from 'styled-components'

const StyledProductCard = styled.article`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  margin: 0.5rem 0;
  background-color: #fafafa;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, auto);
  gap: 0 1rem;
  > * {
    grid-column: 2/3;
    margin-top: 0;
    padding: 0.5rem;
  }
  > img {
    grid-column: 1/2;
    grid-row: 1/6;
    object-fit: fill;
    min-height: 100%;
    width: 100%;
    margin: 0 auto;
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

  @media (min-width: 630px) {
  }

  @media (min-width: 1300px) {
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
  }
`

const StyledIcons = styled.div`
  font-size: var(--font-lg);
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(0%, -50%);
  display: flex;
  flex-flow: row wrap;

  justify-content: flex-end;
  > a {
    text-decoration: none;
    margin-right: 1rem;
  }
`
export { StyledProductCard, StyledIcons }

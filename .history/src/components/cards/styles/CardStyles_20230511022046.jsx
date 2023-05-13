// Featured Card Styles
const StyledProductCard = styled.article`
  background-color: #fafafa;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, auto);
  > img {
    grid-column: 1/2;
    height: 100%;
    width: 100%;
    /* height: 25vh;
    width: 32vh; */
  }

  > * {
    grid-column: 2/3;
    margin-top: 0;
  }
  > img {
    grid-column: 1/2;
    grid-row: 1/6;
    object-fit: fill;
  }
`

export { StyledProductCard }

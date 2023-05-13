const StyledCards = styled.div`
  > * {
    margin: 1%;
    padding: 1%;
    background-color: ${(props) => props.theme.offSetBg};
  }

  @media (min-width: 550px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    > * {
      flex-basis: 48%;
    }
  }
  @media (min-width: 1000px) {
    > * {
      flex-basis: 23%;
    }
  }
`

export { StyledCards }

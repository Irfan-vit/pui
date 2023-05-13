import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  text-align: left;
  > h4 {
    color: ${(props) => props.theme.PrimaryHeading};
  }
  > label {
    color: ${(props) => props.theme.primaryText};
  }
  > label > span {
    margin-left: var(--spacing-unit);
  }
`
const StyledAside = styled.div`
  /* margin-top: 22vh; */
  padding: 0 1rem;
  z-index: 0;
  /* @media (max-width: 550px) {
    margin-top: 25vh;
  } */
  @media (max-width: 900px) {
    margin-top: 9rem;
    z-index: 2;
    position: fixed;
    top: 0;
    height: 100%;
    width: 200px;
    background-color: ${(props) => props.theme.primaryBg};
    display: none;
    :target {
      display: block;
    }
  }
  > div {
    display: none;
    @media (max-width: 900px) {
      display: block;
      position: fixed;
      top: 94%;
    }
  }
  > ul {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    align-content: center;
    > li {
      list-style-type: none;
    }
    > li * {
      margin-bottom: 0.5rem;
    }
  }
`
const SideToggle = styled.a`
  z-index: 1;
  display: none;
  @media (max-width: 900px) {
    display: block;
    position: fixed;
    bottom: 0;
  }
`

const SideToggleClose = styled.a`
  z-index: 1;
  display: none;
  @media (max-width: 900px) {
    display: block;
    position: fixed;
    top: 9rem;
    left: 200px;
  }
  /* @media (max-width: 550px) {
    top: 25vh;
  } */
`
const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.higilight};
  > * > a {
    text-decoration: none;
    color: ${(props) => props.theme.higilight};
    text-decoration-line: underline;
    text-underline-offset: 2px;
    :hover,
    :active,
    :focus {
      color: ${(props) => props.theme.PrimaryHeading};
      text-decoration-line: underline;
      text-decoration-style: line;
      text-decoration-color: ${(props) => props.theme.PrimaryHeading};
      text-underline-offset: 2px;
    }
  }
  > :first-child {
    text-align: left;
  }
  > :last-child {
    text-align: right;
  }
`
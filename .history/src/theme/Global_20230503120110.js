import { createGlobalStyle } from 'styled-components'
import { defaultTheme, darkTheme } from './theme'

const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
    font-size: 16px;
    font-family: var(--font-family-body);
  }
*, *::before, *::after {
    box-sizing: inherit;
    Margin:0;
    Padding:0;
    Border:0; 
}
body{
  background-color: ${(props) => props.theme.primaryBackground};
}
`
export default GlobalStyles

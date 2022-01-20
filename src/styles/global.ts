import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
// feito com css custom properties para facilitar caso não vá usar o styled-components (futuramente)
  :root {
    --highlight: #e20e8d;
    --background: #030518;
    --white: #eeeeee;

    --container: 100rem;

    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;

    // é assim que usa o css custom properties
    background: var(--background);
    color: var(--white);
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  p,a {
    font-size: 2rem;
    line-height: var(--medium);
  }

  a {
    color: var(--highlight);
  }
`

export default GlobalStyles

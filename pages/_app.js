import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme

const Meta = () => {
  return (
    <>
      <Head>
        <meta property="og:image" content={db.bg} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="100" />
        <meta property="og:image:alt" content="Belíssimo Quiz" />
      </Head>
    </>
  )
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Meta />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

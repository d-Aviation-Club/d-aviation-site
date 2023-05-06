import { AppProps } from 'next/app'
import Layout from '../components/layout'
import "../styles/globals.css"
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { ParallaxProvider } from 'react-scroll-parallax';
import { config } from "@fortawesome/fontawesome-svg-core";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const themeOptions = {
  palette: {
    type: 'light',
    white: "#FFFFFF",
    primary: {
      main: '#303356',
    },
    secondary: {
      main: '#1D7BB9',
    },
  },
};
const theme = createTheme(themeOptions);

export default function MyApp({ Component, pageProps }:AppProps) {
  return (
    <ThemeProvider theme={theme}>

    <ParallaxProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ParallaxProvider>
    </ThemeProvider>

  )
}
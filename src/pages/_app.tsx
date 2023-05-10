// import "@fortawesome/fontawesome-svg-core/styles.css";
import { AppProps } from 'next/app';
import Layout from '../components/layout';
import "../styles/globals.css";

// const themeOptions = {
//   palette: {
//     type: 'light',
//     white: "#FFFFFF",
//     primary: {
//       main: '#303356',
//     },
//     secondary: {
//       main: '#1D7BB9',
//     },
//   },
// };

export default function MyApp({ Component, pageProps }:AppProps) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}
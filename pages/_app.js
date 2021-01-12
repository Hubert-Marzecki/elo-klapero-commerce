import '../styles/globals.css'
import { Global, css } from '@emotion/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header";
import { Provider, Context } from '../components/store'

function MyApp({ Component, pageProps }) {
  return (
      <>
      <Global
          styles={css`
         @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
         font-family: 'Roboto', sans-serif;
      `}
      />
          <Header />
          <Provider>
              <Component {...pageProps} />
          </Provider>
      </>
      )

}

export default MyApp

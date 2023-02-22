import '../styles/globals.css';
import 'aos/dist/aos.css';
import Aos from 'aos'
import { useEffect, useInsertionEffect } from 'react';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    Aos.init();

  }, [])


  return <Component {...pageProps} />
}

export default MyApp

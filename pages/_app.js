// import '../styles/globals.css'
import Head from 'next/head'
import '../public/css/base.css'
import '../public/css/justified.css'
import '../public/css/fontello.css'
import '../public/css/magnific-popup.css'
import '../public/css/swiper.css'
import '../public/css/style.css'
import '../public/css/custom.css';
// import 'metismenujs/dist/metismenujs.css'





export default function MyApp({ Component, pageProps }) {
  return (
    <>

      <Head>
      </Head>

      <Component {...pageProps} />

    </>
  )
}

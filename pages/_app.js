import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../components/molecules/Footer'
import Navbar from '../components/molecules/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter();
  return (
    <>
    <Navbar />
      <Head>
        <link rel="canonical" key="canonical" href={asPath}/>
        <meta name="robots" content="noindex"></meta>
      </Head>
    <Component {...pageProps} />
    <Footer />
    </>
  )
  
}

export default MyApp

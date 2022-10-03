import { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import Footer from '../components/molecules/Footer'
import Navbar from '../components/molecules/Navbar'
import Head from 'next/head'
import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_ID}}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Navbar />
      <Head>
        <link rel="canonical" key="canonical" href={router.asPath}/>
        {/* <meta name="robots" content="noindex"></meta> */}
      </Head>
    <Component {...pageProps} />
    <Footer />
    </>
  )
}

export default App


// import Head from 'next/head';
// import { useRouter } from 'next/router';
// import Footer from '../components/molecules/Footer'
// import Navbar from '../components/molecules/Navbar'
// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   const { asPath } = useRouter();
//   return (
//     <>
      // <Navbar />
      //   <Head>
      //     <link rel="canonical" key="canonical" href={asPath}/>
      //     {/* <meta name="robots" content="noindex"></meta> */}
      //   </Head>
      // <Component {...pageProps} />
      // <Footer />
//     </>
//   )
  
// }

// export default MyApp

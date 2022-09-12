import Footer from '../components/molecules/Footer'
import Navbar from '../components/molecules/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    </>
  )
  
}

export default MyApp

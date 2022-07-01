import '../styles/globals.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
  <div className='max-w-[1440px] m-auto'>
    <Navbar />
  <Component {...pageProps} />
  <Footer />
  </div>
  )
}

export default MyApp

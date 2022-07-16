import '../styles/globals.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AppStoreSection from '../components/AppStoreSection'


function MyApp({ Component, pageProps }) {
  return (
  <div className='max-w-[1440px] m-auto'>
    {/* <Navbar /> */}
  <Component {...pageProps} />
  <AppStoreSection />
  <Footer />
  </div>
  )
}

export default MyApp

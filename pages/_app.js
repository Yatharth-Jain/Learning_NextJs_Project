import Footer from '../components/footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import MainLayout from '../layout/mainLayout'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <MainLayout>
    <Component {...pageProps} />
    </MainLayout>
    </>
    )
}

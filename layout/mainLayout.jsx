import Footer from '../components/footer/Footer'
import Navbar from '../components/Navbar/Navbar'

export default function MainLayout({children}) {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

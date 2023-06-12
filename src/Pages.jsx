import Navbar from './sections/navbar/Navbar'
import Header from './sections/header/Header'
import About from './sections/about/About'
import Portfolio from './sections/portfolio/Portfolio'
import Contact from './sections/contact/Contact'
import Footer from './sections/footer/Footer'
import FloatingNav from './sections/floating-nav/FloatingNav'

const Pages = () => {
  return (
    <>
        <Navbar />
        <Header />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
        <FloatingNav />
    </>
  )
}

export default Pages
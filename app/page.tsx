// app/page.tsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  )
}

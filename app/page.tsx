import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />

      <section id="hero" aria-label="Hero Section">
        <Hero />
      </section>

      <section id="features" aria-label="Features Section">
        <Features />
      </section>

      <section id="about" aria-label="About Us Section">
        <About />
      </section>

      <section id="pricing" aria-label="Pricing Section">
        <Pricing />
      </section>

      <section id="testimonials" aria-label="Testimonials Section">
        <Testimonials />
      </section>

      <section id="contact" aria-label="Contact Section">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}

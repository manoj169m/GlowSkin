import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceHair from './components/ServiceHair';
import ServiceSkin from './components/ServiceSkin';
import Shorts from './components/Shorts';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonals';
import Appointment from './components/Appoinment';
import Before from './components/Before';
import Footer from './components/Footer';

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ServiceSkin />
      <ServiceHair />
      <Shorts />
      <FAQ />
      <Testimonials />
      <Appointment />
      <Before />
      <Footer />

      {/* Fixed WhatsApp and Scroll Up Buttons */}
      <div className="floating-buttons-wrapper">
  {showTopBtn && (
    <button 
      className="scroll-top-btn text-white" 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ↑
    </button>
  )}

  <a 
    href="https://wa.me/918098756789" 
    className="whatsapp-btn" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img 
      src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" 
      alt="WhatsApp"
    />
  </a>
</div>

    </>
  );
}

export default App;

import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Footer() {
  return (
    <footer
      className="p-0"
      style={{
        backgroundImage: `url('/stem.webp')`, // ✅ Fixed here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
        }}
      ></div>

      <div className="container position-relative py-5" style={{ zIndex: 1 }}>
        <div className="row gy-4">
          {/* Logo and About Section */}
          <div className="col-lg-4 col-md-6">
            <div className="mb-4">
              <h2 className="text-white fw-bold">
                <span className="text-danger">GRO</span>HAIR
              </h2>
            </div>
            <p className="text-light">
              We are dedicated to providing exceptional salon services that enhance your natural beauty.
              Our team of skilled professionals uses premium products to ensure you leave feeling confident and beautiful.
            </p>
           
            <button className="btn btn-danger rounded-pill px-4 mt-3"

    onClick={() => {
      const section = document.getElementById('bookappoinment');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }}>
  
    Book Now
  </button>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              {["Home", "About", "Services", "Testimonals", "Shorts"].map((item, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-light text-decoration-none link-hover"
                  >
                    <i className="bi bi-chevron-right text-danger me-2"></i>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-lg-5 col-md-12">
            <h5 className="text-white mb-4">Contact Us</h5>
            <div className="mb-4">
              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-geo-alt-fill text-danger me-3 mt-1"></i>
                <p className="text-light mb-0">
                  3, 1st Floor, Philomena Hotel and Apartment,<br />
                  Arulanandha Nagar Main Rd, Thanjavur, Tamil Nadu 613007
                </p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-telephone-fill text-danger me-3"></i>
                <p className="text-light mb-0">(+91) 80987 56789</p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-envelope-fill text-danger me-3"></i>
                <p className="text-light mb-0">grohairgloskintnj@gmail.com</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="mb-4">
              <h5 className="text-white mb-3">Follow Us</h5>
              <div className="d-flex gap-3">
                {[
                  { href: "https://www.facebook.com/adgrohairgloskinthanjavur", icon: "facebook" },
                  { href: "https://www.instagram.com/adgrohairgloskinthanjavur/", icon: "instagram" },
                  { href: "https://www.youtube.com/@AdGrohairGloskinThanjavur", icon: "youtube" },
               
                ].map((social, index) => (
                  <a key={index} href={social.href} className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                    <div
                      className="bg-danger rounded-circle d-flex justify-content-center align-items-center"
                      style={{ width: '40px', height: '40px' }}
                    >
                      <i className={`bi bi-${social.icon} text-white`}></i>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="row mt-5">
          <div className="col-12">
            <h5 className="text-white mb-4 text-center">Find Us</h5>
            <div className="ratio ratio-21x9" style={{ maxHeight: '350px' }}>
              <iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.4181238820765!2d79.13124127260348!3d10.773314861980003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab962ed07ae27%3A0x301c1c67f63e3b6c!2sAdvanced%20GroHair%20%26%20GloSkin%20-%20Thanjavur!5e1!3m2!1sen!2sin!4v1744361788768!5m2!1sen!2sin"                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
                className="rounded shadow"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-5">
          <div className="col-12">
            <hr className="border-light" />
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-light">
              <p className="mb-2 mb-md-0">© 2025 GROHAIR. All rights reserved.</p>
              <p className="mb-0">Developed by <span className="text-danger"  > Mano</span></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

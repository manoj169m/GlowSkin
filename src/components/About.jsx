import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function About() {
  const [count, setCount] = useState(0);

  useEffect(() => {


    let start = 0;
    const end = 1000;
    const duration = 1500;
    const incrementTime = Math.floor(duration / end);

    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(counter);
    }, incrementTime);

    return () => clearInterval(counter);
  }, []);

  return (
    <section className="container my-5  about-section" id='about'>
      <div className="row align-items-center">
        {/* Left Side: Image */}
        <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
          <img
            src="/about.webp"
            alt="About Us"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Right Side: Text */}
        <div className="col-md-6 d-flex flex-column justify-content-center"   >
          <header className="mb-4 about-header">
            <h2 className="fw-bold text-danger" data-aos="flip-up">About Us</h2>
            <h2 data-aos="flip-up">
              Your Best <span className="text-danger">Hair &amp; Skin</span> Care Center
            </h2>
          </header>
          <p className="m-3 about-paragraph ps-4  " data-aos="flip-up">
            Our team of certified professionals specializes in providing personalized solutions tailored
            to your unique concerns.
          </p>
          <p className="m-3 about-paragraph ps-4 " data-aos="flip-up">
            Whether you’re struggling with hair loss, scalp issues, acne, pigmentation, or signs of aging,
            our advanced treatments deliver visible and long-lasting results.
          </p>
          <div className="m-3 happy-main" data-aos="flip-up">
  <h5 className="happy-clients-count text-danger">{count}+</h5>
  <p className="mb-0 fs-5">Happy Clients</p>

</div>

        </div>
      </div>
    </section>
  );
}

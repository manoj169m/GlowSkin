import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 


export default function ServiceHair() {
  const services = [
    {
      title: "Eyebrow Transplant",
      description: "Smoothens frizz and strengthens your hair.",
      image: "/eyebrow.webp",
    },
    {
      title: "Stem X Pro",
      description: "Vibrant and lasting hair color with minimal damage.",
      image: "/stem.webp",
    },
    {
      title: "Mesotherapy",
      description: "Nourishes your scalp for healthier hair growth.",
      image: "/stem.webp",
    },
    {
      title: "Oxygen Laser Therapy",
      description: "Relaxing treatment to revitalize your hair.",
      image: "/oxgen-laser-therapy.webp",
    },
    {
      title: "Scalp Micropigmentation",
      description: "Stylish and precise cuts tailored to you.",
      image: "/scalp.webp",
    },
  ];
  
  return (
    <div className="container py-5">
         <h2 className="text-center mb-4">
        <span className="position-relative d-inline-block">
          Our <span className="text-danger">hair</span> Treatments
          <svg className="position-absolute" style={{ bottom: "-10px", left: "0", width: "100%", height: "6px" }} xmlns="http://www.w3.org/2000/svg">
            <path d="M0,3 Q40,6 80,3 T160,3 T240,3 T320,3" fill="none" stroke="#dc3545" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </span>
      </h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {services.map((service, index) => (
          <div key={index} className="col" data-aos="fade-up" data-aos-delay={index * 100}
>
            <div className="card h-100 position-relative service-card">
              <img
                src={service.image}
                className="card-img-top"
                alt={service.title}
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center bg-dark bg-opacity-50">
                <h5 className="card-title text-danger font-bold">{service.title}</h5>
                <p className="card-text text-white">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Consultation booking card to fill the gap */}
        <div className="col" >
  <div className="card h-100 bg-danger text-red">
    <div className="card-body d-flex flex-column justify-content-center align-items-center text-center p-4">
      <div className="rounded-circle bg-white text-danger mb-4 d-flex justify-content-center align-items-center" style={{ width: '80px', height: '80px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-calendar-check" viewBox="0 0 16 16">
          <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
        </svg>
      </div>
      <h5 className="card-title font-bold mb-3">Book a Free  Consultation</h5>
      <p className="card-text mb-4">Unsure which treatment is right for you? Schedule a free consultation with our experts.</p>
      <button className="btn btn-outline-light px-4 py-2" onClick={() => {
      const section = document.getElementById('bookappoinment');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }}>Book Now</button>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}
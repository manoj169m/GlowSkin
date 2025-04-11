import React from 'react';

export default function ServiceSkin() {
  const services = [
    {
      title: "Microblading",
      description: "Smoothens frizz and strengthens your hair.",
      image: "/microblading.webp",
    },
    {
      title: "Wart Removal",
      description: "Vibrant and lasting hair color with minimal damage.",
      image: "/wart-removal.webp",
    },
    {
      title: "Hydrafacial",
      description: "Nourishes your scalp for healthier hair growth.",
      image: "/hydrafacial.webp",
    },
    {
      title: "Q-Switch",
      description: "Relaxing treatment to revitalize your hair.",
      image: "/q-switch.webp",
    },
    {
      title: "Botox",
      description: "Stylish and precise cuts tailored to you.",
      image: "/botox.webp",
    },
    {
      title: "RF Anti Aging Facial",
      description: "Stylish and precise cuts tailored to you.",
      image: "/rf-anit-aging-facial.webp",
    },
  ];

  return (
    <div className="container py-5" id='services'>

      <h2 className="text-center mb-4">
        <span className="position-relative d-inline-block">
          Our <span className="text-danger">Skin</span> Treatments
          <svg className="position-absolute" style={{ bottom: "-10px", left: "0", width: "100%", height: "6px" }} xmlns="http://www.w3.org/2000/svg">
            <path d="M0,3 Q40,6 80,3 T160,3 T240,3 T320,3" fill="none" stroke="#dc3545" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </span>
      </h2>
   
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {services.map((service, index) => (
          <div key={index} className="col" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="card h-100 position-relative service-card">
              <img
                src={service.image}
                className="card-img-top"
                alt={service.title}
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center bg-dark bg-opacity-50">
                <h5 className="card-title text-danger fw-bold">{service.title}</h5>
                <p className="card-text text-white">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

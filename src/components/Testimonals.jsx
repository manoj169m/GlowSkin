import React from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Hair Transplant Patient',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    message:
      'The results are incredible! The team was professional and made me feel comfortable throughout the process.',
    rating: 5,
  },
  {
    name: 'James Lee',
    role: 'Client from NYC',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    message:
      'My confidence is back! The clinic was super clean and the procedure was smoother than I expected.',
    rating: 4,
  },
  {
    name: 'Emily Stone',
    role: 'Happy Patient',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    message:
      'Truly life-changing. I couldn’t believe the difference it made in just a few months!',
    rating: 5,
  },
];

const StarRating = ({ rating }) => (
  <div className="text-warning mb-2">
    {Array.from({ length: 5 }, (_, i) => (
      <span key={i}>{i < rating ? '★' : '☆'}</span>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <div className="py-5" style={{backgroundColor:'#ffc0c0'}} id='testimonals'>
      <div className="container">
      <h2 className="text-center mb-4">
          <span className="position-relative d-inline-block">
          What Our <span className="text-danger">Client Say</span> 
            <svg className="position-absolute" style={{ bottom: "-10px", left: "0", width: "100%", height: "6px" }} xmlns="http://www.w3.org/2000/svg">
              <path d="M0,3 Q40,6 80,3 T160,3 T240,3 T320,3" fill="none" stroke="#dc3545" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>
        </h2>        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                key={index}
              >
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="fw-bold">{testimonial.name}</h5>
                  <p className="text-muted mb-2">{testimonial.role}</p>
                  <StarRating rating={testimonial.rating} />
                  <p className="fst-italic w-75 mx-auto">“{testimonial.message}”</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Add Review Button */}
        <div className="text-center mt-5">
        <button
  className="btn btn-danger px-4 py-2"
 
>
  Add Your Hair Transplant Review
</button>
        </div>
      </div>
    </div>
  );
}

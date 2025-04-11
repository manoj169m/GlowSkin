import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function FAQ() {
  const [activeGroHair, setActiveGroHair] = useState(null);
  const [activeGlowSkin, setActiveGlowSkin] = useState(null);

  const toggleGroHair = (id) => {
    setActiveGroHair(activeGroHair === id ? null : id);
  };

  const toggleGlowSkin = (id) => {
    setActiveGlowSkin(activeGlowSkin === id ? null : id);
  };

  // Common styling for wavy underline
  const wavyUnderline = {
    bottom: "-10px",
    left: "0",
    width: "100%", 
    height: "6px"
  };

  // FAQ data
  const groHairFAQs = [
    {
      id: 1,
      question: 'What treatments do you offer for hair loss?',
      answer: 'We offer a range of advanced hair restoration treatments, including Hair Transplant (FUE & FUT), PRP Therapy, Mesotherapy, Scalp Micropigmentation, and Low-Level Laser Therapy (LLLT).'
    },
    {
      id: 2,
      question: 'How does a hair transplant work?',
      answer: 'A hair transplant involves extracting healthy hair follicles from a donor area and implanting them into bald or thinning areas. The transplanted hair grows naturally over time.'
    },
    {
      id: 3,
      question: 'Is hair transplantation a permanent solution?',
      answer: 'Yes, hair transplants provide permanent results as the implanted hair is taken from genetically resistant areas, ensuring long-lasting growth.'
    },
    {
      id: 4,
      question: 'How long does it take to see results after a hair transplant?',
      answer: 'New hair growth starts around 3–4 months post-surgery, with full results visible within 9–12 months.'
    },
    {
      id: 5,
      question: 'What is PRP therapy, and how does it help with hair growth?',
      answer: 'PRP therapy uses your own blood, processed to extract growth factors, which are then injected into the scalp to stimulate hair follicles and promote regrowth.'
    }
  ];

  const glowSkinFAQs = [
    {
      id: 1,
      question: 'What treatments do you offer for glowing skin?',
      answer: 'We offer chemical peels, hydrafacials, laser skin resurfacing, and microneedling to help rejuvenate and brighten the skin.'
    },
    {
      id: 2,
      question: 'Are your skin treatments suitable for sensitive skin?',
      answer: 'Yes, we provide customized treatments based on your skin type. Our dermatologists assess your skin before recommending any procedures.'
    },
    {
      id: 3,
      question: 'How long does it take to see results from skin treatments?',
      answer: 'Some treatments show immediate results, while others like microneedling or laser therapy may require a few sessions for best outcomes.'
    },
    {
      id: 4,
      question: 'Do you provide anti-aging treatments?',
      answer: 'Yes, we offer treatments like Botox, dermal fillers, and RF therapy to reduce fine lines and rejuvenate the skin.'
    },
    {
      id: 5,
      question: 'How do I maintain glowing skin post-treatment?',
      answer: 'Following a good skincare routine, staying hydrated, and using sunscreen daily can help maintain results long-term.'
    }
  ];

  // Common button styles for active state - with no border
  const getActiveButtonStyle = (isActive) => ({
    color: isActive ? 'white' : '#212529',
    backgroundColor: isActive ? '#dc3545' : 'transparent', 
    border: 'none',  // Always remove border
    boxShadow: 'none', // Remove any shadow that might appear as a border
    outline: 'none',  // Remove outline
    transition: 'all 0.3s ease'
  });

  // Additional style to override Bootstrap's focus styles
  const buttonAfterStyle = `
  .accordion-button:focus {
    box-shadow: none !important;
    border: none !important;
    outline: none !important;
  }

  .accordion-button:not(.collapsed)::after {
    filter: brightness(0) invert(1); /* Turns black arrow to white */
  }

  .accordion-button::after {
    transition: filter 0.3s ease;
  }

  .accordion-button:not(.collapsed) {
    background-color: #dc3545 !important;
    color: white !important;
  }
`;

  return (
    <div className="container py-5" id='FAQs'>
      {/* Custom CSS to remove border and outline */}
      <style>{buttonAfterStyle}</style>
      
      <div className="row g-4">
        {/* GroHair FAQs - Left Column */}
        <div className="col-lg-6" data-aos='fade-right'>
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
              <h2 className="text-center mb-4">
                <span className="position-relative d-inline-block">
                  FAQs for <span className="text-danger">Grow Hair</span>
                  <svg className="position-absolute" style={wavyUnderline} xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,3 Q40,6 80,3 T160,3 T240,3 T320,3" fill="none" stroke="#dc3545" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
            </div>
            <div className="card-body">
              <div className="accordion accordion-flush" id="accordionGroHair">
                {groHairFAQs.map((item) => (
                  <div className="accordion-item" key={`grow-${item.id}`}>
                    <h2 className="accordion-header" id={`grohair-heading${item.id}`}>
                      <button
                        className={`accordion-button ${activeGroHair === item.id ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleGroHair(item.id)}
                        aria-expanded={activeGroHair === item.id}
                        aria-controls={`grohair-collapse${item.id}`}
                        style={getActiveButtonStyle(activeGroHair === item.id)}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={`grohair-collapse${item.id}`}
                      className={`accordion-collapse collapse ${activeGroHair === item.id ? 'show' : ''}`}
                      aria-labelledby={`grohair-heading${item.id}`}
                    >
                      <div className="accordion-body">{item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* GlowSkin FAQs - Right Column */}
        <div className="col-lg-6" data-aos='fade-up'>
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
              <h2 className="text-center mb-4">
                <span className="position-relative d-inline-block">
                  FAQs for <span className="text-danger">Glow Skin</span>
                  <svg className="position-absolute" style={wavyUnderline} xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,3 Q40,6 80,3 T160,3 T240,3 T320,3" fill="none" stroke="#dc3545" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
            </div>
            <div className="card-body">
              <div className="accordion accordion-flush" id="accordionGlowSkin">
                {glowSkinFAQs.map((item) => (
                  <div className="accordion-item" key={`glow-${item.id}`}>
                    <h2 className="accordion-header" id={`glowskin-heading${item.id}`}>
                      <button
                        className={`accordion-button  ${activeGlowSkin === item.id ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleGlowSkin(item.id)}
                        aria-expanded={activeGlowSkin === item.id}
                        aria-controls={`glowskin-collapse${item.id}`}
                        style={getActiveButtonStyle(activeGlowSkin === item.id)}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={`glowskin-collapse${item.id}`}
                      className={`accordion-collapse collapse ${activeGlowSkin === item.id ? 'show' : ''}`}
                      aria-labelledby={`glowskin-heading${item.id}`}
                    >
                      <div className="accordion-body">{item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-action */}
      <div className="text-center mt-5">
        <button className="btn btn-danger px-4 py-2 rounded-pill" onClick={() => {
                        const section = document.getElementById('bookappoinment');
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}>Book a Consultation</button>
      </div>
    </div>
  );
}
import React from 'react';

export default function Shorts() {
  const youtubeShorts = [
    { id: "h7SmV_W9Npo", title: "Hair Treatment Tutorial 1" },
    { id: "xzc5YF9LGqU", title: "Hair Treatment Tutorial 2" },
    { id: "rNr2_UnXj2g", title: "Hair Treatment Tutorial 3" },
    { id: "t--qUVMl4qM", title: "Hair Treatment Tutorial 4" },
    { id: "rNr2_UnXj2g", title: "Hair Treatment Tutorial 5" },
  ];
  return (
    <div className="py-5" style={{ 
      background: "linear-gradient(135deg, #f5f7fa 0%, #f8e7e7 100%)", 
      borderRadius: "16px" 
    }} id='shorts'>
      <div className="container">
        <h2 className="text-center mb-4">
          <span className="position-relative d-inline-block">
            Hair <span className="text-danger">Tutorial</span> Shorts
            <svg className="position-absolute" style={{ bottom: "-10px", left: "0", width: "100%", height: "6px" }} xmlns="http://www.w3.org/2000/svg">
              <path d="M0,3 Q40,6 80,3 T160,3 T240,3 T320,3" fill="none" stroke="#dc3545" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>
        </h2>

        <p className="text-center text-muted mb-5">Watch our latest hair treatment techniques and tips</p>

        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="d-flex flex-nowrap overflow-auto px-2 pb-4 gap-4" style={{ scrollbarWidth: "none" }}>
              {youtubeShorts.map((video, index) => (
                <div 
                  key={video.id} 
                  className="flex-shrink-0" 
                  style={{ width: "200px" }} 
                  data-aos="fade-up" 
                  data-aos-delay={index * 100}
                >
                  <div className="card border-0 shadow-sm rounded-lg overflow-hidden bg-white h-100">
                    <div className="position-relative" style={{ height: "356px", width: "100%" }}>
                      <iframe 
                        src={`https://www.youtube.com/embed/${video.id}?modestbranding=1&rel=0`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{ borderRadius: "10px" }}
                      ></iframe>

                      <div 
                        className="position-absolute bottom-0 start-0 w-100 p-2" 
                        style={{ 
                          background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" 
                        }}
                      >
                        <div className="d-flex justify-content-between align-items-center">
                          <div 
                            className="rounded-circle bg-danger text-white d-flex justify-content-center align-items-center shadow" 
                            style={{ width: "36px", height: "36px" }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-2 text-center fw-semibold">{video.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
  {/* YouTube Button */}
  <a 
    href="https://www.youtube.com/@AdGrohairGloskinThanjavur/shorts" 
    target="_blank" 
    rel="noopener noreferrer"
    className="btn btn-danger rounded-pill px-4 py-2 shadow-sm me-2"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-youtube me-2" viewBox="0 0 16 16">
      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
    </svg>
    View All Tutorials
  </a>

  {/* Instagram Button */}
  <a 
    href="https://www.instagram.com/adgrohairgloskinthanjavur/"  // Replace with your Instagram profile URL
    target="_blank" 
    rel="noopener noreferrer"
    className="btn btn-gradient rounded-pill px-4 py-2 shadow-sm"
    style={{ background: "#E1306C", color: "white" }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-instagram me-2" viewBox="0 0 16 16">
      <path d="M8 0C5.8 0 5.5 0 4.7.1 3.9.2 3.2.4 2.7.8a4.58 4.58 0 0 0-1.9 2C.5 3.5.3 4.2.2 5c-.1.8-.1 1.1-.1 3s0 2.2.1 3c.1.8.3 1.5.7 2.1.4.6 1 1.2 1.6 1.6.6.4 1.3.6 2.1.7.8.1 1.1.1 3 .1s2.2 0 3-.1c.8-.1 1.5-.3 2.1-.7a4.6 4.6 0 0 0 1.6-1.6c.4-.6.6-1.3.7-2.1.1-.8.1-1.1.1-3s0-2.2-.1-3a5.7 5.7 0 0 0-.7-2.1A4.6 4.6 0 0 0 13.3.8a5.7 5.7 0 0 0-2.1-.7C10.4 0 10.1 0 8 0zM8 1.5c2.1 0 2.4 0 3.3.1a3.9 3.9 0 0 1 1.3.3 3 3 0 0 1 1.1.7c.3.3.5.6.7 1a3.8 3.8 0 0 1 .3 1.3c.1.9.1 1.2.1 3s0 2.1-.1 3a3.8 3.8 0 0 1-.3 1.3c-.2.4-.4.7-.7 1a3 3 0 0 1-1 .7 3.9 3.9 0 0 1-1.3.3c-.9.1-1.2.1-3.3.1s-2.4 0-3.3-.1a3.9 3.9 0 0 1-1.3-.3 3 3 0 0 1-1.1-.7c-.3-.3-.5-.6-.7-1a3.8 3.8 0 0 1-.3-1.3C1.5 10.1 1.5 9.8 1.5 8s0-2.1.1-3a3.8 3.8 0 0 1 .3-1.3c.2-.4.4-.7.7-1a3 3 0 0 1 1-.7 3.9 3.9 0 0 1 1.3-.3c.9-.1 1.2-.1 3.3-.1zM8 3.9a4.1 4.1 0 1 0 0 8.2 4.1 4.1 0 0 0 0-8.2zm0 6.7a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2zm4.3-6.8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
    </svg>
    Follow on Instagram
  </a>
</div>

      </div>
    </div>
  );
}

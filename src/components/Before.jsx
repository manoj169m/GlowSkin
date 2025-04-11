import React, { useState, useEffect, lazy, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Lazy load the ReactCompareImage component
const ReactCompareImage = lazy(() => import('react-compare-image'));

const imagePairs = [
  {
    before: '/stem.webp',
    after: '/scalp.webp',
    title: 'Hair Restoration'
  },
  {
    before: '/transform1.webp',
    after: '/transform6.webp',
    title: 'Transformation 2'
  },
  {
    before: '/transform2.webp',
    after: '/transform8.webp',
    title: 'Transformation 3'
  },
  {
    before: '/transform7.webp',
    after: '/transform5.webp',
    title: 'Transformation 4'
  },
  {
    before: '/transform9.webp',
    after: '/transform10.webp',
    title: 'Transformation 5'
  },
  {
    before: '/transform3.webp',
    after: '/transform11.webp',
    title: 'Transformation 6'
  },
];

// Image loading utility
const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = reject;
  });
};

export default function Before() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            if (!visibleItems.includes(index)) {
              setVisibleItems(prev => [...prev, index]);
            }
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.image-container').forEach(el => {
        observer.observe(el);
      });

      return () => observer.disconnect();
    } else {
      // Fallback for browsers without IntersectionObserver
      setVisibleItems(imagePairs.map((_, idx) => idx));
    }
  }, []);

  // Preload first two images
  useEffect(() => {
    const preloadInitialImages = async () => {
      if (imagePairs.length > 0) {
        try {
          await Promise.all([
            preloadImage(imagePairs[0].before),
            preloadImage(imagePairs[0].after),
            ...(imagePairs[1] ? [preloadImage(imagePairs[1].before), preloadImage(imagePairs[1].after)] : [])
          ]);
          setLoading(false);
        } catch (err) {
          console.error("Error preloading images:", err);
          setLoading(false);
        }
      }
    };

    preloadInitialImages();
  }, []);

  // Image loading component
  const ImageLoadingPlaceholder = () => (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '200px', background: '#f8f9fa' }}>
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  return (
    <div className="container py-5 " >
      <h2 className="text-center mb-4">
        <span className="position-relative d-inline-block">
          <span className="text-danger">Before</span> & <span className="text-danger">After</span> Results
          <svg className="position-absolute" style={{ bottom: "-10px", left: "0", width: "100%", height: "6px" }} xmlns="http://www.w3.org/2000/svg">
            <path d="M0,3 Q40,6 80,3 T160,3 T240,3 T320,3" fill="none" stroke="#dc3545" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </span>
      </h2>
      <p className="text-center text-muted mb-5">Slide to compare transformations</p>
      
      <div className="row">
        {imagePairs.map((pair, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div
              className="card shadow-sm p-3 h-100"
              style={{
                maxWidth: '100%',
                width: '100%',
                borderRadius: '16px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                transform: hoveredIndex === index ? 'translateY(-5px)' : 'none',
                boxShadow: hoveredIndex === index ? '0 10px 20px rgba(0,0,0,0.1)' : '0 4px 6px rgba(0,0,0,0.05)',
                overflow: 'hidden'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="position-relative image-container" style={{ height: '200px' }} data-index={index}>
                {visibleItems.includes(index) ? (
                  <Suspense fallback={<ImageLoadingPlaceholder />}>
                    <ReactCompareImage
                      leftImage={pair.before}
                      rightImage={pair.after}
                      sliderPositionPercentage={0.5}
                      sliderLineWidth={2}
                      sliderLineColor="#dc3545"
                      handle={
                        <div
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: 'white',
                            border: '3px solid #dc3545',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                          }}
                        >
                          <div
                            style={{
                              width: '20px',
                              height: '20px',
                              background: '#dc3545',
                              borderRadius: '50%'
                            }}
                          ></div>
                        </div>
                      }
                      alt={`Comparison ${index + 1}`}
                    />
                  </Suspense>
                ) : (
                  <ImageLoadingPlaceholder />
                )}
              </div>
              <div className="card-body px-1 pt-3 pb-1">
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
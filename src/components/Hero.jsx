import React, { useState } from 'react';
import { Carousel, Button, Container, Row, Col } from 'react-bootstrap';

const images = [
  '/hero1.webp',
  '/hero2.webp',
  '/hero3.webp',
];

const texts = [
  {
    title: 'Struggling with acne, scars, or pigmentation?',
    description: 'Our Q-Switch Laser & Hydrafacial can give you smooth, radiant skin.',
  },
  {
    title: 'Advanced Healthcare Solutions',
    description: 'Innovative treatments for a healthier tomorrow.',
  },
  {
    title: 'Compassionate Care at Your Service',
    description: 'We’re dedicated to your well-being every step of the way.',
  },
];

export default function Hero() {

  return (
    <Carousel controls={false} indicators={false} fade interval={3000}>
      {images.map((img, index) => (
        <Carousel.Item key={index}>
          <div
            style={{
              backgroundImage: `url(${img})`,
              height: '100vh',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center', // Vertically center the content
              justifyContent: 'flex-start', // Align the content to the left
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              position: 'relative',
              
            }}
            id='home'
          >
            <div
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column', // Stack content vertically
                justifyContent: 'center', // Vertically center the content
                paddingLeft: '20px', // Add padding to the left side
              }}
            >
              <Container className="text-start">
                <Row className="justify-content-start">
                  <Col md={8} lg={6} className="text-white text-start">
                    <h1 className="text-danger fw-bold"  >{texts[index].title}</h1>
                    <p className="mb-4">{texts[index].description}</p>
                    <div className="d-flex justify-content-start gap-4">
                      <Button variant="danger" size="lg"
                       onClick={() => {
                        const section = document.getElementById('bookappoinment');
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      
                      >Book an Appointment</Button>
                      <Button variant="secondary" size="lg" 
                       onClick={() => {
                        const section = document.getElementById('about');
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      
                      
                      >About Us</Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Appointment() {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  useEffect(() => {
    const now = new Date();
    setCurrentDate(now.toLocaleDateString());
    setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setSelectedDate(tomorrow.toISOString().split('T')[0]);
    setSelectedTime('10:00');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment request submitted! We will contact you shortly to confirm.');
  };

  return (
    <div className="container-fluid py-4 mt-3" style={{backgroundColor:'#fff0f0'}} data-aos='fade-up' id='bookappoinment'>
      <div className="card border-0 shadow-sm mx-auto" style={{ maxWidth: '1000px' }}>
        <div className="card-header bg-danger text-white text-center">
          <h5 className="mb-1">Book Appointment</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="tel" className="form-control" id="phone" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="treatment" className="form-label">Treatment</label>
                <select className="form-select" id="treatment" required>
                  <option value="">Select...</option>
                  <optgroup label="Skin">
                    <option value="facial">Facial</option>
                    <option value="acne">Acne</option>
                    <option value="glow">Glow</option>
                  </optgroup>
                  <optgroup label="Hair">
                    <option value="hairfall">Hair Fall</option>
                    <option value="dandruff">Dandruff</option>
                    <option value="scalp">Scalp</option>
                  </optgroup>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="appointmentDate" className="form-label">Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="appointmentDate"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="appointmentTime" className="form-label">Time</label>
                <input
                  type="time"
                  className="form-control"
                  id="appointmentTime"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  required
                />
              </div>
              <div className="col-12">
                <label htmlFor="notes" className="form-label">Notes</label>
                <textarea className="form-control" id="notes" rows="2" placeholder="Optional" />
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-3">
              <small className="text-muted">* Confirmation by email</small>
              <button type="submit" className="btn btn-danger btn-sm">Submit</button>
            </div>
          </form>
        </div>
      </div>

      <div className="card mt-4 border-0 shadow-sm mx-auto" style={{ maxWidth: '1000px' }}>
        <div className="card-body py-2 px-3">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <small className="fw-bold">Need help?</small>
              <div className="text-muted small">Call: (+91) 80987 56789</div>
            </div>
            <button
  className="btn btn-outline-danger btn-sm"
  onClick={() => window.location.href = 'tel:+91 80987 56789'}
>
  Contact
</button>
          </div>
        </div>
      </div>
    </div>
  );
}

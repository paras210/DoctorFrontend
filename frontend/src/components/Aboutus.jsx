import React from 'react';
import image from '../services/big2.jpg'
export default function AboutAndFeatures() {
  return (
    <div>
      {/* About Us Section */}
      <div className=" container-xxl bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">About Us</h2>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 text-center">
              <img src={image} alt="HealthLink" className="img-fluid rounded shadow" />
            </div>
            <div className="col-lg-6">
              <p className="lead">
                HealthLink is your trusted partner in healthcare, bridging the gap between patients and healthcare providers with a user-friendly platform. Our mission is to empower individuals with the tools they need to manage their health efficiently. From finding top doctors to booking appointments, accessing pharmacy services, and scheduling health checkups, HealthLink is your one-stop solution for all your healthcare needs.
              </p>
              <p className="lead">
                Our platform is designed with you in mind, ensuring a seamless and personalized healthcare experience. Whether you're at home or on the go, HealthLink brings healthcare to your fingertips, making it easier than ever to take control of your well-being.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Features</h2>
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 border-0 shadow">
                <div className="card-body">
                  <i className="bi bi-search fs-1 mb-3 text-primary"></i>
                  <h5 className="card-title">Doctor Search</h5>
                  <p className="card-text">Easily find and connect with top-rated doctors in your area.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 border-0 shadow">
                <div className="card-body">
                  <i className="bi bi-calendar-check fs-1 mb-3 text-success"></i>
                  <h5 className="card-title">Appointment Booking</h5>
                  <p className="card-text">Book appointments online with just a few clicks, anytime, anywhere.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 border-0 shadow">
                <div className="card-body">
                  <i className="bi bi-capsule fs-1 mb-3 text-danger"></i>
                  <h5 className="card-title">Pharmacy Services</h5>
                  <p className="card-text">Order prescriptions and over-the-counter medications from trusted pharmacies.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 border-0 shadow">
                <div className="card-body">
                  <i className="bi bi-heart-pulse fs-1 mb-3 text-warning"></i>
                  <h5 className="card-title">Health Checkups</h5>
                  <p className="card-text">Schedule regular health checkups and diagnostic tests with ease.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

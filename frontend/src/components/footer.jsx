import React from 'react'

export default function footer() {
    return (
        <div className='color1 py-4 mt-5' >
         <footer className=" text-white pt-4 pb-2 ">
    <div className="container">
        <div className="row">
            <div className="col-md-4 mb-3">
                <h5 className="text-uppercase">About Us</h5>
                <p>At HealthLink, we believe doctors are lifesavers and should be easily accessible. Our digital solution empowers patients to book appointments anytime, anywhere. Features include finding doctors based on specialty, locating nearby doctors, and receiving appointment confirmations instantly.</p>
            </div>
            <div className="col-md-4 mb-3">
                <h5 className="text-uppercase">Features</h5>
                <ul className="list-unstyled">
                    <li><i className="bi bi-check-circle me-2"></i> Find doctors by specialty</li>
                    <li><i className="bi bi-check-circle me-2"></i> Locate doctors near you</li>
                    <li><i className="bi bi-check-circle me-2"></i> Book appointments with ease</li>
                    <li><i className="bi bi-check-circle me-2"></i> Receive instant confirmation notifications</li>
                </ul>
            </div>
            <div className="col-md-4 mb-3">
                <h5 className="text-uppercase">Contact Us</h5>
                <ul className="list-unstyled">
                    <li><i className="bi bi-envelope me-2"></i> <a href="mailto:support@healthlink.com" className="text-white">support@healthlink.com</a></li>
                    <li><i className="bi bi-phone me-2"></i> +1 (123) 456-7890</li>
                    <li><i className="bi bi-geo-alt me-2"></i> 123 HealthLink Ave, Wellness City, HC 56789</li>
                </ul>
            </div>
        </div>
        <div className="text-center mt-4">
            <p className="mb-0">&copy; 2024 HealthLink. All Rights Reserved.</p>
            <p><a href="#privacy" className="text-white">Privacy Policy</a> | <a href="#terms" className="text-white">Terms of Service</a></p>
        </div>
    </div>
</footer>





        </div>
    )
}

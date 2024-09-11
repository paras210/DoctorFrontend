import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-auto">
      <div className="container text-center">
        <p className="mb-0">&copy; 2024 MediLocate. All Rights Reserved.</p>
        <p className="mb-0">
          <a href="#privacy" className="text-white">Privacy Policy</a> | 
          <a href="#terms" className="text-white">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}

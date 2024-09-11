import React from 'react';
import img1 from '../images/c1.jpg';
import img2 from '../images/c2.jpg';
import img3 from '../images/c8.jpg';
import img5 from '../images/c5.jfif';
import img6 from '../images/c6.jpg';
import img7 from '../images/c7.jfif';
import img8 from '../services/new3.jpg';
import img9 from '../images/c9.jfif';
import img11 from '../images/c10.jpg';

export default function Carousel() {
  return (
    <div className="container-xxl p-0 custom-max-height">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100 img-fluid h-100" alt="..." />
          </div>
          <div className="carousel-item ">
            <img src={img3} className="d-block w-100 img-fluid h-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100 img-fluid h-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img5} className="d-block w-100 img-fluid h-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img6} className="d-block w-100 img-fluid h-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img7} className="d-block w-100 img-fluid h-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img8} className="d-block w-100 img-fluid h-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img9} className="d-block w-100 img-fluid h-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img11} className="d-block w-100 img-fluid h-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

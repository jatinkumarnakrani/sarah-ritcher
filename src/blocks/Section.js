import React, { useEffect } from 'react';
import 'glightbox/dist/css/glightbox.min.css';
import GLightbox from 'glightbox';
import sectionImg from '../assets/img/hero-img.png';

function Section() {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.glightbox',
      touchNavigation: false,
      keyboard: false,
      closeButton: false,
      prevArrow: false,
      nextArrow: false,
    });

    return () => {
      lightbox.destroy();
    };
  }, []);
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
            <h1>Better Solutions For Your Business</h1>
            <h2>We are team of talented designers making websites with Bootstrap</h2>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <a href="#about" className="btn-get-started scrollto">Get Started</a>
              <a href="https://www.youtube.com/watch?v=R_2UFrmNUVY" className="glightbox btn-watch-video"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
            <img src={sectionImg} className="img-fluid animated" alt="" />
          </div>
        </div>
      </div>
  </section>
  );
}

export default Section;


import React, { useEffect } from 'react';

function AfterSection() {
  useEffect(() => {
    const backtotop = document.querySelector('.back-to-top');

    const toggleBackToTop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active');
      } else {
        backtotop.classList.remove('active');
      }
    };

    window.addEventListener('load', toggleBackToTop);
    window.addEventListener('scroll', toggleBackToTop);

    return () => {
      window.removeEventListener('load', toggleBackToTop);
      window.removeEventListener('scroll', toggleBackToTop);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <a variant="primary" className="back-to-top d-flex align-items-center justify-content-center" onClick={handleBackToTop}>
      <i class="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
}

export default AfterSection;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function BodyDiv() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <h1 data-aos="fade-up">Welcome</h1>
      <p data-aos="zoom-in">Lorem ipsum dolor sit amet.</p>
    </div>
  );
}

export default BodyDiv;
import ProgressBar from 'react-bootstrap/ProgressBar';
import React, { useEffect, useRef, useState } from 'react';

const Progressbar = ({ percentage }) => {
  const progressRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Adjust this value as needed
      }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);


  return (
    <div>
    <h1>Skills</h1>
    <ProgressBar
      now={80}
      variant="info"
      className={`progress-bar-container ${isVisible ? 'visible' : ''}`}
      ref={progressRef}
    >
      <ProgressBar now={percentage} variant="info" className="progress-bar-fill" />
    </ProgressBar>
  </div>
  );
};

export default Progressbar;

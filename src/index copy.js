import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'react-bootstrap';
import { Helmet } from 'react-helmet';

// import 'aos/dist/aos.css';
import './assets/css/index.css';

import Header from './blocks/Header';
import Section from './blocks/Section';
import Main from './blocks/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <Helmet>
        <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
        <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
        <link href="assets/css/index.css" rel="stylesheet" />
      </Helmet> */}
    <Header />
    <Section />
    <Main />
      <div id="preloader"></div>
        <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

        <script src="%PUBLIC_URL%/assets/vendor/aos/aos.js"></script>
        <script src="%PUBLIC_URL%/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="%PUBLIC_URL%/assets/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="%PUBLIC_URL%/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
        <script src="%PUBLIC_URL%/assets/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="%PUBLIC_URL%/assets/vendor/waypoints/noframework.waypoints.js"></script>
        <script src="%PUBLIC_URL%/assets/vendor/php-email-form/validate.js"></script>

        <script src="%PUBLIC_URL%/assets/js/main.js"></script>

  </React.StrictMode>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/css/index.css';


import Header from './blocks/Header';
import Selection from './blocks/Section';
import Main from './blocks/Main';
import Footer from './blocks/Footer';
import AfterSection from './blocks/AfterSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <Header />
    <Selection />
    <Main />
    <Footer />
    <AfterSection />
  </React.StrictMode>
);

reportWebVitals();

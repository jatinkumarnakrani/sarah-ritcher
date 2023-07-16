import { useState, useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import portfolio1 from '../../assets/img/portfolio/portfolio-1.jpg';
import portfolio2 from '../../assets/img/portfolio/portfolio-2.jpg';
import portfolio3 from '../../assets/img/portfolio/portfolio-3.jpg';
import portfolio4 from '../../assets/img/portfolio/portfolio-4.jpg';
import portfolio5 from '../../assets/img/portfolio/portfolio-5.jpg';
import portfolio6 from '../../assets/img/portfolio/portfolio-6.jpg';
import portfolio7 from '../../assets/img/portfolio/portfolio-7.jpg';
import portfolio8 from '../../assets/img/portfolio/portfolio-8.jpg';
import portfolio9 from '../../assets/img/portfolio/portfolio-9.jpg';

function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      filter: 'app',
      title: 'App 1',
      headTitle: 'App',
      imageSrc: portfolio1,
    },
    {
      id: 2,
      filter: 'web',
      title: 'Web 3',
      headTitle: 'Web',
      imageSrc: portfolio2,
    },
    {
      id: 3,
      filter: 'app',
      title: 'App 2',
      headTitle: 'App',
      imageSrc: portfolio3,
    },
    {
      id: 4,
      filter: 'card',
      title: 'Card 2',
      headTitle: 'Card',
      imageSrc: portfolio4,
    },
    {
      id: 5,
      filter: 'web',
      title: 'Web 2',
      headTitle: 'Web',
      imageSrc: portfolio5,
    },
    {
      id: 6,
      filter: 'app',
      title: 'App 3',
      headTitle: 'App',
      imageSrc: portfolio6,
    },
    {
      id: 7,
      filter: 'card',
      title: 'Card 1',
      headTitle: 'Card',
      imageSrc: portfolio7,
    },
    {
      id: 8,
      filter: 'card',
      title: 'Card 3',
      headTitle: 'Card',
      imageSrc: portfolio8,
    },
    {
      id: 9,
      filter: 'web',
      title: 'Web 3',
      headTitle: 'Web',
      imageSrc: portfolio9,
    },
  ];

  const tabItems = [
    { label: 'All', filter: 'all' },
    { label: 'App', filter: 'app' },
    { label: 'Card', filter: 'card' },
    { label: 'Web', filter: 'web' },
  ];

  const handleTabClick = (filter) => {
    setActiveTab(filter);
  };

  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.portfolio-lightbox',
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
    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <ul id="portfolio-flters" className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
          {tabItems.map((tab) => (
            <li key={tab.filter} 
                className={`nav-item ${activeTab === tab.filter ? 'filter-active' : ''}`}
                onClick={() => handleTabClick(tab.filter)}
              >
              {tab.label}
            </li>
          ))}
        </ul>
        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
        {portfolioItems
          .filter((item) => activeTab === 'all' || item.filter === activeTab)
          .map((item) => (
            <div key={item.id} className={`col-lg-4 col-md-6 portfolio-item ${activeTab !== 'all' && item.filter !== activeTab ? 'hide' : ''}`}>
            {/* <div key={item.id} className="col-lg-4 col-md-6 portfolio-item"> */}
              <div className="portfolio-img"><img src={item.imageSrc} className="img-fluid" alt="" /></div>
              <div className="portfolio-info">
                <h4>{item.title}</h4>
                <p>{item.headTitle}</p>
                <a href={portfolio1} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title={item.title}><i className="bx bx-plus"></i></a>
                <a href="#" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Portfolio;

import { useState, useRef, useEffect } from 'react';
import WhyUsBgImg from "../../assets/img/why-us.png";
import { Accordion } from 'react-bootstrap';
function WhyUs() {
  const [activeKey, setActiveKey] = useState('0');
  const [heights, setHeights] = useState([]);

  const contentRefs = useRef([]);

  const handleToggle = (eventKey) => {
    setActiveKey((prevKey) => (prevKey === eventKey ? null : eventKey));
  };

  const isItemOpen = (eventKey) => {
    return activeKey === eventKey;
  };

  useEffect(() => {
    const updatedHeights = contentRefs.current.map((ref, index) => {
      if (isItemOpen(index.toString())) {
        return `${ref.scrollHeight}px`;
      } else {
        return '0px';
      }
    });

    setHeights(updatedHeights);
  }, [activeKey]);

  const handleTransitionEnd = (event, index) => {
    if (!isItemOpen(index.toString())) {
      const updatedHeights = [...heights];
      updatedHeights[index] = '0px';
      setHeights(updatedHeights);
    }
  };

  return (
    <section id="why-us" className="why-us section-bg">
      <div className="container-fluid" data-aos="fade-up">

        <div className="row">

          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

            <div className="content">
              <h3>Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong></h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
            </div>

            {/* <div className="accordion-list">
              <ul>
                <li>
                <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span> Non consectetur a erat nam at lectus urna duis? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                    <p>
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                    </p>
                  </div>
                </li>
                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span> Feugiat scelerisque varius morbi enim nunc? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                    </p>
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> Dolor sit amet consectetur adipiscing elit? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                    </p>
                  </div>
                </li>

              </ul>
            </div> */}

            <div className="accordion-list">
              <ul>
                <li>
                  <a className={`collapse ${isItemOpen('0') ? '' : 'collapsed'}`} onClick={() => handleToggle('0')} >
                    <span>01</span> Non consectetur a erat nam at lectus urna duis?{' '}
                    <i className={`bx ${isItemOpen('0') ? 'bx-chevron-up' : 'bx-chevron-down'} icon-show`} ></i>
                    <i className={`bx ${isItemOpen('0') ? 'bx-chevron-up' : 'bx-chevron-down'} icon-close`} ></i>
                  </a>
                  <div className={`collapse ${isItemOpen('0') ? 'show' : ''}`} style={{ height: heights[0], transition: 'height 0.5s ease' }} ref={(el) => (contentRefs.current[0] = el)} onTransitionEnd={(event) => handleTransitionEnd(event, 0)} >
                    <p> Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                    </p>
                  </div>
                </li>
                <li>
                  <a className={`collapse ${isItemOpen('1') ? '' : 'collapsed'}`} onClick={() => handleToggle('1')} >
                    <span>02</span> Non consectetur a erat nam at lectus urna duis?{' '}
                    <i className={`bx ${isItemOpen('1') ? 'bx-chevron-up' : 'bx-chevron-down'} icon-show`} ></i>
                    <i className={`bx ${isItemOpen('1') ? 'bx-chevron-up' : 'bx-chevron-down'} icon-close`} ></i>
                  </a>
                  <div className={`collapse ${isItemOpen('1') ? 'show' : ''}`} style={{ height: heights[1], transition: 'height 0.5s ease' }} ref={(el) => (contentRefs.current[1] = el)} onTransitionEnd={(event) => handleTransitionEnd(event, 1)} >
                    <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. </p>
                  </div>
                </li>
                <li>
                  <a className={`collapse ${isItemOpen('2') ? '' : 'collapsed'}`} onClick={() => handleToggle('2')} >
                    <span>03</span> Non consectetur a erat nam at lectus urna duis?{' '}
                    <i className={`bx ${isItemOpen('2') ? 'bx-chevron-up' : 'bx-chevron-down'} icon-show`} ></i>
                    <i className={`bx ${isItemOpen('2') ? 'bx-chevron-up' : 'bx-chevron-down'} icon-close`} ></i>
                  </a>
                  <div className={`collapse ${isItemOpen('2') ? 'show' : ''}`} style={{ height: heights[2], transition: 'height 0.5s ease' }} ref={(el) => (contentRefs.current[2] = el)} onTransitionEnd={(event) => handleTransitionEnd(event, 2)} >
                    <p> Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
          <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{backgroundImage: `url(${WhyUsBgImg})`}} data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
        </div>

      </div>
    </section>
  );
}

export default WhyUs;

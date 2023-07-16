import team1 from '../../assets/img/team/team-1.jpg';
import team2 from '../../assets/img/team/team-2.jpg';
import team3 from '../../assets/img/team/team-3.jpg';
import team4 from '../../assets/img/team/team-4.jpg';
import { RiTwitterFill, RiFacebookFill, RiInstagramFill, RiLinkedinBoxFill } from 'react-icons/ri';


function Team() {
  return (
    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Team</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">

          <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src={team1} className="img-fluid" alt="" /></div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"><RiTwitterFill /></i></a>
                  <a href=""><i className="ri-facebook-fill"><RiFacebookFill /></i></a>
                  <a href=""><i className="ri-instagram-fill"><RiInstagramFill /></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"><RiLinkedinBoxFill /></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src={team2} className="img-fluid" alt="" /></div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
                <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"><RiTwitterFill /></i></a>
                  <a href=""><i className="ri-facebook-fill"><RiFacebookFill /></i></a>
                  <a href=""><i className="ri-instagram-fill"><RiInstagramFill /></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"><RiLinkedinBoxFill /></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src={team3} className="img-fluid" alt="" /></div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
                <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"><RiTwitterFill /></i></a>
                  <a href=""><i className="ri-facebook-fill"><RiFacebookFill /></i></a>
                  <a href=""><i className="ri-instagram-fill"><RiInstagramFill /></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"><RiLinkedinBoxFill /></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src={team4} className="img-fluid" alt="" /></div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
                <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"><RiTwitterFill /></i></a>
                  <a href=""><i className="ri-facebook-fill"><RiFacebookFill /></i></a>
                  <a href=""><i className="ri-instagram-fill"><RiInstagramFill /></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"><RiLinkedinBoxFill /></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Team;

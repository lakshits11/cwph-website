import "./HomePage.css";
import sectionHeaderImage from "../../images/wellness2.jpg";
import passportPhoto from "../../images/passportPhoto.jpg";
import WellnessCards from "./WellnessCards";
import Quotes from "../Quotes/Quotes";

import CountDownTimer from "../Timer/Timer";

const HomePage = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div
                className="header-text caption"
                style={{ background: "transparent" }}
              >
                <h1 className="welcome">
                  Welcome to Center For Wellness and Positive Health
                </h1>
                <div className="description">
                  When you are joyful, when you say yes to life and have fun and
                  project positivity all around you, you become a sun in the center
                  of every constellation, and people want to be near you!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header">
                <div className="section-heading-content">
                  <h2>What and why is CWPH</h2>
                  <p>
                    The centre for Wellness and Positive Health aims to inculcate
                    good habits as well as infuse positive and powerful thoughts
                    among our students and others so that they could develop a
                    healthy body and a sound mind necessary for a complete all round
                    holistic and moral development of their personality
                  </p>
                </div>
                <div className="section-heading-image">
                  <img src={sectionHeaderImage} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WellnessCards />
      <div className="features-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>What&apos;s Happening?</h2>
                <span>These are the events lined up for upcoming weeks.</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item">
                <div className="icon">
                  <img
                    src="https://www.thestatesman.com/wp-content/uploads/2020/04/addiction.jpg"
                    alt=""
                  />
                </div>
                <div style={{ width: "60%" }}>
                  <h4>Workshop on Alternative therapy</h4>
                  <p>
                    <CountDownTimer />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item">
                <div className="icon">
                  <img
                    src="https://www.thestatesman.com/wp-content/uploads/2020/04/addiction.jpg"
                    alt=""
                  />
                </div>
                <div style={{ width: "60%" }}>
                  <h4>Workshop on Alternative therapy</h4>
                  <p>
                    <CountDownTimer />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item">
                <div className="icon">
                  <img
                    src="https://www.thestatesman.com/wp-content/uploads/2020/04/addiction.jpg"
                    alt=""
                  />
                </div>
                <div style={{ width: "60%" }}>
                  <h4>Workshop on Alternative therapy</h4>
                  <p>
                    <CountDownTimer />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item">
                <div className="icon">
                  <img
                    src="https://www.thestatesman.com/wp-content/uploads/2020/04/addiction.jpg"
                    alt=""
                  />
                </div>
                <div style={{ width: "60%" }}>
                  <h4>Workshop on Alternative therapy</h4>
                  <p>
                    <CountDownTimer />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Head Team Section Starts -->  */}
      <section className="team_area section_gap" id="team_area">
        <div className="container py-4">
          <div className="main_title text-center">
            <h2>People You May Know</h2>
            <p>Contact Details of our Counsellors, Faculty, Staff and Alumini</p>
          </div>
          <div className="row team_inner pt-4">
            <div className="col-lg-3 col-md-6">
              <div className="team_item">
                <div className="team_img">
                  <img
                    className="img-fluid"
                    src={passportPhoto}
                    alt=""
                    style={{ width: "67%" }}
                  />
                </div>
                <div className="team_name">
                  <h4>Dr. Amit Neogi</h4>
                  <p>Center Lead</p>
                  <p className="mt-20">
                    So seed seed green that winged cattle in kath moved us land years
                    living.
                  </p>
                  <div className="social">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-envelope-o"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="team_item">
                <div className="team_img">
                  <img
                    className="img-fluid"
                    src={passportPhoto}
                    alt=""
                    style={{ width: "67%" }}
                  />
                </div>
                <div className="team_name">
                  <h4>Prof. A.P. Singh</h4>
                  <p>Faculty</p>
                  <p className="mt-20">
                    So seed seed green that winged cattle in kath moved us land years
                    living.
                  </p>
                  <div className="social">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-envelope-o"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="team_item">
                <div className="team_img">
                  <img
                    className="img-fluid"
                    src={passportPhoto}
                    alt=""
                    style={{ width: "67%" }}
                  />
                </div>
                <div className="team_name">
                  <h4>Mr. Manuj Sharma</h4>
                  <p>Training and Placement Officer</p>
                  <p className="mt-20">
                    So seed seed green that winged cattle in kath moved us land years
                    living.
                  </p>
                  <div className="social">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-envelope-o"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="team_item">
                <div className="team_img">
                  <img
                    className="img-fluid"
                    src={passportPhoto}
                    alt=""
                    style={{ width: "67%" }}
                  />
                </div>
                <div className="team_name">
                  <h4>Mr. Mukesh Jadon</h4>
                  <p>Faculty</p>
                  <p className="mt-20">
                    So seed seed green that winged cattle in kath moved us land years
                    living.
                  </p>
                  <div className="social">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fa fa-envelope-o" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Quotes />
    </div>
  );
};

export default HomePage;

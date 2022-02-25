import { Tab, Tabs, Fade } from "react-bootstrap";
import "./About.css";

const About = () => {
  const style = {
    color: "#000",
  };
  const style2 = {
    fontWeight: "bold",
  };
  return (
    <div>
      <div className="page-heading header-text about-image">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 style={style}>About Us</h1>
              <p style={style}>
                <a style={style} href="/">
                  Home
                </a>{" "}
                / <span style={style}>About Us</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us">
        <div className="container">
          <div className="row w-100 mx-auto">
            <div className="col-md-6 order-1 order-2">
              <div className="section-heading">
                <span>About Our College</span>
                <h2>About The LNMIIT</h2>
                <p>
                  Located in Jaipur,{" "}
                  <b>The LNM Institute of Information Technology</b> was founded as a
                  public-private partnership joint venture between the Government of
                  Rajasthan and Lakshmi and Usha Mittal Foundation. Accredited with
                  an <b>&apos;A&apos;</b> Grade by NAAC, and recognised by the UGC as
                  a deemed-to-be university under Section 3 of the UGC Act, 1956, all
                  the engineering courses offered by the institute are recognised by
                  ACITE. The institute offers merit-based admission to 2 UG, 1
                  Integrated, 2 PG and 1 doctorate programme (BTech, BTech (Hons),
                  BTech-MTech Integrated, MTech, MS by Research, MSc and PhD) across
                  six departments and 26 specialisations, namely Computer Science and
                  Engineering, Electronics and Communication Engineering,
                  Mechanical-Mechatronics Engineering, Mathematics, Physics and
                  Humanities and Social Sciences.
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex order-2">
              <div className="image m-auto">
                <img src="/images/lnmiit-drone-view.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6 d-flex order-md-3 order-4 mt-5">
              <div className="image m-auto">
                <img
                  src="https://admissions.lnmiit.ac.in/assets/img/gallery/big/360%20VIEW%20OF%20LNMIIT.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 order-md-4 order-3 mt-5">
              <div className="text">
                {/* <h2 style={style2}>About The CWPH</h2> */}
                <p>
                  Established in 2002, the LNMIIT Jaipur has been ranked second in
                  Rajasthan among private Engineering institutes by Education World
                  (2021), ranked third in private Engineering colleges with best
                  placements by India Today (2021) and ranked fifth in private
                  Engineering colleges (North Zone) by The Week (2020).{" "}
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-5 order-5">
              <div className="section-heading">
                <span>About us</span>
                <h2>About CWPH-LNMIIT</h2>
                <p>
                  Prof. Rahul Banerjee, Director, The LNM Institute of Information
                  Technology, Jaipur has established an array of centers of
                  excellence after joining the institute. These centers provide
                  various opportunities to faculty and students, to hone their
                  research skills and contribute to the betterment of society.
                  Formation of the{" "}
                  <b>LNMIIT- Center for Wellness and Positive Health (L- CWPH)</b>{" "}
                  was a commendable step in ensuring the betterment of the institute
                  and society at large. It aims to infuse positive vibes among the
                  people, which helps in maintaining their physical and mental
                  health. The members of this center always strive to bring
                  positivity in the lives of the people by various means like yoga,
                  meditation, informal chats, and many others. As it is rightly said
                  that a place is lively only when its inhabitants are lively, this
                  center tries to make the institute premises as lively as possible,
                  so that the new members of the LNMIIT family, i.e. freshers batch,
                  never feels lonely or dull when they leave their homes for the
                  first time. In fact, the center tries to make students feel as
                  comfortable in the institute as they were at their parents’ place
                  by creating an atmosphere of happiness and friendliness throughout
                  the institute.
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-5 d-flex order-6">
              <div className="image m-auto" style={{ width: "80%" }}>
                <img src="/images/team-images/rahul-banerjee-sir.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6 d-flex order-md-7 order-8 mt-5">
              <div className="image m-auto">
                <img src="/images/cwph-logo.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6 order-md-8 order-7 mt-5">
              <div className="section-heading">
                {/* <span>About us</span> */}
                <h2 style={style2}>Vision Mission Statement</h2>
                <p>
                  The Center for Wellness and Positive Health aims to inculcate good
                  habits thereby infusing positive and powerful thoughts among our
                  students and others, so that they could develop a healthy body and
                  a sound mind necessary for a complete all round holistic and moral
                  development of their personality.
                </p>
                <br />
                <p>
                  Our Vision is to create a society of happy, contented and
                  productive people
                </p>
                <br />
                <p>
                  It is our mission to create a healthy interactive platform which
                  will infuse positivity and contentment among students, faculty and
                  staff in campus as well as outside leading to enthusiasm,
                  creativity and growth
                </p>
              </div>
            </div>
            <div className="col-md-6 order-9 mt-5">
              <div className="text">
                <h2 style={style2}>Objectives</h2>
                <br />
                <p>
                  <h5 style={style2}>1. Develop Healthy Body</h5>
                  <ul>
                    <li className="about-list-item">
                      Be highly energetic and enthusiastic for any task.
                    </li>
                    <li className="about-list-item">
                      Understand the role of proper nutrition in maintaining good
                      health.
                    </li>
                    <li className="about-list-item">
                      Understand the role of physical exercise, yoga, and other
                      techniques in maintaining good health.
                    </li>
                    <li className="about-list-item">
                      Beware of the serious detrimental effects of smoking, drinking
                      alcoholand other banned substances.{" "}
                    </li>
                  </ul>
                  <br />
                  <h5 style={style2}>2. Develop Sound Mind</h5>
                  <ul>
                    <li className="about-list-item">
                      Develop strong mind and will power to undertake any challenge.
                    </li>
                    <li className="about-list-item">
                      Develop right attitude to face difficulties and failures in
                      life.
                    </li>
                    <li className="about-list-item">
                      Develop good concentration, memory, and mental activity in
                      students.
                    </li>
                    <li className="about-list-item">
                      Be Happy, contented, and cheerful in every situation.{" "}
                    </li>
                  </ul>
                  <br />
                  <h5 style={style2}>3. Infuse Moral Values</h5>
                  <ul>
                    <li className="about-list-item">Be honest with our own self.</li>
                    <li className="about-list-item">
                      Be responsible and sincere in performing one’s duty.
                    </li>
                    <li className="about-list-item">
                      Develop respect for others and their opinions.
                    </li>
                    <li className="about-list-item">
                      Develop patience, perseverance, humility and unselfishness.{" "}
                    </li>
                  </ul>
                  <br />
                  <h5 style={style2}>4. Do Good to others</h5>
                  <ul>
                    <li className="about-list-item">
                      Serve the society/needy and take part in philanthropic
                      activities whenever possible.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex order-10 mt-5">
              <div className="image m-auto">
                <img
                  src="/images/team-images/objectives_supporting_photo.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 d-flex order-11 mt-5">
              <div className="image m-auto">
                <img
                  src="/images/future_plan.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 order-12 mt-5">
              <div className="text">
                <h2 style={style2}>Our Future Plan</h2>
                <br />
                <p>
                  <ul>
                    <li className="about-list-item">
                      Organizing more workshops on meditation as well as on balancing mind, body and spirit to bring an all 
                      round holistic development of an individual.
                    </li>
                    <li className="about-list-item">
                      Organize competitions like Healthy Food competition in 
                      LNMIIT community and outside.
                    </li>
                    <li className="about-list-item">
                      Inspire student clubs to organize functions and competitions 
                      of social importance.
                    </li>
                    <li className="about-list-item">
                      Start some healthy shops of juices and nutritious foods 
                      in the campus.
                    </li>
                    <li className="about-list-item">
                      Start some medical service activities in nearby villages.
                    </li>
                    <li className="about-list-item">
                      Device some techniques to help street dwellers in severe winter.
                    </li>
                    <li className="about-list-item">
                      Start some useful courses from CWPH which will help our students 
                      develop healthy body and sound mind
                    </li>
                    <li className="about-list-item">
                      Engage students in more societal work so that moral values are 
                      inculcated into their character.
                    </li>
                    <li className="about-list-item">
                    Construction of a Physical building for Center for Wellness and 
                    Positive Health: It will have a well ventilated room for meditation, 
                    a small seminar room for discussion as well as for online viewing 
                    of YouTube videos along with a small library which will contain 
                    good books to elevate the mind and spirit of an individual.
                    </li>
                  </ul>
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React, {useState, useEffect} from "react";
import { Tab, Tabs, Row, Col, Nav, Sonnet, Fade } from "react-bootstrap";
import "./Team.css";
import { teamList } from "./teamList";


const Team = () => {
  const style = {
    color: "#000",
  };

  // const [team_list, set_team_list] = useState()

  // useEffect(() => {
  //   set_team_list(teamList)
  // })

  return (
    <div>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 style={style}>Our Team</h1>
              <p style={style}>
                <a style={style} href="/">
                  Home
                </a>{" "}
                / <span style={style}>Team</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Heading Ends Here --> */}

      {/* <!-- About Us Starts Here --> */}
      <div className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="left-image">
                <img src="images/team-images/cwph-team-photo.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-content">
                <div className="section-heading">
                  <span>About Us</span>
                  <h2>Background of our company</h2>
                  <p>
                    Duis sit amet nibh non sapien tincidunt bibendum. Curabitur
                    rutrum justo id leo ornare, suscipit lobortis augue volutpat. Sed
                    ligula arcu, interdum eu magna eget, tristique aliquet nibh.
                  </p>
                </div>
                <Tabs
                  defaultActiveKey="home"
                  transition={Fade}
                  className="mb-3"
                  variant="tabs"
                >
                  <Tab eventKey="home" title="Our Goal" className="myTabs">
                    The Centre for Wellness and Positive Health aims to inculcate
                    good habits thereby infusing positive and powerful thoughts among
                    our students and others, so that they could develop a healthy
                    body and a sound mind necessary for a complete all round holistic
                    and moral development of their personality.
                  </Tab>
                  <Tab eventKey="profile" title="Our Vision">
                    Create an environment of contentment both physically and mentally
                    so as to help people take up challenging tasks either in academia
                    or social domain and contribute to the humanity at large.
                  </Tab>
                  <Tab eventKey="contact" title="Our Mission">
                    Center will pursue the motto of ‘Healthy mind in healthy body’,
                    thus it will try to convince people to follow healthy lifestyle
                    that includes practicing yoga, positive thinking, meditation,
                    etc. and involve them in their daily routine, along with
                    developing a feeling of oneness for the human beings that will
                    help in living a happy and satisfied life.
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About Us Ends Here --> */}

      {/* <!-- Team Starts Here --> */}
      <div className="team-section">
        <div className="container-fluid">
          <div className="row justify-content-center">
            
            <div className="col-md-8">
              <div className="section-heading">
                <span>Our Team</span>
                <h2>Meet the greatest people</h2>
                <p>
                  Integer blandit, tellus varius vulputate cursus, purus orci
                  tincidunt tortor, eget tincidunt elit justo non leo. Donec mollis
                  nulla id est suscipit, ut laoreet nibh faucibus.
                </p>
              </div>
            </div>
            {teamList.map((team, i) => (
              <div className="row justify-content-center" key={i} style={{width: '90%'}}>
                <div className="w-100 text-center mb-4">
                  <h4>{team.designation}</h4>
                </div>
                {team.list.map((member, j) => (
                  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={j}>
                    <div className="team-item">
                      <img
                        src={member.image}
                        style={{ width: "60%" }}
                        alt=""
                      />
                      <div className="down-content">
                        <h4>{member.name}</h4>
                        <span>{member.responsibility}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
            <div className="row justify-content-center" style={{width: '90%'}}>
            <div className="w-100 text-center mt-4 mb-4">
              <h4>Student Members</h4>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="team-item">
                <div
                  style={{ textAlign: "start" }}
                  className="down-content down-content-student"
                >
                  <ul>
                    <li>Kaustubh Nirwan</li>
                    <li>Abhishek Kalra</li>
                    <li>Pranshu Ananya</li>
                    <li>Kartikay Johri</li>
                    <li>Abhimanyu Singh</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="team-item">
                <div
                  style={{ textAlign: "start" }}
                  className="down-content down-content-student"
                >
                  <ul>
                    <li>Aman Upadhyay</li>
                    <li>Shivansh Baijal</li>
                    <li>Ayush Agarwal</li>
                    <li>Lokesh Kumar Israni</li>
                    <li>Komal Kungwani</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="team-item">
                <div
                  style={{ textAlign: "start" }}
                  className="down-content down-content-student"
                >
                  <ul>
                    <li>Saurav Kishore</li>
                    <li>Anshu Musaddi</li>
                    <li>Harsh Mehta</li>
                    <li>Naman Mathur</li>
                    <li>Kheelan Kundalia</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="team-item">
                <div
                  style={{ textAlign: "start" }}
                  className="down-content down-content-student"
                >
                  <ul>
                    <li>Aabha Sharma</li>
                    <li>Sidhhant Umesh Sancheti</li>
                    <li>Pranshul Garg</li>
                    <li>Aishani Srivastava</li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team Ends Here --> */}
    </div>
  );
};

export default Team;

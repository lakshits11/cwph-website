import React from "react";
import "./Team.css";
import { teamList, studentList } from "./teamList";

const Team = () => {
  const style = {
    color: "#000",
  };

  return (
    <div>
      <div className="page-heading header-text team-image">
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
              <div className="left-image my-auto">
                <img
                  src="images/team-images/cwph-team-photo.png"
                  alt=""
                  className="w-100"
                  style={{
                    boxShadow: "1px 9px 12px 0 #b3b1b1",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
            <div className="col-md-6 mt-md-0 mt-4">
              <div className="right-content">
                <div className="section-heading">
                  {/* <span>About Us</span> */}
                  <h2>Meet the team.</h2>
                  <p>
                    Hello, meet our team at CWPH. We are a group of some 
                    students who are interested in working on social causes 
                    and helping others. The members of this center always 
                    strive to bring positivity in the lives of the people 
                    by various means like yoga, meditation, informal chats, 
                    and many others. The center tries to make students feel 
                    as comfortable in the institute as they were at their 
                    parents’ place by creating an atmosphere of happiness 
                    and friendliness throughout the institute. 
                  </p>
                </div>
                {/* <Tabs
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
                </Tabs> */}
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
                {/* <span>Our Team</span> */}
                <h2>Meet the greatest people</h2>
                <p>
                  Meet the members and co-ordinators of Center For Wellness and Positive Health.
                </p>
              </div>
            </div>
            {teamList.map((team, i) => (
              <div
                className="row justify-content-center"
                key={i}
                style={{ width: "90%" }}
              >
                <div className="w-100 text-center mb-4">
                  <h4>{team.designation}</h4>
                </div>
                {team.list.map((member, j) => (
                  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={j}>
                    <div className="team-item">
                      <img src={member.image} alt="" />
                      <div className="down-content">
                        <h4>{member.name}</h4>
                        <span>{member.responsibility}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
            {studentList.map((list,i) => (
              <div className="row justify-content-center" style={{ width: "90%" }} key={i}>
                <div className="w-100 text-center mt-4 mb-4">
                  <h4>{list.designation}</h4>
                </div>
                <div className="col-12 student-list">
                  <ul>
                    {list.name_list.map((student,j) => (
                      <li key={j}>{student.name}</li>
                    ))}
                  </ul>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <!-- Team Ends Here --> */}
    </div>
  );
};

export default Team;

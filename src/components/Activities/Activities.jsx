/* eslint-disable react/no-unescaped-entities */
import "./Activities.css";

function Activities() {
  const style = {
    color: "#000",
  };
  return (
    <div>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 style={style}>Activities</h1>
              <p style={style}>
                <a style={style} href="/">
                  Home
                </a>{" "}
                / <span style={style}>Activities</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="services-section services-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="activities-section-heading">
                <h2>Activities which our team has engaged in.</h2>
                <p>
                  Here are some of the activities in the past our team has been part
                  of and will continue to be.
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <h4>Upcoming Events</h4>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="service-item" style={{ padding: "0" }}>
                <img
                  className="actImage"
                  src="https://image.cnbcfm.com/api/v1/image/100900663-171960667r.jpg?v=1631568975&w=720&h=405"
                />
                <h4>Charity Work</h4>
                <p className="activitiesPara">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  soluta repellat molestias consequuntur illo, magnam ipsum
                  architecto est dignissimos assumenda odit, cumque exercitationem
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="service-item" style={{ padding: "0" }}>
                <img
                  className="actImage"
                  src="https://image.cnbcfm.com/api/v1/image/100900663-171960667r.jpg?v=1631568975&w=720&h=405"
                />
                <h4>Charity Work</h4>
                <p className="activitiesPara">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  soluta repellat molestias consequuntur illo, magnam ipsum
                  architecto est dignissimos assumenda odit, cumque exercitationem
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="service-item" style={{ padding: "0" }}>
                <img
                  className="actImage"
                  src="https://image.cnbcfm.com/api/v1/image/100900663-171960667r.jpg?v=1631568975&w=720&h=405"
                />
                <h4>Charity Work</h4>
                <p className="activitiesPara">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  soluta repellat molestias consequuntur illo, magnam ipsum
                  architecto est dignissimos assumenda odit, cumque exercitationem
                </p>
              </div>
            </div>
            <div className="col-md-12" style={{ marginTop: "10px" }}>
              <h4>Past Events</h4>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="service-item" style={{ padding: "0" }}>
                <img
                  className="actImage"
                  src="https://image.cnbcfm.com/api/v1/image/100900663-171960667r.jpg?v=1631568975&w=720&h=405"
                />
                <h4>Charity Work</h4>
                <p className="activitiesPara">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  soluta repellat molestias consequuntur illo, magnam ipsum
                  architecto est dignissimos assumenda odit, cumque exercitationem
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="service-item" style={{ padding: "0" }}>
                <img
                  className="actImage"
                  src="https://image.cnbcfm.com/api/v1/image/100900663-171960667r.jpg?v=1631568975&w=720&h=405"
                />
                <h4>Charity Work</h4>
                <p className="activitiesPara">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  soluta repellat molestias consequuntur illo, magnam ipsum
                  architecto est dignissimos assumenda odit, cumque exercitationem
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="service-item" style={{ padding: "0" }}>
                <img
                  className="actImage"
                  src="https://image.cnbcfm.com/api/v1/image/100900663-171960667r.jpg?v=1631568975&w=720&h=405"
                />
                <h4>Charity Work</h4>
                <p className="activitiesPara">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  soluta repellat molestias consequuntur illo, magnam ipsum
                  architecto est dignissimos assumenda odit, cumque exercitationem
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="learnMore">
                <button className="learnMore-button">Learn More</button>
            </div> */}
    </div>
  );
}

export default Activities;

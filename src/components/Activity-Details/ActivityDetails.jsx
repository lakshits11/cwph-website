import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ActivityDetails.css";

function ActivityDetails() {
  const event = useLocation();
  const event_details = event.state.state;
  const style = {
    color: "#000",
  };
  const style2 = {
    fontWeight: "bold",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [event]);
  return (
    <div>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 style={style}>Details</h1>
              <p style={style}>
                <a style={style} href="/">
                  Home
                </a>{" "}
                /{" "}
                <a style={style} href="/activities">
                  Activities
                </a>
                / <span style={style}>Details</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="event-image">
                <img src={event_details.image} alt="" />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="event-title">
                <span style={{color:"#00bcd4"}}>Event Details</span>
                <h2 style={style2}>{event_details.title}</h2>
              </div>
              {/* <div className='event-text'>
                <p>{event_details.text}</p>
              </div> */}
              <div>
                <p>{event_details.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityDetails;

import "./Developers.css";

function Developers() {
  const style = {
    color: "#000",
  };
  return (
    <div>
      <div className="page-heading developers-page">
        <div className="">
          <div className="row">
            <div className="col-md-12">
              <h1 className="glowing-heading" >Developers</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="services-section services-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="activities-section-heading">
                <h2 style={{ fontWeight: "bold" }}>
                  Hello, we are the developers of this site.
                </h2>
                <p>You can contact us on our social media and Linkedin.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="service-item"
                style={{
                  padding: "0",
                  paddingTop: "30px",
                  height: "33rem",
                  borderRadius: "50px",
                }}
              >
                {/* <img className="actImage" src="https://i.imgur.com/1SOLO5J.png" /> */}
                <div className="belowImage">
                  <img
                    className="actImage"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  />
                </div>
                <h3 style={{ fontWeight: "bold" }}>LAKSHIT SOMANI</h3>
                <p className="activitiesPara"></p>
                <div className="social">
                  <button>
                    <a href="https://www.linkedin.com/" target="none">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </button>
                  <button>
                    <a href="https://www.github.com/" target="none">
                      <i className="fa fa-github"></i>
                    </a>
                  </button>
                  <br />
                  <button>
                    <a href="https://www.twitter.com/" target="none">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </button>
                  <button>
                    <a href="https://www.instagram.com/" target="none">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="service-item"
                style={{
                  padding: "0",
                  paddingTop: "30px",
                  height: "33rem",
                  borderRadius: "50px",
                }}
              >
                <div className="belowImage">
                  <img
                    className="actImage"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  />
                </div>
                <h3 style={{ fontWeight: "bold" }}>RISHABH JAIN</h3>
                <p className="activitiesPara"></p>
                <div className="social">
                  <button>
                    <a href="https://www.linkedin.com/" target="none">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </button>
                  <button>
                    <a href="https://www.github.com/" target="none">
                      <i className="fa fa-github"></i>
                    </a>
                  </button>
                  <br />
                  <button>
                    <a href="https://www.twitter.com/" target="none">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </button>
                  <button>
                    <a href="https://www.instagram.com/" target="none">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </button>
                </div>
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

export default Developers;

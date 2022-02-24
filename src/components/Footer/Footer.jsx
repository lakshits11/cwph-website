import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="footer-item">
              <div className="footer-heading">
                <h2>About Us</h2>
              </div>
              <p>
                The members of this center always strive to bring positivity in the
                lives of the people by various means like yoga, meditation, informal
                chats, and many others. The center tries to make students feel as
                comfortable in the institute as they were at their parents’ place by
                creating an atmosphere of happiness and friendliness throughout the
                institute.
              </p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="footer-item">
              <div className="footer-heading">
                <h2>Useful Links</h2>
              </div>
              <ul className="footer-list">
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCg4Q0WuhLaEitFxmMTHt2EQ"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      src="/images/youtube.svg"
                      // src="https://img.icons8.com/color/25/000000/youtube-play.png"
                      style={{ marginRight: "10px", width: "25px" }}
                    />
                    Youtube
                  </a>
                </li>
                <li>
                  <a href="/developers" rel="noreferrer">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/b/be/Source_code_project_1171.svg"
                      style={{
                        marginRight: "10px",
                        width: "25px",
                        filter: "invert(90%)",
                      }}
                    />
                    Developers
                  </a>
                </li>
                {/* <li>
                  <a href="#">Light Speed Zone</a>
                </li>
                <li>
                  <a href="#">Content Delivery Network</a>
                </li>
                <li>
                  <a href="#">Customer Support</a>
                </li>
                <li>
                  <a href="#">Latest News</a>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="footer-item">
              <div className="footer-heading">
                <h2>More Information</h2>
              </div>
              <ul className="footer-list">
                <li>
                  Email:{" "}
                  <a href="mailto:cl.cwph@lnmiit.ac.in">cl.cwph@lnmiit.ac.in</a>
                </li>
                {/* <li>
                  Support: <a href="#">support@company.com</a>
                </li> */}
                <li>
                  Website: <a href="/">cwph-lnmiit.vercel.app</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-12">
            <div className="sub-footer">
              <p>
                Copyright &copy; 2022 <br />
                <a rel="nofollow" href="https://www.lnmiit.ac.in/">
                  The LNM Institute of Information technology
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

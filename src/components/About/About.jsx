import { Tab, Tabs, Fade } from "react-bootstrap";
import "./About.css";

const About = () => {
  const style = {
    color: "#000",
  };
  return(
    <div>
        <div className="page-heading header-text">
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
                            <span>About Us</span>
                            <h2>About The LNMIIT</h2>
                            <p>
                                Located in Jaipur,{" "}
                                <b>The LNM Institute of Information Technology</b> was founded as
                                a public-private partnership joint venture between the Government
                                of Rajasthan and Lakshmi and Usha Mittal Foundation. Accredited
                                with an <b>&apos;A&apos;</b> Grade by NAAC, and recognised by the
                                UGC as a deemed-to-be university under Section 3 of the UGC Act,
                                1956, all the engineering courses offered by the institute are
                                recognised by ACITE. The institute offers merit-based admission
                                to 2 UG, 1 Integrated, 2 PG and 1 doctorate programme (BTech,
                                BTech (Hons), BTech-MTech Integrated, MTech, MS by Research, MSc
                                and PhD) across six departments and 26 specialisations, namely
                                Computer Science and Engineering, Electronics and Communication
                                Engineering, Mechanical-Mechatronics Engineering, Mathematics,
                                Physics and Humanities and Social Sciences.
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
                            <img src="/images/nice_bg.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="col-md-6 order-md-4 order-3 mt-5">
                        <div className="text">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Perspiciatis dicta, sit odit minus, obcaecati totam animi
                                voluptatibus amet repellendus magni fuga provident soluta tempora
                                recusandae laboriosam. Deleniti quaerat libero, officia ipsam aut
                                nesciunt architecto, soluta ipsum, accusamus perspiciatis quae
                                voluptatum quo quisquam nulla mollitia. Quam sequi est eos dolore!
                                Dolore, soluta culpa illum aperiam fugit quam quod quas tempore
                                sint eveniet ullam debitis error. Harum nesciunt illum dolor
                                asperiores facilis molestias tempora animi eos neque fugiat. Cum
                                tempora amet iure?
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
                                was a commendable step in ensuring the betterment of the
                                institute and society at large. It aims to infuse positive vibes
                                among the people, which helps in maintaining their physical and
                                mental health. The members of this center always strive to bring
                                positivity in the lives of the people by various means like yoga,
                                meditation, informal chats, and many others. As it is rightly
                                said that a place is lively only when its inhabitants are lively,
                                this center tries to make the institute premises as lively as
                                possible, so that the new members of the LNMIIT family, i.e.
                                freshers batch, never feels lonely or dull when they leave their
                                homes for the first time. In fact, the center tries to make
                                students feel as comfortable in the institute as they were at
                                their parents’ place by creating an atmosphere of happiness and
                                friendliness throughout the institute.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5 d-flex order-6">
                        <div className="image m-auto" style={{width: '80%'}}>
                            <img src="/images/team-images/rahul-banerjee-sir.jpg" alt="" 
                            />
                        </div>
                    </div>
                    <div className="col-md-6 d-flex order-md-7 order-8 mt-5">
                        <div className="image m-auto">
                            <img src="/images/nice_bg.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="col-md-6 order-md-8 order-7 mt-5">
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
                                was a commendable step in ensuring the betterment of the
                                institute and society at large. It aims to infuse positive vibes
                                among the people, which helps in maintaining their physical and
                                mental health. The members of this center always strive to bring
                                positivity in the lives of the people by various means like yoga,
                                meditation, informal chats, and many others. As it is rightly
                                said that a place is lively only when its inhabitants are lively,
                                this center tries to make the institute premises as lively as
                                possible, so that the new members of the LNMIIT family, i.e.
                                freshers batch, never feels lonely or dull when they leave their
                                homes for the first time. In fact, the center tries to make
                                students feel as comfortable in the institute as they were at
                                their parents’ place by creating an atmosphere of happiness and
                                friendliness throughout the institute.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 order-9 mt-5">
                        <div className="text">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Perspiciatis dicta, sit odit minus, obcaecati totam animi
                                voluptatibus amet repellendus magni fuga provident soluta tempora
                                recusandae laboriosam. Deleniti quaerat libero, officia ipsam aut
                                nesciunt architecto, soluta ipsum, accusamus perspiciatis quae
                                voluptatum quo quisquam nulla mollitia. Quam sequi est eos dolore!
                                Dolore, soluta culpa illum aperiam fugit quam quod quas tempore
                                sint eveniet ullam debitis error. Harum nesciunt illum dolor
                                asperiores facilis molestias tempora animi eos neque fugiat. Cum
                                tempora amet iure?
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex order-10 mt-5">
                        <div className="image m-auto">
                            <img src="/images/lnmiit-drone-view.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
};

export default About;
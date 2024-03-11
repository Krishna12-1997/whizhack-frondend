import React from "react";
import "./AboutUs.css";
import lin from "../../asset/Icon (1).svg";
import mission_icon from "../../components/images/icons/mission_icon.svg";
import vision_icon from "../../components/images/icons/vision_icon.svg";
import useFetch from "../../hooks/useFetch";
import Loader from "../inc/Loader";
import AboutSlider from "../inc/AboutSlider";

const About = ({  }) => {

  const uri = "https://test.whizhack.com/api/about?_limit=5&populate=header.management,header.story,header.Advisor,header.alliance.strategicalliances,header.partnership, header.recognition.recognitions.button"; // Specify the URI for this page
  const { loading, error, data } = useFetch(uri);

  if (loading) {
    return <div><Loader loading={loading}/></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const header = data.attributes.header;
  const management = header.management;
  const story = header.story;

  if (data && data.attributes) {
    return (
      <>
        <div>
          <div
            key={data.id}
            className="jumbotron jumbotron-fluid"
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url(${data.attributes.header.bg_url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              zIndex: 0,
            }}
          >
            <div>
              <div
                className="heading mb-3"
                data-aos="fade-down"
                data-aos-delay="300"
                data-aos-duration={1500}
              >
                {data.attributes.header.title}
              </div>

              <p>
                <div
                  className="lead"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration={1500}
                >
                  {data.attributes.header.content}
                </div>
              </p>
            </div>
          </div>
        </div>

        <div>
          <section className="ourstory">
            <div className="container-fluid">
              <div className="row">
                <div
                  id="about"
                  className="col-lg-6 col-md-6 col-sm-12 mx-auto mt-2 mb-2 rounded text-left"
                  data-aos="fadeIn"
                >
                  <iframe
                    src={`https://www.youtube.com/embed/JQD3n2Rh1uM`}
                    title="YouTube Video"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>

                <div
                  className="col-lg-6 col-md-6 col-sm-12 mx-auto mt-2 mb-2 rounded "
                  data-aos="zoom-in"
                  style={{ padding: "2% 6%" }}
                >
                  <div className="about_story mb-2">
                    {data.attributes.header.story.title}
                  </div>
                  <div
                    style={{
                      width: "100%",
                      color: "#62666A",
                      fontSize: 16,
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    {data.attributes.header.story.content
                        .split("\n")
                        .map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div>
          <section className="management">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-md-8 col-sm-6 mx-auto mt-5 mb-4 pt-2 pb-2 ">
                  <div
                    className="management-bg"
                  >
                    Management Team
                  </div>
                </div>
              </div>
              <div>
                {management && Array.isArray(management) ? (
                  management.map((ab) => (
                    <div className="row" key={ab.id}>
                      <div
                        className="col-md-6 col-sm-12 mx-auto mt-2 mb-2 pt-2 pb-2 rounded p-3 text-center"
                        data-aos="fadeIn"
                      >
                        <img
                          src={ab.image_url}
                          alt=""
                          
                        />
                      </div>
                      <div
                        className="col-lg-6 col-md-6 col-sm-12 mx-auto mt-2 mb-2 pt-2 pb-2 rounded p-3 about-team-content"
                        data-aos="zoom-in"
                      >
                        <div
                          style={{
                            color: "#1D1D1D",
                            fontSize: 22,
                            fontWeight: "600",
                            wordWrap: "break-word",
                          }}
                        >
                          {ab.name}
                        </div>
                        <div
                          style={{
                            color: "#2C81FE",
                            fontSize: 20,
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {ab.position}
                        </div>
                        <div
                          style={{
                            width: "100%",
                            color: "#62666A",
                            fontSize: 16,
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {ab.description
                        .split("\n")
                        .map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                        </div>

                        <div
                          style={{
                            width: "100%",
                            position: "relative",
                          }}
                        >
                          <div className="linkdin" >
                            {" "}
                            <a href={ab.linkedin_url}>
                              <img src={lin} alt="" height="" width="100%" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No management data available.</p>
                )}
              </div>
            </div>
          </section>
        </div>

        <section className="about-vision-section">
          <div className="container">
            <div className="row mission-row justify-content-center">
              <div className="col-lg-6">
                <div
                  className="mission-content"
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration={1500}
                >
                  <p>
                    To be Ranked #1 Vertically Integrated Cyber Security
                    Innovation Player
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mission-vector">
                  <img src={mission_icon} alt="" />
                  <h4>MISSION</h4>
                </div>
              </div>
            </div>
            <div className="row vision-row justify-content-center">
              <div className="col-lg-6">
                <div className="vision-vector">
                  <img src={vision_icon} alt="" />
                  <h4>VISION</h4>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="vision-content"
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-duration={1500}
                >
                  <p>
                    Invest in Deep Research to create globally respected Digital
                    Products and Empowered Human Capital
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-8 col-sm-6 mx-auto mt-5 mb-4 pt-2 pb-2 advisor-title">
                <div
                  style={{
                    color: "#07002F",
                    fontSize: 40,
                    fontFamily: "Pulse",
                    fontWeight: "600",
                    wordWrap: "break-word",
                    textAlign: "center",
                  }}
                >
                  {header.Advisor.title}
                </div>
              </div>
            </div>

            <div className="row">
              <div
                className="col-md-6 col-sm-12 mx-auto mt-2 mb-2 pt-2 pb-2 rounded p-3 text-center"
                data-aos="fadeIn"
              >
                <img
                  src={header.Advisor.image_url}
                  alt="somitra"
                />
              </div>

              <div
                className="col-lg-6 col-md-6 col-sm-12 mx-auto mt-2 mb-2 pt-2 pb-2 rounded p-3 about-team-content"
                data-aos="zoom-in"
              >
                <div
                  style={{
                    color: "#1D1D1D",
                    fontSize: "22px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "normal",
                  }}
                >
                  {header.Advisor.name}
                </div>
                <div
                  style={{
                    color: "#2C81FE",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                  className="mt-2"
                >
                  {header.Advisor.position}
                </div>
                <div
                  style={{
                    color: "#1D1D1D",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                  className="mb-4"
                >
                  {header.Advisor.icon}
                </div>

                <div
                  style={{
                    color: "#62666A",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                  }}
                  className="mt-3"
                >
                  {header.Advisor.description
                        .split("\n")
                        .map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-8 col-sm-6 mx-auto mt-5 mb-4 pt-2 pb-2 ">
                <div
                  style={{
                    color: "#07002F",
                    fontSize: 40,
                    // fontFamily: "Pulse",
                    fontWeight: "600",
                    wordWrap: "break-word",
                    textAlign: "center",
                  }}
                >
                  {header.alliance.title}
                </div>
              </div>
            </div>
            <div className="row">
              {header.alliance.strategicalliances.data.map((alliance) => (
                <div
                  className="col-lg-4 col-md-8 col-sm-12 mx-auto mt-5 mb-4 pt-2 pb-2 text-center "
                  data-aos="fade-up"
                >
                  <div
                    className="shadow rounded p-5"
                    style={{ height: "100%" }}
                  >
                    <div className="mb-3">
                      <img
                        src={alliance.attributes.logo_url}
                        alt="IITJodhpur"
                        width="180px"
                        height="136px"
                      />
                    </div>
                    <div
                      style={{
                        color: "#1D1D1D",
                        // fontFamily: "Pulse",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "normal",
                      }}
                      className="mb-3"
                    >
                      {alliance.attributes.title}
                    </div>

                    <div
                      style={{
                        color: "#62666A",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                      }}
                    >
                      {alliance.attributes.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="about_section_partner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 mx-auto pt-2 pb-2 ">
                <div className="pratnership_text">
                  <div
                    style={{
                      color: "#07002F",
                      fontSize: "22px",
                      fontStyle: "normal",
                      fontWeight: 700,
                    }}
                    data-aos="fade-right"
                    data-aos-delay="300"
                    data-aos-duration={1500}
                  >
                    {header.partnership.title}
                  </div>

                  <div
                    style={{
                      marginTop: "20px",
                      color: "#62666A",
                      // fontFamily: "Satoshi",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 500,
                    }}
                    data-aos="fade-right"
                    data-aos-delay="300"
                    data-aos-duration={1500}
                  >
                    {header.partnership.description
                        .split("\n")
                        .map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                    <span
                      style={{ color: "#185893", textDecorationLine: "none" }}
                    >
                      {" "}
                      <a href="mailto:partnership@whizhack.com">
                        {header.partnership.color_title}
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <div className="pratnership">
                  <img
                    src={header.partnership.image_url}
                    alt="pratnership"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="recognition">
            <div className="">
              <div className="row" style={{ paddingTop: "60px" }}>
                <div className="col-md-12 col-sm-12 text-center mt-5">
                  <h2
                    style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "50px",
                    }}
                  >
                    {header.recognition.title}
                  </h2>
                </div>
              </div>

              <div className="container">
                <div className="recognition_card">
                  <AboutSlider
                    recongni={header.recognition.recognitions.data}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } 
};

export default About;

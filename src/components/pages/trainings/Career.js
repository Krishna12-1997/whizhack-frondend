import React from "react";
import service_banner_icon from "../../images/decors/service_banner_icon.png";
import "./career.css";
import Loader from "../../inc/Loader";
import useFetch from "../../../hooks/useFetch";

const Career = () => {

  const uri = "https://test.whizhack.com/api/career-pathway?populate=career_path_video, career_programs.duration, career_programs.module";
  const { loading, error, data } = useFetch(uri);

  if (loading) {
    return <div><Loader loading={loading}/></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div>
        <div
          className="career-banner-section"
          style={{
            background: `url(${data.attributes.bg_url})`,
            backgroundPosition: "center",
          }}
        >
          <img
            src={service_banner_icon}
            alt=""
            className="left-industry-banner-icon"
          />
          <img
            src={service_banner_icon}
            alt=""
            className="right-industry-banner-icon"
          />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="career-banner-title">
                  <h3
                    data-aos="fade-down"
                    data-aos-delay="300"
                    data-aos-duration={1500}
                  >
                    {data.attributes.title}
                  </h3>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration={1500}
                  >
                    {data.attributes.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="career-video">
        <div className="container">
          <div className="row">
            {data.attributes.career_path_video.map((video) => (
              <div className="col-lg-6 col-md-12 col-sm-12 mt-4">
                <iframe
                  width="100%"
                  height="334"
                  src={`${video.video_url}`}
                  title="YouTube Video"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="program">
        <div className="container">
          <div className="col-lg-12 col-md-12 col-sm-12 text-center">
            <h5 className="heading">WhizTeens Program</h5>
            <p className="test">
              Teenagers across the country will have the opportunity to crack
              codes, fix security flaws and examine the trails left behind by
              cybercriminals as part of a new learning experience they can take
              part in from home.
            </p>
          </div>
          {data.attributes.career_programs.data.map((program, index) => (
            <div className="row">
                <div className={`program-row ${index % 2 === 0 ? "even" : "odd"}`}>
              <div className="col-lg-5 col-md-12 col-sm-12 mt-4">
                <img
                  src={program.attributes.image_url}
                  alt="Program"
                  width="100%"
                  height="100%"
                />
              </div>

              <div className="col-lg-7 col-md-12 col-sm-12 mt-4">
                <div className="program-content">
                  <h4>{program.attributes.title}</h4>
                  <h6>{program.attributes.small_title}</h6>
                  <p>{program.attributes.description}</p>
                  <div className="program-duration">
                    <p className="duration">
                      {program.attributes.duration.title}
                    </p>
                    <p>{program.attributes.duration.description}</p>
                  </div>
                  <div className="program-modules">
                    <p>Syllabus :</p>
                    <ul>
                      {program.attributes.module.map((module) => (
                        <li>{module.title}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Career;

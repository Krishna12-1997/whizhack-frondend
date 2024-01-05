import React from "react";
import "../services/service.css";
import service_banner_icon from "../../images/decors/service_banner_icon.png";
import TestingSlider from "../../inc/ServiceTestingSlider";


export default function Service({ data }) {
  return (
    <div>
      <div className="service-banner-section">
        <img
          src={service_banner_icon}
          alt=""
          className="left-service-banner-icon"
        />
        <img
          src={service_banner_icon}
          alt=""
          className="right-service-banner-icon"
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="service-banner-title">
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
                  {data.attributes.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-section2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="service-left-video-parent">
                <div className="service-left-bg-video">
                  <iframe
                    width="640"
                    height="390"
                    src={`https://www.youtube.com/embed/COLhMb88AYs`}
                    title="YouTube Video"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-right-content">
                <div className="section-title">
                  <h3
                    data-aos="fade-down"
                    data-aos-delay="300"
                    data-aos-duration={1500}
                  >
                    {data.attributes.section.title}
                  </h3>
                </div>
                <p
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-duration={1500}
                >
                  {data.attributes.section.content
                    .split("\n")
                    .map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-section3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3>{data.attributes.timeline.title}</h3>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="timeline">
                <ul>
                  {data.attributes.timeline.timelines.data.map((timeline) => (
                    <li>
                      <div
                        class="right_content"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration={1500}
                      >
                        <p>{timeline.attributes.content}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {data.attributes.security_zone.map((ot, index) => (
        <div className="service-section4 " key={ot.id}>
          <div className="container-fluid">
            <div className="row">
              {index % 2 === 0 ? ( // Check if index is even
                <>
                  <div className="col-lg-6">
                    <div className="ot-security-content">
                      <div className="section-title">
                        <h3
                          data-aos="fade-right"
                          data-aos-delay="300"
                          data-aos-duration={1500}
                        >
                          <span>{ot.title_left}</span> {ot.title_right}
                        </h3>
                      </div>
                      <div className="ot-securty-text-content">
                        <p
                          data-aos="fade-right"
                          data-aos-delay="300"
                          data-aos-duration={1500}
                        >
                          {ot.description}
                        </p>
                        <div className="ot-security-lists">
                          <ul className="security-list">
                            {ot.service_links.data.map((link) => (
                              <div>
                                {link.attributes.assessment.map((link_ass) => (
                                  <li
                                    data-aos="fade-right"
                                    data-aos-delay="300"
                                    data-aos-duration={1500}
                                  >
                                    <p>{link_ass.label}</p>
                                  </li>
                                ))}
                              </div>
                            ))}

                           
                          </ul>
                          

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="ot-security-img-parent">
                      <div className="ot-security-img-inner">
                        <img src={ot.image_url} alt="" />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-lg-6 order-lg-2">
                    <div className="ot-security-content">
                      <div className="section-title">
                        <h3
                          data-aos="fade-down"
                          data-aos-delay="300"
                          data-aos-duration={1500}
                        >
                          <span>{ot.title_left}</span> {ot.title_right}
                        </h3>
                      </div>
                      <div className="ot-securty-text-content">
                        <p
                          data-aos="fade-down"
                          data-aos-delay="300"
                          data-aos-duration={1500}
                        >
                          {ot.description}
                        </p>
                        <div className="ot-security-lists">
                          <ul className="security-list">
                            {ot.service_links.data.map((link, index) => (
                              <div key={index}>
                                {link.attributes.assessment.map(
                                  (link_ass, subIndex) => (
                                    <li
                                      key={subIndex}
                                      data-aos="fade-right"
                                      data-aos-delay="300"
                                      data-aos-duration={1500}
                                      className={
                                        subIndex % 2 === 0 ? "even" : "odd"
                                      }
                                    >
                                      <p>{link_ass.label}</p>
                                    </li>
                                  )
                                )}
                              </div>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 order-lg-1">
                    <div className="">
                      <div className=" odd_ot">
                        <img src={ot.image_url} alt="" />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}

      <div className="service-section7">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section-title">
                <h3>Penetration Testing Service Categories</h3>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="penestration-service-slider">
                <TestingSlider data={data}/>
              
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

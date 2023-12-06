import React from "react";
import "../services/service.css";
import Slider from "react-slick";
import service_banner_icon from "../../images/decors/service_banner_icon.png";
import service_sample from "../../images/video/service_sample_video.mp4";
import services1 from "../../images/services1.png";
import services2 from "../../images/services2.png";
import TestingSlider from "../../inc/ServiceTestingSlider";
import useFetch from "../../../hooks/useFetch";
import { ThreeDots } from "react-loader-spinner";

export default function Service() {
  const uri =
    "http://40.88.24.216:1337/api/service?populate=section, security_zone.service_links.assessment, timeline.timelines, testing";
  const { loading, error, data } = useFetch(uri);
  // console.log(data.attributes);
  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

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
                  {/* <img src={service_banner2_icon} className='' alt="" /> */}
                  {/* <video muted loop autoPlay="autoplay"> */}
                  <img src={data.attributes.section.image_url} alt="sou_img" />
                  {/* </video> */}
                </div>
                <div className="play_btn">
                  <img
                    src={data.attributes.section.play_btn_url}
                    alt="play_btn"
                  />
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
                  {data.attributes.section.content}
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
                {/* {data.attributes.testing.map((test) => ( */}
                <TestingSlider />
                {/* //   ))} */}
                {/* <Slider {...settings} >
          <div> */}
                {/* {data.attributes.testing.map((test) => ( */}
                {/* //     <div className="testing-slider" key={test.id}>
            
        //       <div className="testing-slider-img">
        //         <img src={test.image_url} alt="" />
        //       </div>
        //       <h3>{test.box_title}</h3>
        //       <p></p>
            
        //     </div>
        //      ))}
        //   </div>
        //   </Slider> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

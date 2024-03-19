import React from "react";
import "./guru.css";
import guru_img2 from "../../images/bg/guru_img2.png";
import SimpleSlider2 from "../../inc/CyberSlider";
import useFetch from "../../../hooks/useFetch";
import univlogo from "../../images/bg/university-logo.png";
import play from "../../images/bg/Video.png";
import trainingcs from "../../images/bg/cstraining.png";
import backgd from "../../images/bg/background.png";
import additionall from "../../images/bg/additinall.png";
import whizhack from "../../images/bg/whizhack-logo.png";
import technicalcs from "../../images/bg/technical.jpg";
import madraslogo from "../../images/logo/iit-madras.png";
import bhulogo from "../../images/logo/iit-bhun.svg";
import jodhpurlogo from "../../images/logo/iit-jodhpur.svg";
import rrulogo from "../../images/logo/iit-rru.svg";
import nptiogo from "../../images/logo/npti.svg";
import varsity from "../../images/bg/versity.svg";
import value from "../../images/bg/value.png";
import carerr from "../../images/bg/carerr.png";
import icon1 from "../../images/bg/icon1.png";
import icon2 from "../../images/bg/icon2.png";
import Loader from "../../inc/Loader";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

export default function Guru({}) {
  const { paramName } = useParams();

  const uri =
    "https://test.whizhack.com/api/training?populate=training.cyber_gurus.price , training.about_cybers.cyber_link, training.cyber_modules.cyber_module, training.btogs.btog_card, training.solution_cases.case_impact";
  const { loading, error, data } = useFetch(uri);

  if (loading) {
    return (
      <div>
        <Loader loading={loading} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const solutions = data.attributes.training;

  return (
    <div>
      {solutions.map((firstSolution, index) => {
        // Check if the solution is "CYBER GURU" and the URL parameter matches
        if (
          firstSolution.__component === "training.training-program" &&
          firstSolution.title === "CYBER GURU" &&
          paramName === "guru"
        ) {
          return (
            <>
              <div key={index}>
                <div className="guru-section1">
                  <img src={firstSolution.right_bg_url} alt="guru" />
                  {/* <video muted loop autoPlay="autoplay">
                    <source src={firstSolution.right_bg_url} type="video/mp4" />
                  </video> */}
                  <div className="ui1-banner1-parent-training">
                    <div className="container-fluid">
                      <div className="row justify-content-between">
                        <div className="col-lg-5">
                          <div className="ui1-banner1-content-training">
                            <h5
                              data-aos="fade-down"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {firstSolution.small_title}
                            </h5>
                            <h3
                              data-aos="fade-up"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {firstSolution.title}
                            </h3>
                            <p
                              data-aos="fade-up"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {firstSolution.description}
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {firstSolution.cyber_gurus.data.map((course) => (
                  <div className="guru-section2">
                    <div className="container-fluid">
                      <div className="row justify-content-around">
                        <div className="col-lg-1">
                          <div className="top_training"></div>
                          <div className="bottom_training"></div>
                        </div>
                        <div className="col-lg-5">
                          <div className="guru-banner2-content">
                            <h3
                              data-aos="fade-right"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {course.attributes.title}
                            </h3>
                            <p
                              data-aos="fade-right"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {course.attributes.small_title}
                            </p>
                            {course.attributes.price.map((price) => (
                              <div
                                className="guru-banner-box"
                                data-aos="fade-right"
                                data-aos-delay="300"
                                data-aos-duration={1500}
                              >
                                <span>{price.label}</span>
                                <p>{price.title}</p>
                                <span>{price.price_label}</span>
                                <p>
                                  {" "}
                                  <span> {price.price}</span>{" "}
                                  {price.price_title}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div
                          className="col-lg-6"
                          style={{
                            backgroundImage: `url(${course.attributes.bg_url})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "100%",
                            height: "100vh",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="guru-section3">
                  {firstSolution.about_cybers.data.map((about) => (
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-6 guru-left-bg">
                          <div className="guru-left-parent">
                            <img src={about.attributes.bg_image_url} alt="" />
                          </div>
                          <div className="play_btn">
                            <img
                              src={about.attributes.play_btn_url}
                              alt="play_btn"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="guru-right-parent">
                            <div className="guru-right-inner guru-right-parent-next">
                              <h3
                                data-aos="fade-down"
                                data-aos-delay="300"
                                data-aos-duration={1500}
                              >
                                {about.attributes.title}{" "}
                                <span> {about.attributes.color_title} </span>{" "}
                                Syllabus
                              </h3>
                              <ul
                                data-aos="fade-down"
                                data-aos-delay="300"
                                data-aos-duration={1500}
                              >
                                {about.attributes.cyber_link.map((link) => (
                                  <li key={link.id}>
                                    <p>{link.label} </p>
                                  </li>
                                ))}
                              </ul>
                              <a href="" className="clipped-btns">
                                Know More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {firstSolution.cyber_modules.data.map((module, index) => {
                  if (index === 0) {
                    return (
                      <div className="guru-section4">
                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="col-lg-10">
                              <div className="section-title">
                                <h3>{module.attributes.title}</h3>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-12">
                              <div className="cyber-modules-slider">
                                <SimpleSlider2
                                  card={module.attributes.cyber_module}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  } else if (index === 1) {
                    return (
                      <div className="samurai-section5">
                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="col-lg-10">
                              <div className="section-title">
                                <h3>{module.attributes.title}</h3>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            {module.attributes.cyber_module.map((module) => (
                              <div
                                className="col-lg-3"
                                data-aos="fade-up"
                                data-aos-delay="300"
                                data-aos-duration={1500}
                              >
                                <div className="samurai-module-parent">
                                  <div className="samurai-module-inner">
                                    <div className="samurai-module-img">
                                      <img src={module.icon_url} alt="" />
                                    </div>
                                    <div className="samurai-module-content">
                                      <h3>{module.label}</h3>
                                      <h5>{module.description}</h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  } else if (index === 2) {
                    return (
                      <div className="ninja-section6">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-12 mx-auto">
                              <div className="section-title">
                                <h3>{module.attributes.title}</h3>
                              </div>
                              <div className="ninja-modules-wrapper">
                                {module.attributes.cyber_module.map(
                                  (ninja_module) => (
                                    <div
                                      className="items"
                                      data-aos="fade-up"
                                      data-aos-delay="300"
                                      data-aos-duration={1500}
                                    >
                                      <div className="ninja-modules-parent">
                                        <h5>{ninja_module.label}</h5>
                                        <p>{ninja_module.description}</p>
                                        <div className="ninja-modules-img">
                                          <img
                                            src={ninja_module.icon_url}
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}

                <Helmet>
                  <script type="application/ld+json">
                    {`
                           "@context": "https://schema.org",
                           "@type": "Course",
                           "name":"Whizhack - Staying Safe Online: Cyber Guru Best Cyber Security Training for Teenager ",
                            "description": "Equip your teens with essential cyber skills. Join Cyber Guru Cyber Security training for a safer digital future. Learn more now!",
                           "provider": {
                                    "@type": "Organization",
                                    "name": "Whizhack",
                                    "sameAs": "https://whizhack.com/cyber-security-training/cyber-guru-for-teenager"
                                       }
                                    }
                                ],
                           "graph": null
                      `}
                  </script>
                </Helmet>
              </div>
            </>
          );
        } else if (
          firstSolution.__component === "training.training-program" &&
          firstSolution.title === "CYBER SAMURAI" &&
          paramName === "samurai"
        ) {
          return (
            <>
              <div key={index}>
                <div className="guru-section1">
                  <img src={firstSolution.right_bg_url} alt="samurai" />
                  {/* <video muted loop autoPlay="autoplay">
                    <source src={firstSolution.right_bg_url} type="video/mp4" />
                  </video> */}
                  <div className="ui1-banner1-parent-training">
                    <div className="container-fluid">
                      <div className="row justify-content-between">
                        <div className="col-lg-5">
                          <div className="ui1-banner1-content-training">
                            <h5
                              data-aos="fade-down"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {firstSolution.small_title}
                            </h5>
                            <h3
                              data-aos="fade-up"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {firstSolution.title}
                            </h3>
                            <p
                              data-aos="fade-up"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {firstSolution.description}
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {firstSolution.cyber_gurus.data.map((course) => (
                  <div className="guru-section2">
                    <div className="container-fluid">
                      <div className="row justify-content-around">
                        <div className="col-lg-1">
                          <div className="top_training"></div>
                          <div className="bottom_training"></div>
                        </div>
                        <div className="col-lg-5">
                          <div className="guru-banner2-content">
                            <h3
                              data-aos="fade-right"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {course.attributes.title}
                            </h3>
                            <p
                              data-aos="fade-right"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {course.attributes.small_title}
                            </p>
                            {course.attributes.price.map((price) => (
                              <div
                                className="guru-banner-box"
                                data-aos="fade-right"
                                data-aos-delay="300"
                                data-aos-duration={1500}
                              >
                                <span>{price.label}</span>
                                <p>{price.title}</p>
                                <span>{price.price_label}</span>
                                <p>
                                  {" "}
                                  <span> {price.price}</span>{" "}
                                  {price.price_title}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div
                          className="col-lg-6 price_img"
                          style={{
                            backgroundImage: `url(${course.attributes.bg_url})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "100%",
                            height: "100vh",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="guru-section3 samurai-about-section">
                  {firstSolution.about_cybers.data.map((about) => (
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-6 guru-left-bg">
                          <div className="guru-left-parent">
                            <img src={about.attributes.bg_image_url} alt="" />
                          </div>
                          <div className="play_btn">
                            <img
                              src={about.attributes.play_btn_url}
                              alt="play_btn"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="guru-right-parent">
                            <div className="guru-right-inner samurai-about">
                              <h3
                                data-aos="fade-down"
                                data-aos-delay="300"
                                data-aos-duration={1500}
                              >
                                {about.attributes.title}{" "}
                                <span> {about.attributes.color_title} </span>{" "}
                                Syllabus
                              </h3>
                              <p
                                data-aos="fade-down"
                                data-aos-delay="300"
                                data-aos-duration={1500}
                              >
                                {about.attributes.description}
                              </p>
                              <a href="" className="clipped-btns">
                                Know More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {firstSolution.cyber_modules.data.map((module, index) => {
                  if (index === 0) {
                    return (
                      <div className="guru-section4">
                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="col-lg-10">
                              <div className="section-title">
                                <h3>{module.attributes.title}</h3>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-12">
                              <div className="cyber-modules-slider">
                                <SimpleSlider2
                                  card={module.attributes.cyber_module}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  } else if (index === 1) {
                    return (
                      <div className="samurai-section5">
                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="col-lg-10">
                              <div className="section-title">
                                <h3>{module.attributes.title}</h3>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            {module.attributes.cyber_module.map((module) => (
                              <div
                                className="col-lg-3"
                                data-aos="fade-up"
                                data-aos-delay="300"
                                data-aos-duration={1500}
                              >
                                <div className="samurai-module-parent">
                                  <div className="samurai-module-inner">
                                    <div className="samurai-module-img">
                                      <img src={module.icon_url} alt="" />
                                    </div>
                                    <div className="samurai-module-content">
                                      <h3>{module.label}</h3>
                                      <h5>{module.description}</h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  } else if (index === 2) {
                    return (
                      <div className="ninja-section6">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-12 mx-auto">
                              <div className="section-title">
                                <h3>{module.attributes.title}</h3>
                              </div>
                              <div className="ninja-modules-wrapper">
                                {module.attributes.cyber_module.map(
                                  (ninja_module) => (
                                    <div
                                      className="items"
                                      data-aos="fade-up"
                                      data-aos-delay="300"
                                      data-aos-duration={1500}
                                    >
                                      <div className="ninja-modules-parent">
                                        <h5>{ninja_module.label}</h5>
                                        <p>{ninja_module.description}</p>
                                        <div className="ninja-modules-img">
                                          <img
                                            src={ninja_module.icon_url}
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}

                <Helmet>
                  <script type="application/ld+json">
                    {`
                       "@context": "https://schema.org",
                       "@type": "Course",
                       "name": "Whizhack - Unlock Online Safety: Cyber Samurai Cyber Security Course for Teens!",
                       "description": "Empower your teen with Cyber Samurai's engaging cybersecurity course. Equip them with essential online safety skills. Enroll today!",
                       "provider": {
                             "@type": "Organization",
                             "name": "Whizhack",
                             "sameAs": "https://whizhack.com/cyber-security-training/cyber-samurai-for-teenager"
                                    }
                                  }
                                ],
                            "graph": null
                     `}
                  </script>
                </Helmet>
              </div>
            </>
          );
        } else if (
          firstSolution.__component === "training.training-program" &&
          firstSolution.title === "CYBER NINJA" &&
          paramName === "ninja"
        ) {
          return (
            <>
              <div key={index}>
                <div className="guru-section1">
                  <img src={firstSolution.right_bg_url} alt="ninja" />
                  {/* <video muted loop autoPlay="autoplay">
                    <source src={firstSolution.right_bg_url} type="video/mp4" />
                  </video> */}
                  <div className="ui1-banner1-parent-training">
                    <div className="container-fluid">
                      <div className="row justify-content-between">
                        <div className="col-lg-5">
                          <div className="ui1-banner1-content-training">
                            <h5
                              data-aos="fade-down"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {firstSolution.small_title}
                            </h5>
                            <h3
                              data-aos="fade-up"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {firstSolution.title}
                            </h3>
                            <p
                              data-aos="fade-up"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {firstSolution.description}
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {firstSolution.cyber_gurus.data.map((course) => (
                  <div className="guru-section2">
                    <div className="container-fluid">
                      <div className="row justify-content-between">
                        <div className="col-lg-1">
                          <div className="top_training"></div>
                          <div className="bottom_training"></div>
                        </div>
                        <div className="col-lg-5">
                          <div className="guru-banner2-content">
                            <h3
                              data-aos="fade-right"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {course.attributes.title}
                            </h3>
                            <p
                              data-aos="fade-right"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {course.attributes.small_title}
                            </p>
                            {course.attributes.price.map((price) => (
                              <div
                                className="guru-banner-box"
                                data-aos="fade-right"
                                data-aos-delay="300"
                                data-aos-duration={1500}
                              >
                                <span>{price.label}</span>
                                <p>{price.title}</p>
                                <span>{price.price_label}</span>
                                <p>
                                  {" "}
                                  <span> {price.price}</span>{" "}
                                  {price.price_title}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div
                          className="col-lg-6 ninja-img"
                          style={{
                            backgroundImage: `url(${course.attributes.bg_url})`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="guru-section3">
                  {firstSolution.about_cybers.data.map((about) => (
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-6 guru-left-bg">
                          <div className="guru-left-parent">
                            <img src={about.attributes.bg_image_url} alt="" />
                          </div>
                          <div className="play_btn">
                            <img
                              src={about.attributes.play_btn_url}
                              alt="play_btn"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="guru-right-parent guru-right-parent-next">
                            <div className="guru-right-inner">
                              <h3
                                data-aos="fade-down"
                                data-aos-delay="300"
                                data-aos-duration={1500}
                              >
                                {about.attributes.title}{" "}
                                <span> {about.attributes.color_title} </span>{" "}
                                Syllabus
                              </h3>
                              <ul
                                data-aos="fade-down"
                                data-aos-delay="300"
                                data-aos-duration={1500}
                              >
                                {about.attributes.cyber_link.map((link) => (
                                  <li key={link.id}>
                                    <p>{link.label} </p>
                                  </li>
                                ))}
                              </ul>
                              <a href="" className="clipped-btns">
                                Know More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {firstSolution.cyber_modules.data.map((module, index) => {
                  if (index === 0) {
                    return (
                      <div className="guru-section4">
                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="col-lg-10">
                              <div className="section-title">
                                <h3>{module.attributes.title}</h3>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-12">
                              <div className="cyber-modules-slider">
                                <SimpleSlider2
                                  card={module.attributes.cyber_module}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  } else if (index === 1) {
                    return (
                      <div className="samurai-section5">
                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="col-lg-10">
                              <div className="section-title">
                                <h3>{module.attributes.title}</h3>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            {module.attributes.cyber_module.map((module) => (
                              <div
                                className="col-lg-3"
                                data-aos="fade-up"
                                data-aos-delay="300"
                                data-aos-duration={1500}
                              >
                                <div className="samurai-module-parent">
                                  <div className="samurai-module-inner">
                                    <div className="samurai-module-img">
                                      <img src={module.icon_url} alt="" />
                                    </div>
                                    <div className="samurai-module-content">
                                      <h3>{module.label}</h3>
                                      <h5>{module.description}</h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  } else if (index === 2) {
                    return (
                      <div className="ninja-section6">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-12 mx-auto">
                              <div className="section-title">
                                <h3>{module.attributes.title}</h3>
                              </div>
                              <div className="ninja-modules-wrapper">
                                {module.attributes.cyber_module.map(
                                  (ninja_module) => (
                                    <div
                                      className="items"
                                      data-aos="fade-up"
                                      data-aos-delay="300"
                                      data-aos-duration={1500}
                                    >
                                      <div className="ninja-modules-parent">
                                        <h5>{ninja_module.label}</h5>
                                        <p>{ninja_module.description}</p>
                                        <div className="ninja-modules-img">
                                          <img
                                            src={ninja_module.icon_url}
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}

                <Helmet>
                  <script type="application/ld+json">
                    {`
                          "@context": "https://schema.org",
                          "@type": "Course",
                          "name":"Whizhack- Cyber Ninja: Cyber Security Training for Teenager",
                          "description": "Empower Teenagers with Essential Cyber Security Training - Equip Them with the Knowledge to Stay Safe Online. Join Our Program Today!",
                          "provider": {
                               "@type": "Organization",
                               "name": "Whizhack",
                               "sameAs": "https://whizhack.com/cyber-security-training/cyber-ninja-for-teenager"
                                     }
                                   }
                                 ],
                         "graph": null
                      `}
                  </script>
                </Helmet>
              </div>
            </>
          );
        } else if (
          firstSolution.__component === "training.btog" &&
          firstSolution.title === "National Power Training Institute" &&
          paramName === "npti"
        ) {
          return (
            <>
              <div key={index}>
                <div className="guru-section1">
                  <img src={firstSolution.right_bg_url} alt="npti" />
                  {/* <video muted loop autoPlay="autoplay">
                    <source src={firstSolution.right_bg_url} type="video/mp4" />
                  </video> */}
                  <div className="ui1-banner1-parent-training-npti">
                    <div className="container-fluid">
                      <div className="row justify-content-between">
                        <div className="col-lg-5">
                          <div className="ui1-banner1-content-training">
                            <h5
                              data-aos="fade-down"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {firstSolution.small_title}
                            </h5>
                            <h3
                              data-aos="fade-up"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {firstSolution.title}
                            </h3>
                            <p
                              data-aos="fade-up"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {firstSolution.description}
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {firstSolution.btogs.data.map((course) => (
                  <section>
                    <div className="threat mt-5">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-lg-7 col-md-12 col-sm-12">
                            <div
                              className="square"
                              style={{
                                background: `url(${course.attributes.bg_url})`,
                                height: "100%",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                              }}
                            >
                              <div className="npti_degree">
                                {course.attributes.btog_card.map((card) => (
                                  <div className="degree_content_npti">
                                    <img
                                      src={card.logo_url}
                                      alt=""
                                      width="111px"
                                      height="125px"
                                    />
                                    <h5
                                      style={{
                                        color: "#07002F",
                                        fontWeight: "600",
                                      }}
                                    >
                                      <span
                                        style={{
                                          color: "#6A49F2",
                                          fontWeight: "600",
                                        }}
                                      >
                                        {card.label}
                                      </span>{" "}
                                      {card.title}
                                    </h5>
                                    <p
                                      style={{
                                        color: "#62666A",
                                        fontWeight: "400",
                                      }}
                                    >
                                      {card.description}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-5 col-md-12 col-sm-12 square_content mx-auto p-3 m-4">
                            <div className="npti-card-content mt-5">
                              <h3
                                data-aos="fade-down"
                                data-aos-delay="300"
                                data-aos-duration={1500}
                                className="mb-4"
                                style={{ color: "#07002F", fontWeight: "700" }}
                              >
                                {course.attributes.title}
                              </h3>
                              <h6
                                data-aos="fade-down"
                                data-aos-delay="300"
                                data-aos-duration={1500}
                                className="mb-3"
                                style={{ color: "#62666A", fontWeight: "500" }}
                              >
                                {course.attributes.description}
                              </h6>
                              <button
                                type="submit"
                                className=" npti-clipped-btns"
                              >
                                Know More
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
                <div className="guru-section3">
                  {firstSolution.about_cybers.data.map((about) => (
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-6 p-5 mx-auto">
                          <div className="guru-right-parent">
                            <div className="guru-right-inner">
                              <h3
                                data-aos="fade-right"
                                data-aos-delay="300"
                                data-aos-duration={1500}
                              >
                                {about.attributes.title}{" "}
                                <span> {about.attributes.color_title} </span>{" "}
                              </h3>

                              {about.attributes.cyber_link.map((link) => (
                                <p
                                  data-aos="fade-right"
                                  data-aos-delay="300"
                                  data-aos-duration={1500}
                                >
                                  {link.label}{" "}
                                </p>
                              ))}

                              <p
                                data-aos="fade-right"
                                data-aos-delay="300"
                                data-aos-duration={1500}
                              >
                                {about.attributes.description}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 guru-left-bg mx-auto">
                          <div className="guru-left-parent">
                            <img src={about.attributes.bg_image_url} alt="" />
                          </div>
                          <div className="play_btn">
                            <img
                              src={about.attributes.play_btn_url}
                              alt="play_btn"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {firstSolution.solution_cases.data.map((impact, index) => (
                  <section
                    className="technology mt-5"
                    style={{
                      backgroundImage: `url(${impact.attributes.bg_url})`,
                    }}
                  >
                    <div className="container text-white text-center mt-5 pt-5 pb-5">
                      <div className="col-lg-12 col-md-12 col-sm-12 justify-content-center d-flex align-items-center">
                        <div className="line_left"></div>
                        <h1 style={{ fontFamily: "Pulse", fontWeight: 600 }}>
                          {impact.attributes.title}
                        </h1>
                        <div className="line_right"></div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12 mx-auto mt-3 mb-5">
                        <div className="tech_card-npti">
                          {impact.attributes.case_impact.map((imp) => (
                            <div
                              className="tech_card_details-npti"
                              data-aos="fade-up"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              <img
                                src={imp.label}
                                alt="icon"
                                width="67px"
                                height="78px"
                                className="mb-3"
                              />
                              <h5 style={{ color: "#1D1D1D" }}>
                                {" "}
                                <span style={{ color: "#9747FF" }}>
                                  {imp.title}
                                </span>
                                {imp.description}
                              </h5>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-8 col-sm-1">
                        <div className="line_bottom"></div>
                      </div>
                    </div>
                  </section>
                ))}

                <Helmet>
                  <script type="application/ld+json">
                    {`
                      "@context": "https://schema.org",
                      "@type": "Course",
                      "name": "Whizhack - Unlock Your Future: Post Graduate Diploma in Cyber Security In 2024 ",
                      "description": "Dive into the world of cybersecurity with our Post Graduate Diploma program. Equip yourself for success in a dynamic digital landscape. Explore now!",
                      "provider": {
                      "@type": "Organization",
                       "name": "Whizhack",
                       "sameAs": "https://whizhack.com/cyber-security-training/pg-deploma-cyber-security"
                       }
                     }
                  ],
                      "graph": null
               `}
                  </script>
                </Helmet>
              </div>
            </>
          );
        } else if (
          firstSolution.__component === "training.btog" &&
          firstSolution.title === "Enterprise" &&
          paramName === "enterprise"
        ) {
          return (
            <>
              <div key={index}>
                <div className="guru-section1">
                  <img src={firstSolution.right_bg_url} alt="npti" />
                  {/* <video muted loop autoPlay="autoplay">
                    <source src={firstSolution.right_bg_url} type="video/mp4" />
                  </video> */}
                  <div className="ui1-banner1-parent-training-npti">
                    <div className="container-fluid">
                      <div className="row justify-content-between">
                        <div className="col-lg-5">
                          <div className="ui1-banner1-content-training">
                            <h5
                              data-aos="fade-down"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {firstSolution.small_title}
                            </h5>
                            <h3
                              data-aos="fade-up"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {firstSolution.title}
                            </h3>
                            <p
                              data-aos="fade-up"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {firstSolution.description}
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <section>
                  <div className="introduction-section">
                    <div className="Introduction-description">
                      <div className="desc">
                        <div className="introduction-title">
                          <h3>Introduction</h3>
                          <h6>Enterprise</h6>
                        </div>
                        <p>
                          Cybersecurity training includes educational programs
                          and courses aimed at teaching individuals and
                          organizations how to protect themselves against cyber
                          threats and vulnerabilities. These comprehensive
                          programs address crucial areas such as network
                          security, data protection, malware mitigation, and
                          adherence to industry regulations and standards.
                          Delivery formats for cybersecurity training include
                          in-person workshops, online courses, and webinars. The
                          overarching goal of cybersecurity training is to
                          empower both individuals and organizations with the
                          requisite knowledge and competencies to effectively
                          counter cyber-attacks, thereby mitigating the
                          likelihood of data breaches, malware infiltrations,
                          and other cybersecurity risks.
                          <br />
                          <br /> At its core, cybersecurity training endeavors
                          to imbue participants with the requisite knowledge,
                          proficiency, and strategic acumen essential for
                          navigating the intricate complexities of contemporary
                          cyber warfare. Armed with this arsenal of insights and
                          competencies, individuals and organizations can
                          proactively mitigate the inherent risks posed by cyber
                          threats, thereby fortifying their digital fortresses
                          against potential data breaches, insidious malware
                          infections, and a myriad of other pernicious cyber
                          assailments.
                        </p>
                      </div>
                      {/* <div className="image-desc"> */}
                      <img src={play} alt="img" />
                      {/* </div> */}
                    </div>
                  </div>
                </section>

                <section className="cop-training-imp">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="imp-content">
                          <h3 className="text-center">
                            Why is corporate training important?
                          </h3>
                          <p>
                            Training employees is an essential investment for
                            any business. While leaders may sometimes question
                            the need for certain learning and development
                            activities, it's important to remember the wisdom of
                            Henry Ford: "It's better to train your employees and
                            have them leave than to not train them and have them
                            stay!"
                          </p>
                          <div className="list-enterprise-imp">
                            <ul>
                              <li>
                                Escalation of Cyber Crimes: With the continuous
                                evolution of new technologies, the likelihood of
                                cyber threats and risks is on the rise.
                              </li>
                              <li>
                                Proliferation of IoT Devices: Improper handling
                                of internet-connected devices can create
                                gateways or vulnerabilities for hackers to
                                exploit in cybercrimes.{" "}
                              </li>
                              <li>
                                Protection of Data: Deploying effective
                                cybersecurity solutions enables organizations to
                                mitigate potential cyber risks associated with
                                sensitive data.{" "}
                              </li>
                              <li>
                                Mitigation of Cyber Risks: Cyber-attacks can
                                inflict substantial financial and reputational
                                damage on organizations lacking adequate
                                security measures.{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="our-deliver">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="our-deliverables">
                          <h1>
                            <span>Our </span> <br />
                            Deliverables
                          </h1>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="our-deliverables-card">
                          <div className="cards-dev">
                            <img src={icon2} alt="icon" className="mb-2" />
                            <h5>Online Training</h5>
                          </div>
                          <div className="cards-dev">
                            <img src={icon1} alt="icon" className="mb-2" />
                            <h5>On-site Training</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="cyber-security-training">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="cyber-security-training-title">
                          <h3>Types of Cyber Security Training</h3>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <div className="cyber-security-training-content">
                          <h4>General Awareness Training</h4>
                          <p>
                            General awareness training serves to educate
                            employees on fundamental cybersecurity concepts,
                            emphasizing the significance of robust security
                            practices. It covers essential topics including:
                          </p>
                          <div className="list-general-awareness">
                            <ul>
                              <li>
                                The collective responsibility for cybersecurity
                                across the organization.
                              </li>
                              <li>
                                Identification and recognition of common cyber
                                threats.
                              </li>
                              <li>
                                Strategies for creating and maintaining strong
                                passwords.
                              </li>
                              <li>
                                Techniques to detect and thwart phishing scams
                                and social engineering attacks.
                              </li>
                              <li>
                                The importance of regular software updates and
                                system maintenance.
                              </li>
                              <li>
                                Safeguarding personal and sensitive information.
                              </li>
                              <li>
                                Procedures for reporting potential security
                                incidents to relevant authorities.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="cyber-security-training-img">
                          <img alt="" src={trainingcs} />
                        </div>
                      </div>
                    </div>

                    <div className="technical-training">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="technical-training-img">
                            <img alt="" src={technicalcs} />
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="technical-training-content">
                            <h4>Technical Training</h4>
                            <p>
                              Technical training delves deeper into specific
                              technical aspects of cybersecurity, tailored for
                              employees with technical roles, particularly IT
                              staff. It encompasses advanced topics such as:
                            </p>
                            <div className="list-technical-training">
                              <ul>
                                <li>
                                  Network security protocols and countermeasures
                                  against prevalent network-based attacks.
                                </li>
                                <li>
                                  Implementation of robust data encryption
                                  techniques to safeguard sensitive information.
                                </li>
                                <li>
                                  Configuration and management of firewalls to
                                  fortify network defenses.
                                </li>
                                <li>
                                  Best practices for securing web applications
                                  and servers from cyber threats.
                                </li>
                                <li>
                                  Conducting comprehensive vulnerability
                                  assessments and penetration testing.
                                </li>
                                <li>
                                  Protocols for incident response and effective
                                  management of cybersecurity incidents.
                                </li>
                                <li>
                                  Secure access management strategies for
                                  systems and data protection.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* </div> */}
                  </div>
                </section>

                <section className="providing">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="providing-title">
                          <h3>What are we providing?</h3>
                          <p>
                            We offer training across three distinct levels,
                            allowing organizations the flexibility to select the
                            level that best aligns with their interests and
                            specific requirements. Here are some additional
                            details clarifying each level.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-4">
                        <div className="cards-items">
                          <div className="cards-items-content">
                            <h5>Training Level 1</h5>
                            <p>
                              Training Access Level I is geared towards
                              individuals who are keen on grasping the
                              fundamentals of cybersecurity. It offers essential
                              resources to kickstart a security awareness
                              training program, making it ideal for
                              organizations that are just starting out or have
                              yet to implement such training. This level
                              includes basic training modules, assessments, and
                              educational materials aimed at providing a
                              foundational understanding of security awareness.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="cards-items">
                          <div className="cards-items-content">
                            <h5>Training Level 2</h5>
                            <p>
                              Level 2 training caters to individuals with a
                              basic understanding of cybersecurity, aiming to
                              enhance their expertise through practical
                              application. This level encompasses in-depth
                              exploration of penetration testing methodologies,
                              strategies for evading Intrusion Detection Systems
                              (IDS), firewall administration techniques, the
                              implementation and monitoring of honeypots,
                              mitigation of SQL injection vulnerabilities, and
                              the utilization of Security Information and Event
                              Management (SIEM) solutions.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="cards-items">
                          <div className="cards-items-content">
                            <h5>Training Level 3</h5>
                            <p>
                              Level 3 training is designed for professionals in
                              senior positions within organizations, offering an
                              in-depth exploration of cybersecurity. This
                              program covers a wide range of topics, from basic
                              principles to more advanced concepts, including
                              hacking, vulnerability assessment, malware
                              defense, encryption, cloud security, network
                              protection, and more.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="long-training">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="long-training-title">
                          <h3>How long is the Training?</h3>
                        </div>
                        <p>
                          The duration of cyber security training can vary
                          significantly depending on the chosen program and its
                          intensity. You might choose an intensive workshop that
                          condenses relevant material into several days or
                          weeks. Alternatively, you could opt for a more
                          extensive learning path spanning multiple classes over
                          a month. Some programs can be completed in hours,
                          while others may require a more extended commitment.
                          It's essential to thoroughly review program details
                          before enrolling to gain a clear understanding of the
                          time required for completion.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </>
          );
        } else if (
          firstSolution.__component === "training.btog" &&
          firstSolution.title === "International Bridge Courses" &&
          paramName === "bridge"
        ) {
          return (
            <>
              <div key={index}>
                <div className="guru-section1">
                  <img src={firstSolution.right_bg_url} alt="bridge" />
                  <div className="ui1-banner1-parent-training-bridge">
                    <div className="container-fluid">
                      <div className="row justify-content-between">
                        <div className="col-lg-5">
                          <div className="ui1-banner1-content-training">
                            <h5
                              data-aos="fade-down"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {firstSolution.small_title}
                            </h5>
                            <h3
                              data-aos="fade-up"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {firstSolution.title}
                            </h3>
                            <p
                              data-aos="fade-up"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {firstSolution.description}
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <section className="state-university">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6">
                        <div
                          className="state-university-content"
                          data-aos="fade-left"
                          data-aos-delay="300"
                          data-aos-duration={1500}
                        >
                          <p>
                            The State University of New York at Albany, commonly
                            referred to as the University at Albany, UAlbany or
                            SUNY Albany, is a public research university with
                            campuses in Albany, Rensselaer, and Guilderland, New
                            York. Founded in 1844, it is one of four “university
                            centers” of the State University of New York (SUNY)
                            system.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div
                          className="state-university-content-img"
                          data-aos="fade-right"
                          data-aos-delay="300"
                          data-aos-duration={1500}
                        >
                          <img src={univlogo} alt="logo-university" />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="course-details">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="course-details-title">
                          <h3 className="text-center">
                            Who is this Course for?
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3">
                        <div
                          className="cards-content"
                          data-aos="fade-up"
                          data-aos-delay="300"
                          data-aos-duration={1500}
                        >
                          <img src={backgd} alt="background-icon" />
                          <h4>Background Knowledge</h4>
                          <div className="list-cards-content">
                            <p>Technical and Engineering Students</p>
                            <p>Final Year students or past Graduates</p>
                            <p>Good Academic Record</p>
                            <p>
                              Proficiency in English (to Clear TOEFL or IELTS or
                              Duolingo or PTE)
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3">
                        <div
                          className="cards-content"
                          data-aos="fade-up"
                          data-aos-delay="300"
                          data-aos-duration={1500}
                        >
                          <img src={additionall} alt="add-icon" />
                          <h4>Additional Requirement</h4>
                          <div className="list-cards-content">
                            <p>Advanced knowledge of Math’s and Calculus</p>
                            <p>Programming knowledge preferred.</p>
                            <p>Financial Viability</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3">
                        <div
                          className="cards-content"
                          data-aos="fade-up"
                          data-aos-delay="300"
                          data-aos-duration={1500}
                        >
                          <img src={value} alt="value-icon" />
                          <h4>Value Proposition</h4>
                          <div className="list-cards-content">
                            <p>
                              Premium Degree from State University of New York
                              (NSA certified center of excellence in cyber
                              defense education)
                            </p>
                            <p>Work VISA for 3 Years</p>
                            <p>STEM Program with 3 Years OPT</p>
                            <p>Certification from IIT Bhubaneswar</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3">
                        <div
                          className="cards-content"
                          data-aos="fade-up"
                          data-aos-delay="300"
                          data-aos-duration={1500}
                        >
                          <img src={carerr} alt="career-icon" />
                          <h4>Career Aspiration</h4>
                          <div className="list-cards-content">
                            <p>
                              To Study & Build a Technical career in US & other
                              developed countries.
                            </p>
                            <p>
                              {" "}
                              Build Career Pathway for Work in the following
                              roles as Cyber Security Analyst , SOC Analyst,
                              Penetration Testers in Core Cyber Roles.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="approximate-timeline">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="approximate-timeline-title">
                          <h3>Approximate Timeline</h3>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="timeline">
                          <ul>
                            <li>
                              <div
                                class="right_content"
                                data-aos="fade-up"
                                data-aos-delay="300"
                                data-aos-duration={1500}
                              >
                                <h6>February - March 2024</h6>
                                <div className="timeline-list-content">
                                  <p>Appear for AMCAT and Interview</p>
                                  <p>Apply for VISA</p>
                                  <p>Start your Bootcamp / Bridge program</p>
                                </div>
                              </div>
                            </li>

                            <li>
                              <div
                                class="right_content"
                                data-aos="fade-up"
                                data-aos-delay="300"
                                data-aos-duration={1500}
                              >
                                <h6>April - June 2024</h6>
                                <div className="timeline-list-content">
                                  <p>Bridge Program Application</p>
                                  <p>Initiation of Bridge Program</p>
                                </div>
                              </div>
                            </li>

                            <li>
                              <div
                                class="right_content"
                                data-aos="fade-up"
                                data-aos-delay="300"
                                data-aos-duration={1500}
                              >
                                <h6>July - August 2024</h6>
                                <div className="timeline-list-content">
                                  <p>Fly to USA</p>
                                  <p>Receive Student Visa</p>
                                  <p>Start your masters degree in the USA</p>
                                </div>
                              </div>
                            </li>

                            <li>
                              <div
                                class="right_content"
                                data-aos="fade-up"
                                data-aos-delay="300"
                                data-aos-duration={1500}
                              >
                                <h6>May 2025</h6>
                                <div className="timeline-list-content">
                                  <p>Eligibility to work</p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="direct-apply-uni-content">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="direct-apply-uni-content-title">
                          <h3>
                            Why not directly apply to University at Albany?
                            <span>Because it's 25% Economical!</span>
                          </h3>
                        </div>
                      </div>

                      <div className="col-lg-7">
                        <div className="fee-structure">
                          <div className="fee">
                            <h3>
                              Tuition <br /> Fee
                            </h3>
                            <div className="fee-price">
                              <div className="fee-price-structure">
                                <p>Without Bridge</p>
                                <span>$37,632</span>
                              </div>
                              <div className="fee-price-structure">
                                <p>With Bridge</p>
                                <strong>$28,161</strong>
                              </div>
                            </div>
                          </div>

                          <div className="fee">
                            <h3>
                              Living <br /> Cost
                            </h3>
                            <div className="fee-price">
                              <div className="fee-price-structure">
                                <p>Without Bridge</p>
                                <span>$14,400</span>
                              </div>
                              <div className="fee-price-structure">
                                <p>With Bridge</p>
                                <strong>$10,800</strong>
                              </div>
                            </div>
                          </div>

                          <div className="fee">
                            <h3>
                              Total
                              <br /> Cost
                            </h3>
                            <div className="fee-price">
                              <div className="fee-price-structure">
                                <p>Without Bridge</p>
                                <span>$52,032</span>
                              </div>
                              <div className="fee-price-structure">
                                <p>With Bridge</p>
                                <strong>$38,961</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="technology-partners">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="technology-partners-title">
                          <h3>Technology Partners</h3>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div
                          className="technology-partners-logo"
                          data-aos="fade-up"
                          data-aos-delay="300"
                          data-aos-duration={1500}
                        >
                          <img src={whizhack} alt="whizhack" />
                          <img src={varsity} alt="varsity" />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </>
          );
        } else if (
          firstSolution.__component === "training.btog" &&
          firstSolution.title === "Government" &&
          paramName === "government"
        ) {
          return (
            <>
              <div key={index}>
                <div className="guru-section1">
                  <img src={firstSolution.right_bg_url} alt="bridge" />
                  <div className="ui1-banner1-parent-training-bridge">
                    <div className="container-fluid">
                      <div className="row justify-content-between">
                        <div className="col-lg-5">
                          <div className="ui1-banner1-content-training">
                            <h5
                              data-aos="fade-down"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {firstSolution.small_title}
                            </h5>
                            <h3
                              data-aos="fade-up"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {firstSolution.title}
                            </h3>
                            <p
                              data-aos="fade-up"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {firstSolution.description}
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <section className="b2g-training">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="b2g-training-title">
                          <h3>Our B2G Training Programs</h3>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="b2g-training-content">
                          <p>
                            WhizHack is providing security against some of the
                            most advanced cyber-attacks perpetuated by state
                            actors and cyber criminals in key Govt departments
                            of Centre and States in India. These solutions are
                            developed, deployed and managed end-to-end by its
                            in-house teams. Our highly capable certified service
                            teams are deploying our products and services in
                            India and key countries including US/Canada,
                            Tanzania, Vietnam and Sri Lanka. As a vertically
                            integrated player, WhizHack also empowers
                            Governmental organizations with a range of training
                            across multiple departments that ranges for general
                            awareness to master's programs in Cyber Security.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="whizHack-partnerships">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="whizHack-partnerships-title">
                          <h3>WhizHack’s partnerships</h3>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="whizHack-partnerships-content">
                          <p>
                            We are actively involved in delivering our training
                            programs and services across a wide spectrum of
                            sectors, collaborating with esteemed institutions
                            such as Rashtriya Raksha University, the National
                            Power Training Institute, and various governmental
                            entities. Our clientele primarily consists of
                            individuals from the technology industry, including
                            delegates and professionals. To cater to the diverse
                            requirements of our clients, we offer training
                            programs structured into different tiers, ensuring
                            personalized learning experiences tailored to
                            individuals' roles and proficiency levels within the
                            technical domain.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="iit-partnerships">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="iit-partnerships-title">
                          <h3>
                            {" "}
                            Additionally, we have established partnerships with
                            IIT Jodhpur, IIT Bhubaneshwar, and IIT Madras to
                            seamlessly deliver our training programs.
                          </h3>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="iit-partnerships-logo">
                          <img src={jodhpurlogo} alt="jodhpur-logo" />
                          <img src={rrulogo} alt="rru-logo" />
                          <img src={madraslogo} alt="madras-logo" />
                          <img src={nptiogo} alt="npti-logo" />
                          <img src={bhulogo} alt="bhu-logo" />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </>
          );
        } else if (
          firstSolution.__component === "training.btog" &&
          firstSolution.title === "Centre of  Excellence" &&
          paramName === "coe"
        ) {
          return (
            <>
              <div key={index}>
                <div className="guru-section1">
                  <video muted loop autoPlay="autoplay">
                    <source src={firstSolution.right_bg_url} type="video/mp4" />
                  </video>
                  <div
                    className="ui1-banner1-parent-training-coe"
                    style={{
                      backgroundImage: `url(${firstSolution.image_left_url})`,
                    }}
                  >
                    <div className="container-fluid">
                      <div className="row justify-content-between">
                        <div className="col-lg-5">
                          <div className="ui1-banner1-content-training">
                            <h5
                              data-aos="fade-down"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {firstSolution.small_title}
                            </h5>
                            <h3
                              data-aos="fade-up"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {firstSolution.title}
                            </h3>
                            <p
                              data-aos="fade-up"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {firstSolution.description}
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {firstSolution.btogs.data.map((course) => (
                  <section>
                    <div className="threat mt-5">
                      <div className="container-fluid">
                        <div className="row">
                          {/* <div className="col-lg-1 col-md-1  line">
                            <div className="top"></div>
                            <div className="bottom"></div>
                          </div> */}

                          <div className="col-lg-6 col-md-6 col-sm-12 mx-auto">
                            <div
                              className="npti"
                              style={{
                                backgroundImage: `url(${course.attributes.bg_url})`,
                                height: "100vh",
                              }}
                            >
                              <div className="degree">
                                {course.attributes.btog_card.map((card) => (
                                  <div className="degree_content-coe">
                                    <p
                                      style={{
                                        color: "#989898",
                                        fontWeight: "600",
                                      }}
                                    >
                                      <span
                                        style={{
                                          color: "#6A49F2",
                                          fontWeight: "600",
                                        }}
                                      >
                                        {card.label}
                                      </span>{" "}
                                      <br />
                                      {card.title}
                                    </p>
                                    <p style={{ color: "#404040" }}>
                                      {card.description}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-3 col-sm-12 square_content mx-auto p-3 m-4">
                            <div className="npti-card mt-5">
                              <h3
                                className="mb-4"
                                style={{ color: "#07002F", fontWeight: "700" }}
                              >
                                {course.attributes.title}
                              </h3>
                              <h6
                                className="mb-3"
                                style={{ color: "#62666A", fontWeight: "500" }}
                              >
                                {course.attributes.description}
                              </h6>
                              <button type="submit" className="clipped-btns">
                                Know More
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
                <div className="guru-section3-coe">
                  {firstSolution.about_cybers.data.map((about) => (
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-6 p-5 mx-auto">
                          <div className="guru-right-parent">
                            <div className="guru-right-inner">
                              <h3
                                data-aos="fade-right"
                                data-aos-delay="300"
                                data-aos-duration={1500}
                              >
                                {about.attributes.title}{" "}
                                <span> {about.attributes.color_title} </span>{" "}
                              </h3>

                              {about.attributes.cyber_link.map((link) => (
                                <p
                                  data-aos="fade-right"
                                  data-aos-delay="300"
                                  data-aos-duration={1500}
                                >
                                  {link.label}{" "}
                                </p>
                              ))}

                              <p
                                data-aos="fade-right"
                                data-aos-delay="300"
                                data-aos-duration={1500}
                                style={{
                                  fontSize: "20px",
                                }}
                              >
                                {about.attributes.description}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 guru-left-bg mx-auto">
                          <div className="guru-left-parent">
                            <img src={about.attributes.bg_image_url} alt="" />
                          </div>
                          <div className="play_btn">
                            <img
                              src={about.attributes.play_btn_url}
                              alt="play_btn"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {firstSolution.solution_cases.data.map((impact, index) => (
                  <section
                    className="technology mt-5"
                    style={{
                      backgroundImage: `url(${impact.attributes.bg_url})`,
                    }}
                  >
                    <div className="container text-white text-center mt-5">
                      <div className="col-lg-12 col-md-8 col-sm-1 justify-content-center d-flex align-items-center">
                        <div className="line_left"></div>
                        <h1
                          style={{ fontWeight: 600 }}
                          className="mission-technology-title"
                        >
                          {impact.attributes.title}
                        </h1>
                        <div className="line_right"></div>
                      </div>

                      <div className="col-lg-12 col-md-8 col-sm-1 mx-auto mt-3 mb-5">
                        <div className="tech_card-coe">
                          {impact.attributes.case_impact.map((imp) => (
                            <div
                              className="tech_card_details-coe"
                              data-aos="fade-up"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              <h5 style={{ color: "#07002F" }}>
                                {" "}
                                <span style={{ color: "#185893" }}>
                                  {imp.title}
                                </span>
                                {imp.description}
                              </h5>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-8 col-sm-1">
                        <div className="line_bottom"></div>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </>
          );
        }
        if (
          firstSolution.__component === "training.training-program" &&
          firstSolution.title === "CYBER GURU-PRO" &&
          paramName === "gurupro"
        ) {
          return (
            <>
              <div key={index}>
                <div className="guru-section1">
                  <video muted loop autoPlay="autoplay">
                    <source src={firstSolution.right_bg_url} type="video/mp4" />
                  </video>
                  <div className="ui1-banner1-parent-training">
                    <div className="container-fluid">
                      <div className="row justify-content-between">
                        <div className="col-lg-5">
                          <div className="ui1-banner1-content-training">
                            <h5
                              data-aos="fade-down"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {firstSolution.small_title}
                            </h5>
                            <h3
                              data-aos="fade-up"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {firstSolution.title}
                            </h3>
                            <p
                              data-aos="fade-up"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {firstSolution.description}
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {firstSolution.cyber_gurus.data.map((course) => (
                  <div className="guru-section2">
                    <div className="container-fluid">
                      <div className="row justify-content-around">
                        <div className="col-lg-1">
                          <div className="top_training"></div>
                          <div className="bottom_training"></div>
                        </div>
                        <div className="col-lg-5">
                          <div className="guru-banner2-content">
                            <h3
                              data-aos="fade-right"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {course.attributes.title}
                            </h3>
                            <p
                              data-aos="fade-right"
                              data-aos-delay="300"
                              data-aos-duration={1500}
                            >
                              {course.attributes.small_title}
                            </p>
                            {course.attributes.price.map((price) => (
                              <div
                                className="guru-banner-box"
                                data-aos="fade-right"
                                data-aos-delay="300"
                                data-aos-duration={1500}
                              >
                                <span>{price.label}</span>
                                <p>{price.title}</p>
                                <span>{price.price_label}</span>
                                <p>
                                  {" "}
                                  <span> {price.price}</span>{" "}
                                  {price.price_title}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div
                          className="col-lg-6"
                          style={{
                            backgroundImage: `url(${course.attributes.bg_url})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "100%",
                            height: "100vh",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="guru-section3">
                  {firstSolution.about_cybers.data.map((about) => (
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-6 guru-left-bg">
                          <div className="guru-left-parent">
                            <img src={about.attributes.bg_image_url} alt="" />
                          </div>
                          <div className="play_btn">
                            <img
                              src={about.attributes.play_btn_url}
                              alt="play_btn"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="guru-right-parent">
                            <div className="guru-right-inner guru-right-inner-pro">
                              <h3
                                data-aos="fade-down"
                                data-aos-delay="300"
                                data-aos-duration={1500}
                              >
                                {about.attributes.title}{" "}
                                <span> {about.attributes.color_title} </span>{" "}
                                Course
                              </h3>
                              <p
                                data-aos="fade-down"
                                data-aos-delay="300"
                                data-aos-duration={1500}
                              >
                                {about.attributes.description}
                              </p>
                              <a href="" className="clipped-btns">
                                Know More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {firstSolution.cyber_modules.data.map((module, index) => {
                  if (index === 0) {
                    return (
                      <div className="guru-section4">
                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="col-lg-10">
                              <div className="section-title">
                                <h3>{module.attributes.title}</h3>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-12">
                              <div className="cyber-modules-slider">
                                <SimpleSlider2
                                  card={module.attributes.cyber_module}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  } else if (index === 1) {
                    return (
                      <div className="samurai-section5">
                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="col-lg-10">
                              <div className="section-title">
                                <h3>{module.attributes.title}</h3>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            {module.attributes.cyber_module.map((module) => (
                              <div
                                className="col-lg-3"
                                data-aos="fade-up"
                                data-aos-delay="300"
                                data-aos-duration={1500}
                              >
                                <div className="samurai-module-parent">
                                  <div className="samurai-module-inner">
                                    <div className="samurai-module-img">
                                      <img src={module.icon_url} alt="" />
                                    </div>
                                    <div className="samurai-module-content">
                                      <h3>{module.label}</h3>
                                      <h5>{module.description}</h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  } else if (index === 2) {
                    return (
                      <div className="ninja-section6">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-12 mx-auto">
                              <div className="section-title">
                                <h3>{module.attributes.title}</h3>
                              </div>
                              <div className="ninja-modules-wrapper">
                                {module.attributes.cyber_module.map(
                                  (ninja_module) => (
                                    <div
                                      className="items"
                                      data-aos="fade-up"
                                      data-aos-delay="300"
                                      data-aos-duration={1500}
                                    >
                                      <div className="ninja-modules-parent">
                                        <h5>{ninja_module.label}</h5>
                                        <p>{ninja_module.description}</p>
                                        <div className="ninja-modules-img">
                                          <img
                                            src={ninja_module.icon_url}
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </>
          );
        }
        return null;
      })}
    </div>
  );
}

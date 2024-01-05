import React from "react";
import "./guru.css";
import guru_img2 from "../../images/bg/guru_img2.png";
import SimpleSlider2 from "../../inc/CyberSlider";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";

export default function Guru({ data }) {
  const { paramName } = useParams();

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
                  <video muted loop autoPlay="autoplay">
                    <source src={firstSolution.right_bg_url} type="video/mp4" />
                  </video>
                  <div className="ui1-banner1-parent-training">
                    <div className="container-fluid">
                      <div className="row justify-content-between">
                        <div className="col-lg-5">
                          <div className="ui1-banner1-content-training">
                            <h5 data-aos="fade-down" data-aos-delay="300" data-aos-duration={1500}>{firstSolution.small_title}</h5>
                            <h3 data-aos="fade-up" data-aos-delay="300" data-aos-duration={1500}>{firstSolution.title}</h3>
                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration={1500}>{firstSolution.description}</p>
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
                            <h3 data-aos="fade-right" data-aos-delay="300" data-aos-duration={1500}>{course.attributes.title}</h3>
                            <p data-aos="fade-right" data-aos-delay="300" data-aos-duration={1500}>{course.attributes.small_title}</p>
                            {course.attributes.price.map((price) => (
                              <div className="guru-banner-box" data-aos="fade-right" data-aos-delay="300" data-aos-duration={1500}>
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
                            <div className="guru-right-inner">
                              <h3 data-aos="fade-down" data-aos-delay="300" data-aos-duration={1500}>
                                {about.attributes.title}{" "}
                                <span> {about.attributes.color_title} </span>{" "}
                                Syllabus
                              </h3>
                              <ul data-aos="fade-down" data-aos-delay="300" data-aos-duration={1500}>
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
                              <div className="col-lg-3" data-aos="fade-up" data-aos-delay="300" data-aos-duration={1500}>
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
                                    <div className="items" data-aos="fade-up" data-aos-delay="300" data-aos-duration={1500}>
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

        // You can add more conditions for other solutions as needed
        else if (
          firstSolution.__component === "training.training-program" &&
          firstSolution.title === "CYBER SAMURAI" &&
          paramName === "samurai"
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
                            <h5 data-aos="fade-down" data-aos-delay="300" data-aos-duration={1500}>{firstSolution.small_title}</h5>
                            <h3 data-aos="fade-up" data-aos-delay="300" data-aos-duration={1500}>{firstSolution.title}</h3>
                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration={1500}>{firstSolution.description}</p>
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
                            <h3 data-aos="fade-right" data-aos-delay="300" data-aos-duration={1500}>{course.attributes.title}</h3>
                            <p data-aos="fade-right" data-aos-delay="300" data-aos-duration={1500}>{course.attributes.small_title}</p>
                            {course.attributes.price.map((price) => (
                              <div className="guru-banner-box" data-aos="fade-right" data-aos-delay="300" data-aos-duration={1500}>
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
                          <div className="guru-left-parent" >
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
                              <h3 data-aos="fade-down" data-aos-delay="300" data-aos-duration={1500}>
                                {about.attributes.title}{" "}
                                <span> {about.attributes.color_title} </span>{" "}
                                Syllabus
                              </h3>
                              <p data-aos="fade-down" data-aos-delay="300" data-aos-duration={1500}>{about.attributes.description}</p>
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
                              <div className="col-lg-3" data-aos="fade-up" data-aos-delay="300" data-aos-duration={1500}>
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
                                    <div className="items" data-aos="fade-up" data-aos-delay="300" data-aos-duration={1500}>
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
        } else if (
          firstSolution.__component === "training.training-program" &&
          firstSolution.title === "CYBER NINJA" &&
          paramName === "ninja"
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
                            <h5 data-aos="fade-down" data-aos-delay="300" data-aos-duration={1500}>{firstSolution.small_title}</h5>
                            <h3 data-aos="fade-up" data-aos-delay="300" data-aos-duration={1500}>{firstSolution.title}</h3>
                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration={1500}>{firstSolution.description}</p>
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
                            <h3 data-aos="fade-right" data-aos-delay="300" data-aos-duration={1500}>{course.attributes.title}</h3>
                            <p data-aos="fade-right" data-aos-delay="300" data-aos-duration={1500}>{course.attributes.small_title}</p>
                            {course.attributes.price.map((price) => (
                              <div className="guru-banner-box" data-aos="fade-right" data-aos-delay="300" data-aos-duration={1500}>
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
                          <div className="guru-right-parent">
                            <div className="guru-right-inner">
                              <h3 data-aos="fade-down" data-aos-delay="300" data-aos-duration={1500}>
                                {about.attributes.title}{" "}
                                <span> {about.attributes.color_title} </span>{" "}
                                Syllabus
                              </h3>
                              <ul data-aos="fade-down" data-aos-delay="300" data-aos-duration={1500}>
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
                              <div className="col-lg-3" data-aos="fade-up" data-aos-delay="300" data-aos-duration={1500}>
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
                                    <div className="items" data-aos="fade-up" data-aos-delay="300" data-aos-duration={1500}>
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
        } else if (
          firstSolution.__component === "training.btog" &&
          firstSolution.title === "National Power Training Institute" &&
          paramName === "npti"
        ) {
          return (
            <>
              <div key={index}>
                <div className="guru-section1">
                  <video muted loop autoPlay="autoplay">
                    <source src={firstSolution.right_bg_url} type="video/mp4" />
                  </video>
                  <div className="ui1-banner1-parent-training-npti">
                    <div className="container-fluid">
                      <div className="row justify-content-between">
                        <div className="col-lg-5">
                          <div className="ui1-banner1-content-training">
                            <h5 data-aos="fade-down" data-aos-delay="300" data-aos-duration={1500}>{firstSolution.small_title}</h5>
                            <h3 data-aos="fade-up" data-aos-delay="300" data-aos-duration={1500}>{firstSolution.title}</h3>
                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration={1500}>{firstSolution.description}</p>
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
                          <div className="col-lg-7 col-md-6 col-sm-12">
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

                          <div className="col-lg-5 col-md-6 col-sm-12 square_content mx-auto p-3 m-4">
                          <div className="npti-card-content mt-5">
                            <h3 data-aos="fade-down" data-aos-delay="300" data-aos-duration={1500}
                              className="mb-4"
                              style={{ color: "#07002F", fontWeight: "700" }}
                            >
                              {course.attributes.title}
                            </h3>
                            <h6 data-aos="fade-down" data-aos-delay="300" data-aos-duration={1500}
                              className="mb-3"
                              style={{ color: "#62666A", fontWeight: "500" }}
                            >
                              {course.attributes.description}
                            </h6>
                            <button type="submit" className=" npti-clipped-btns">
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
                              <h3 data-aos="fade-right" data-aos-delay="300" data-aos-duration={1500}>
                                {about.attributes.title}{" "}
                                <span> {about.attributes.color_title} </span>{" "}
                              </h3>

                              {about.attributes.cyber_link.map((link) => (
                                <p data-aos="fade-right" data-aos-delay="300" data-aos-duration={1500}>{link.label} </p>
                              ))}

                              <p data-aos="fade-right" data-aos-delay="300" data-aos-duration={1500}>{about.attributes.description}</p>
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
                        <h1 style={{ fontFamily: "Pulse", fontWeight: 600 }}>
                          {impact.attributes.title}
                        </h1>
                        <div className="line_right"></div>
                      </div>

                      <div className="col-lg-12 col-md-8 col-sm-1 mx-auto mt-3 mb-5">
                        <div className="tech_card-npti">
                          {impact.attributes.case_impact.map((imp) => (
                            <div className="tech_card_details-npti" data-aos="fade-up" data-aos-delay="300" data-aos-duration={1500}>
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
                            <h5 data-aos="fade-down" data-aos-delay="300" data-aos-duration={1500}>{firstSolution.small_title}</h5>
                            <h3 data-aos="fade-up" data-aos-delay="300" data-aos-duration={1500}>{firstSolution.title}</h3>
                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration={1500}>{firstSolution.description}</p>
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
                              <button
                                type="submit"
                                className="clipped-btns"
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
                <div className="guru-section3-coe">
                  {firstSolution.about_cybers.data.map((about) => (
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-6 p-5 mx-auto">
                          <div className="guru-right-parent">
                            <div className="guru-right-inner">
                              <h3 data-aos="fade-right" data-aos-delay="300" data-aos-duration={1500}>
                                {about.attributes.title}{" "}
                                <span> {about.attributes.color_title} </span>{" "}
                              </h3>

                              {about.attributes.cyber_link.map((link) => (
                                <p data-aos="fade-right" data-aos-delay="300" data-aos-duration={1500}>
                                  {link.label}{" "}
                                </p>
                              ))}

                              <p data-aos="fade-right" data-aos-delay="300" data-aos-duration={1500}
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
                          style={{fontWeight: 600 }}
                          className="mission-technology-title"
                        >
                          {impact.attributes.title}
                        </h1>
                        <div className="line_right"></div>
                      </div>

                      <div className="col-lg-12 col-md-8 col-sm-1 mx-auto mt-3 mb-5">
                        <div className="tech_card-coe">
                          {impact.attributes.case_impact.map((imp) => (
                            <div className="tech_card_details-coe" data-aos="fade-up" data-aos-delay="300" data-aos-duration={1500}>
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
        } if (
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
                            <h5 data-aos="fade-down" data-aos-delay="300" data-aos-duration={1500}>{firstSolution.small_title}</h5>
                            <h3 data-aos="fade-up" data-aos-delay="300" data-aos-duration={1500}>{firstSolution.title}</h3>
                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration={1500}>{firstSolution.description}</p>
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
                            <h3 data-aos="fade-right" data-aos-delay="300" data-aos-duration={1500}>{course.attributes.title}</h3>
                            <p data-aos="fade-right" data-aos-delay="300" data-aos-duration={1500}>{course.attributes.small_title}</p>
                            {course.attributes.price.map((price) => (
                              <div className="guru-banner-box" data-aos="fade-right" data-aos-delay="300" data-aos-duration={1500}>
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
                              <h3 data-aos="fade-down" data-aos-delay="300" data-aos-duration={1500}>
                                {about.attributes.title}{" "}
                                <span> {about.attributes.color_title} </span>{" "}
                                Course
                              </h3>
                              <p data-aos="fade-down" data-aos-delay="300" data-aos-duration={1500}>
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
                              <div className="col-lg-3" data-aos="fade-up" data-aos-delay="300" data-aos-duration={1500}>
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
                                    <div className="items" data-aos="fade-up" data-aos-delay="300" data-aos-duration={1500}>
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

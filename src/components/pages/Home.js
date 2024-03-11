import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loader from "../inc/Loader";
import SimpleSlider from "../inc/Slider";
import ContactForm from "../inc/ContactForm";
import ContactForm2 from "../inc/ContactForm2";
import ran_video from "../images/video/Ransomware Section.webm";
import enterprise from "../images/icons/Enterprise (1).png";
import gov from "../images/icons/government (1).png";
import bridges from "../images/icons/international bridge courses (1).png";
import industry from "../images/icons/industry (1).png";
import career from "../images/icons/career pathways (1).png";
import virtuallab from "../images/icons/Whizhack Virtual labs.png";
import shooting from "../images/icons/shooting-range (2) (1).png";
import tracelogo from "../images/icons/Trace Logo 1.svg";
import traceicon from "../images/icons/trace edited.png";
import hidsicon from "../images/icons/computer-networks Edit.png";
import nidesicon from "../images/icons/global-network Edit.png";
import product_video from "../images/video/product BG.webm";
import zerohack from "../images/2Zero.svg";
import whizrange from "../images/whizrange logo.png";
import Lottie from "react-lottie-player";
import { Helmet } from "react-helmet";
import animationData from "../json/animation.json";

export default function Home() {
  const uri =
    "https://test.whizhack.com/api/home?_limit=5&populate=productleft.product_button, contact.product_type, service_compo.service_box.service_homes.service_content, link, images";
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

  const colorizeImageStyle = {
    filter: "brightness(80%) saturate(100%)",
    color: "#a002fb",
  };

  const whiteImageStyle = {
    filter:
      "brightness(0) invert(1) sepia(1) brightness(8) saturate(100) hue-rotate(0deg)",
  };

  return (
    <>
      <div>
        <div className="banner1">
          <SimpleSlider data={data} />
        </div>
        <div className="banner2" id="productid">
          <div className="second-banner">
            {/* {data.attributes.productleft.map((product) => ( */}
            <div className="art-product-content">
              <div className="art-product-content-inner">
                <h3
                  className="section-title"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration={1500}
                >
                  {data.attributes.productleft.title}
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration={1500}
                >
                  {data.attributes.productleft.description}
                </p>
              </div>
            </div>
            {/* ))} */}
            <div className="art-products">
              <video muted loop autoPlay="autoplay">
                <source src={product_video} type="video/mp4" />
              </video>
              <div className="art-products-inner">
                <div className="art-products-inner-logo">
                  <img
                    data-aos="fade-down"
                    data-aos-delay="300"
                    data-aos-duration={1500}
                    src={whizrange}
                    alt=""
                    width="100px"
                    height="70px"
                    style={whiteImageStyle}
                  />
                </div>
                <div className=" whizrange-product">
                  <div
                    className="art-product-box-outer"
                    data-aos="fade-down"
                    data-aos-delay="300"
                    data-aos-duration={1500}
                  >
                    <a href={`/Products/whizrange`} className="">
                      <div className="art-product-box">
                        <div className="art-product-box-inner-whizrange">
                          <img src={shooting} alt="shooting" />
                          <p>
                            Simulation-based platform that trains professionals
                            to respond to real-world cyberattacks.
                          </p>
                          {/* <img src={whiz_box.logo_url} alt="" />
                            <p>{whiz_box.description}</p> */}

                          <i class="fas fa-arrow-right"></i>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div
                    className="art-product-box-outer"
                    data-aos="fade-down"
                    data-aos-delay="300"
                    data-aos-duration={1500}
                  >
                    <a href={`/`} className="">
                      <div className="art-product-box">
                        <div className="art-product-box-inner-whizrange">
                          <img src={virtuallab} alt="virtuallab" />
                          <p>
                            An adaptable, triple-layer security system that uses
                            industry-standard mature signature technology with
                            highly optimized machine language.
                          </p>
                          {/* <img src={whiz_box.logo_url} alt="" />
                            <p>{whiz_box.description}</p> */}

                          <i class="fas fa-arrow-right"></i>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="art-products-inner-whizrange">
                <div className="art-products-inner-logo-zerohack">
                  <img
                    data-aos="fade-down"
                    data-aos-delay="300"
                    data-aos-duration={1500}
                    src={zerohack}
                    alt=""
                    width="150px"
                    height="50px"
                  />
                </div>
                <div className="zerohack-product">
                  <div
                    className="art-product-box-outer"
                    data-aos="fade-down"
                    data-aos-delay="300"
                    data-aos-duration={1500}
                  >
                    <a href={`/Products/trace`} className="">
                      <div className="art-product-box">
                        <div className="art-product-box-inner">
                          <img
                            src={traceicon}
                            alt="traceicon"
                            style={{
                              ...colorizeImageStyle,
                              objectFit: "cover",
                            }}
                          />
                          <img src={tracelogo} alt="tracelogo" />
                          <p>
                            A highly scalable and adaptable cyber deception
                            software that has been designed to capture and
                            analyze live and real attacks on any enterprise.
                          </p>
                          <div>
                            <i class="fas fa-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div
                    className="art-product-box-outer"
                    data-aos="fade-down"
                    data-aos-delay="300"
                    data-aos-duration={1500}
                  >
                    <a href={`/Products/hids`} className="">
                      <div className="art-product-box">
                        <div className="art-product-box-inner">
                          <img
                            src={hidsicon}
                            alt="traceicon"
                            style={{
                              ...colorizeImageStyle,
                              objectFit: "cover",
                            }}
                          />
                          <h3>HIDS</h3>
                          <p>
                            WhizHack HIDS solution uses advanced analytics,
                            machine learning, and rule-based algorithms to
                            detect anomalies, patterns
                          </p>
                          <div>
                            <i class="fas fa-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div
                    className="art-product-box-outer"
                    data-aos="fade-down"
                    data-aos-delay="300"
                    data-aos-duration={1500}
                  >
                    <a href={`/Products/nids`} className="">
                      <div className="art-product-box">
                        <div className="art-product-box-inner">
                          <img
                            src={nidesicon}
                            alt="traceicon"
                            style={{
                              ...colorizeImageStyle,
                              objectFit: "cover",
                            }}
                          />
                          <h3>NIDS</h3>
                          <p>
                            It is an active response solution which is designed
                            to alter the flow of network traffic based on threat
                            detection.
                          </p>
                          <div>
                            <i class="fas fa-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section3">
          <div className="form-container">
            <div className="form-row">
              <div className="div-left">
                <div className="form-img">
                  <Lottie
                    loop
                    animationData={animationData}
                    play
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
              <div className="div-right">
                <div className="form-content">
                    <div>
                      <h3>Partner with us for the next generation products</h3>
                      <p>To register, please fill out the form with your contact information and we will get back to you shortly.</p>
                    </div>
                  <ContactForm option={data.attributes.contact.product_type} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner3" id="servicesid">
          <div className="fourth-banner">
            <div className="art-product-content2">
              <div className="art-product2-content-inner">
                <h3
                  className="section-title"
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-duration={1500}
                >
                  {data.attributes.service_compo.title}
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration={1500}
                >
                  {" "}
                  {data.attributes.service_compo.description}
                </p>
                {/* <a href="/" className="clipped-btns">
                Know more
              </a> */}
              </div>
            </div>
            <div className="art-products2">
              <div className="art-products2-inner">
                {data.attributes.service_compo.service_box.map((box) => (
                  <div
                    className="art-product2-box-outer"
                    key={box.id}
                    data-aos="fade-down"
                    data-aos-delay="300"
                    data-aos-duration={1500}
                  >
                    <div className="art-product2-box">
                      <div className="art-product2-box-inner">
                        <img src={box.image_url} alt="" />
                        {box.service_homes.data.map((service) => (
                          <div>
                            <h5>{service.attributes.title}</h5>
                            <ul>
                              {service.attributes.service_content.map(
                                (content) => (
                                  <li>{content.title}</li>
                                )
                              )}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                    <a href={`${box.redirect_url}`} className="clipped-btns">
                      Know more
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="section4">
          <div className="form-container">
            <div className="form-row form-row2">
              <div className="div-left">
                <div className="form-img2">
                  <Lottie
                    loop
                    animationData={animationData}
                    play
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>

                  <div className="div-right">
                    <div className="form-content">
                      <h3>Partner With Us</h3>
                      <p>Join WhizHack Technologies in Empowering Individuals and Organizations with the Necessary Skills and Knowledge to Protect Themselves and Their Businesses from Cyber Threats.</p>
                      <ContactForm2 />
                    </div>
                  </div>
            </div>
          </div>
        </div>
        <div className="banner4" id="trainingid">
          <div className="fourth-banner">
            <div className="art-product4-content">
              <div className="art-product4-content-inner">
                <h3
                  className="section-title"
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration={1500}
                >
                  Training
                </h3>
              </div>
            </div>
            <div className="art-products4">
              <div className="art-product4-content-parent">
                <div
                  className="art-product-box-outer"
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-duration={1500}
                >
                  <a href={`/Trainings/enterprise`} className="">
                    <div className=" art-product-box-training">
                      <div className="art-product-box-inner">
                        <img src={enterprise} alt="enterprise" />
                        <h3>Enterprise </h3>
                        <p>
                          Enterprise training is versatile, offered through
                          in-person sessions, online courses, and interactive
                          workshops, aimed at fostering a foundational
                          understanding of cybersecurity principles among
                          employees to bolster organizational defenses.
                        </p>
                        {/* <img src={career.icon_url} alt="" />
                          <h3>{career.title}</h3>

                          <p>
                            {career.content.split(" ").slice(0, 30).join(" ")}
                          </p> */}
                        <i class="fas fa-arrow-right"></i>
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  className="art-product-box-outer"
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-duration={1500}
                >
                  <a href={`/Trainings/npti`} className="">
                    <div className=" art-product-box-training">
                      <div className="art-product-box-inner">
                        <img src={industry} alt="industry" />
                        <h3>Industry Specific </h3>
                        <p>
                          India’s First Experiential Post Graduate Diploma in
                          Cyber Security (PGDCS) Program for Core Engineers in
                          partnership with NPTI (National Power Training
                          Institute).
                        </p>
                        {/* <img src={career.icon_url} alt="" />
                          <h3>{career.title}</h3>

                          <p>
                            {career.content.split(" ").slice(0, 30).join(" ")}
                          </p> */}
                        <i class="fas fa-arrow-right"></i>
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  className="art-product-box-outer"
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-duration={1500}
                >
                  <a href={`/Trainings/government`} className="">
                    <div className=" art-product-box-training">
                      <div className="art-product-box-inner">
                        <img src={gov} alt="goverment" />
                        <h3>Government </h3>
                        <p>
                          WhizHack is providing security against some of the
                          most advanced cyber-attacks perpetuated by state
                          actors and cyber criminals in key Govt departments of
                          Centre and States in India.
                        </p>
                        {/* <img src={career.icon_url} alt="" />
                          <h3>{career.title}</h3>

                          <p>
                            {career.content.split(" ").slice(0, 30).join(" ")}
                          </p> */}
                        <i class="fas fa-arrow-right"></i>
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  className="art-product-box-outer"
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-duration={1500}
                >
                  <a href={`/career`} className="">
                    <div className=" art-product-box-training">
                      <div className="art-product-box-inner">
                        <img src={career} alt="career" />
                        <h3>Career Pathways </h3>
                        <p>
                          Teenagers across the country will have the opportunity
                          to crack codes, fix security flaws and examine .
                        </p>
                        {/* <img src={career.icon_url} alt="" />
                          <h3>{career.title}</h3>

                          <p>
                            {career.content.split(" ").slice(0, 30).join(" ")}
                          </p> */}
                        <i class="fas fa-arrow-right"></i>
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  className="art-product-box-outer"
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-duration={1500}
                >
                  <a href={`/Trainings/bridge`} className="">
                    <div className=" art-product-box-training">
                      <div className="art-product-box-inner">
                        <img src={bridges} alt="bridges" />
                        <h3>International Bridge Courses </h3>
                        <p>
                          Complete your Masters in Cyber Security from
                          University at Albany (NSA certified center of
                          excellence) at an Economical value with us.
                        </p>

                        <i class="fas fa-arrow-right"></i>
                      </div>
                    </div>
                  </a>
                </div>
                {/* ))} */}
              </div>
            </div>
          </div>
        </div>

        <div className="ransomeware">
          <div className="container-fluid">
            <div className="row">
              <div className="">
                <div className="ransomeware-content">
                  <video muted autoPlay="autoplay" playsinline>
                    <source src={ran_video} type="video/mp4" />
                  </video>
                  <div className="ransomeware-content-img">
                    <h1>Enterprise Ransomware Protection</h1>
                    <p>
                      Whizhack conduct Ransomware simulations to test and
                      enhance their preparedness, response, and recovery
                      mechanisms against potential ransomware attacks, helping
                      to identify vulnerabilities and improve overall
                      cybersecurity measures.
                    </p>
                    <a
                      data-aos="fade-down"
                      data-aos-delay="400"
                      data-aos-duration={1500}
                      href="/ransomeware"
                      className="ransomeware-btns"
                    >
                      Know More
                      {/* <i class="fas fa-arrow-right"></i> */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Helmet>
          <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "WhizHack - Comprehensive Cyber Security Solutions, Training and Services in India",
              "url": "https://whizhack.com/",
              "logo": "https://whizhack.com/static/media/logo.28f5219f6f0600c24d0b997bca731536.svg",
              "alternateName": "WhizHack Technologies",
              "sameAs": ["https://whizhack.com/"],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "8447223249",
                  "contactType": "customer service",
                  "email": "info@whizhack.com",
                  "areaServed": "IN",
                  "availableLanguage": "en"
                }
              ]
            }
          `}
          </script>
        </Helmet>
      </div>
    </>
  );
}

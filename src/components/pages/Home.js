import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loader from "../inc/Loader";
import SimpleSlider from "../inc/Slider";
import AOS from "aos";
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
import iticon from "../images/icons/IT icon (1).svg";
import oticon from "../images/icons/OT icon (1).svg";
import hidsicon from "../images/icons/computer-networks Edit.png";
import nidesicon from "../images/icons/global-network Edit.png";
import product_video from "../images/video/product BG.webm";
import zerohack from "../images/2Zero hack.png";
import whizrange from "../images/whizrange logo.png";
import layer from "../images/Layer 17.png";
import chain from "../images/chain.png";
import security from "../images/security-room.png";
import performance from "../images/performance.png";
import zerohackN from "../images/ZeroHack-N 1.png";
import zerohackS from "../images/ZeroHack S 1.png";
import zerohackU from "../images/ZeroHack-U 1.png";
import zerohackH from "../images/ZeroHack-H 1.png";
import Lottie from "react-lottie-player";
import { Helmet } from "react-helmet";
import animationData from "../json/animation.json";

export default function Home() {
  const uri =
    "https://test.whizhack.com/api/home?populate=productleft.product_button, contact.product_type, link, images";
  const { loading, error, data } = useFetch(uri);

  useEffect(() => {
    if (!loading && !error && data) {
      AOS.init();
    }
  }, [loading, error, data]);

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
            <div className="col-lg-4">
              <div className="zerohack-logo">
                <img src={zerohack} alt="zerohack-logo" width={250} />
                <p>
                  An adaptable, triple-layer security system that uses
                  industry-standard mature signature technology with highly
                  optimized machine language and deep learning-based models on
                  live traffic to detect threats in the hybrid cloud.
                </p>
              </div>
            </div>

            <div className="col-lg-8 right-content-zerohack">
              <div className="zerohack-logo-card">
                <video muted loop autoPlay="autoplay">
                  <source src={product_video} type="video/mp4" />
                </video>


              <div className="art-products-inner">
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
                        <img
                            src={nidesicon}
                            alt="traceicon"
                            className="product-images"
                          />
                          <img
                            src={zerohackU}
                            alt="traceicon"
                            className=""
                          />
                          <p>
                            It is an active response solution which is designed to atter the flow of network traffic based on threat detection.
                          </p>

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
                          <img src={nidesicon} alt="virtuallab" />
                          <img src={zerohackS} alt="zerohacks" />
                          <p>
                          It is an active response solution which is designed to atter the flow of network traffic based on threat detection.
                          </p>

                          <i class="fas fa-arrow-right"></i>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="art-products-inner-whizrange">
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
                            className="product-images"
                          />
                          <img src={tracelogo} alt="tracelogo" className="product-images22" />
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
                            className="product-images"
                          />
                          <img src={zerohackH} alt="tracelogo" className="product-images2" />
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
                            className="product-images"
                          />
                          <img src={zerohackN} alt="tracelogo" className="product-images2" />
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
        </div>
        <div className="zerohack-services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="zerohack-services-contents">
                  <div className="zerohack-services-content">
                    <img src={layer} alt="img" width={65}  />
                    <h5>Signature tech and deception for hybrid cloud security.</h5>
                  </div>

                  <div className="zerohack-services-content">
                    <img src={chain} alt="img" width={65}  />
                    <h5>Centralized platform for compliance and risk</h5>
                  </div>

                  <div className="zerohack-services-content">
                    <img src={security} alt="img" width={65} />
                    <h5>Assessments and SOC services for ongoing protection</h5>
                  </div>

                  <div className="zerohack-services-content">
                    <img src={performance} alt="img" width={65} />
                    <h5>Hands-on programs combat cyber threats</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="whizrange">
            <div className="col-lg-4">
            <div className="whizrange-logo">
                <img src={whizrange} alt="whizrange-logo" width={150} />
                <p>
                  An adaptable, triple-layer security system that uses
                  industry-standard mature signature technology with highly
                  optimized machine language and deep learning-based models on
                  live traffic to detect threats in the hybrid cloud.
                </p>
              </div>
            </div>

            <div className="col-lg-8 whizlabs-card">
            <div className="art-products-inner-whizrange-card">
                <div className=" whizrange-product-card">
                  <div
                    className="art-product-box-outer"
                    data-aos="fade-down"
                    data-aos-delay="300"
                    data-aos-duration={1500}
                  >
                    <a href={`/Products/whizrange`} className="">
                      <div className="art-product-box-whizrange">
                        <div className="art-product-box-inner-whizrange">
                          <img src={shooting} alt="shooting" />
                          <p>
                            Simulation-based platform that trains professionals
                            to respond to real-world cyberattacks.
                          </p>

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
                      <div className="art-product-box-whizrange">
                        <div className="art-product-box-inner-whizrange">
                          <img src={virtuallab} alt="virtuallab" />
                          <p>
                            An adaptable, triple-layer security system that uses
                            industry-standard mature signature technology with
                            highly optimized machine language.
                          </p>

                          <i class="fas fa-arrow-right"></i>
                        </div>
                      </div>
                    </a>
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
                    <p>
                      To register, please fill out the form with your contact
                      information and we will get back to you shortly.
                    </p>
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
                  Services That Keep Securing Digital
                </h3>
                <p
                  style={{
                    animation: "fadeUp 1.5s ease-in-out",
                    animationDelay: "0.2s",
                  }}
                >
                  {" "}
                  Whizhack is your trusted partner for IT/OT security services.
                  Our specialized teams have years of experience and
                  unparalleled commitment to work with select customers in
                  meeting most extreme security challenges for durable
                  partnerships
                </p>
                {/* <a href="/" className="clipped-btns">
                Know more
              </a> */}
              </div>
            </div>
            <div className="art-products2">
              <div className="art-products2-inner">
                <div
                  className="art-product2-box-outer"
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-duration={1500}
                >
                  <div className="art-product2-box">
                    <div className="art-product2-box-inner">
                      <img src={iticon} alt="iticon" />
                      <div>
                        <h5>Services for IT </h5>
                        <ul>
                          <li> Vulnerability Assessment </li>
                          <li> Penetration Testing </li>
                          <li>Vendor Risk Assessment</li>
                          <li>Threat Modelling</li>
                          <li>DevSecOps </li>
                          <li> Web Application Security</li>
                          <li>Mobile Application Security</li>
                          <li>Infrastructure Security</li>
                          <li> Red Team Exercise</li>
                          <li>SOC</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <a href={`/serviceIT`} className="clipped-btns">
                    Know more
                  </a>
                </div>

                <div
                  className="art-product2-box-outer"
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-duration={1500}
                >
                  <div className="art-product2-box">
                    <div className="art-product2-box-inner">
                      <img src={oticon} alt="oticon" />
                      <div>
                        <h5>Services for OT </h5>
                        <ul>
                          <li> Vendor Risk Assessment </li>
                          <li>Threat Modelling </li>
                          <li> IoT Device Security </li>
                          <li> Vulnerability Assessment</li>
                          <li> Infrastructure Security </li>
                          <li>SOC</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <a href={`/serviceOT`} className="clipped-btns">
                    Know more
                  </a>
                </div>
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
                  <p>
                    Join WhizHack Technologies in Empowering Individuals and
                    Organizations with the Necessary Skills and Knowledge to
                    Protect Themselves and Their Businesses from Cyber Threats.
                  </p>
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
                  style={{
                    animation: "fadeUp 1.5s ease-in-out",
                    animationDelay: "0.2s",
                  }}
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
                        <img
                          src={enterprise}
                          alt="enterprise"
                          className="training-images"
                        />
                        <h3>Enterprise </h3>
                        <p>
                          Enterprise training is versatile, offered through
                          in-person sessions, online courses, and interactive
                          workshops.
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
                        <img
                          src={industry}
                          alt="industry"
                          className="training-images"
                        />
                        <h3>Industry Specific </h3>
                        <p>
                          India’s First Experiential Post Graduate Diploma in
                          Cyber Security (PGDCS) Program for Core Engineers in
                          partnership with NPTI.
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
                        <img
                          src={gov}
                          alt="goverment"
                          className="training-images"
                        />
                        <h3>Government </h3>
                        <p>
                          WhizHack is providing security against some of the
                          most advanced cyber-attacks perpetuated by state
                          actors and cyber criminals.
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
                        <img
                          src={career}
                          alt="career"
                          className="training-images"
                        />
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
                  <a href={`/Trainings/international-bridge-courses`} className="">
                    <div className=" art-product-box-training">
                      <div className="art-product-box-inner">
                        <img
                          src={bridges}
                          alt="bridges"
                          className="training-images"
                        />
                        <h3>International Bridge Courses </h3>
                        <p>
                          Complete your Masters in Cyber Security from
                          University at Albany (NSA certified center of
                          excellence).
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

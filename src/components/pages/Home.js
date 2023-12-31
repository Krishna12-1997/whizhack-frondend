import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SimpleSlider from "../inc/Slider";
import ContactForm from "../inc/ContactForm";
import ContactForm2 from "../inc/ContactForm2";
import { ThreeDots } from "react-loader-spinner";
import useFetch from "../../hooks/useFetch";
import ran_video from "../images/video/Ransomware Section.mp4";
import product_video from "../images/video/product BG.mp4";
import zerohack from "../images/2Zero.svg";
import whizrange from "../images/whizrange logo.png";
import Lottie from "react-lottie-player";
import animationData from "../json/animation.json";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const uri =
    "http://15.207.20.62:1337/api/home?populate=productleft.product_button, whizrangeproduct.button, box.button,contact.partner_contact, contact.product_type, service_compo.service_box.service_homes.service_content, Institution_contact.product_type,Institution_contact.cityname, Institution_contact.partner_contact, career.link ,career.career_right ";
  const { loading, error, data } = useFetch(uri);
  // 15.207.20.62 15.207.20.62
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
      <div className="banner1">
        <SimpleSlider />
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
              {/* <a
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-duration={1500}
                href="/"
                className="clipped-btns"
              >
                {data.attributes.productleft.product_button.label}
              </a> */}
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
                {data.attributes.whizrangeproduct.map((whiz_box) => (
                  <div
                    className="art-product-box-outer"
                    data-aos="fade-down"
                    data-aos-delay="300"
                    data-aos-duration={1500}
                  >
                     <a
                          href={`${whiz_box.button.redirect_url}`}
                          className=""
                        >
                    <div className="art-product-box">
                      <div className="art-product-box-inner-whizrange">
                        {/* <img src={whiz_box.image_url} alt="" /> */}
                        <img src={whiz_box.logo_url} alt="" />
                        <p>{whiz_box.description}</p>
                        <a
                          href={`${whiz_box.button.redirect_url}`}
                          className=""
                        >
                          <i class="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                    </a>
                  </div>
                ))}
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
                {data.attributes.box.map((box) => (
                  <div
                    className="art-product-box-outer"
                    data-aos="fade-down"
                    data-aos-delay="300"
                    data-aos-duration={1500}
                  >
                     <a
                          href={`${box.button.redirect_url}`}
                          className=""
                        >
                    <div className="art-product-box">
                      <div className="art-product-box-inner">
                        <img
                          src={box.image_url}
                          alt=""
                          style={{ ...colorizeImageStyle, objectFit: "cover" }}
                        />
                        {box.text_logo ? (
                          <h3>{box.text_logo}</h3>
                        ) : (
                          <>
                            <img src={box.logo_url} alt="" />
                          </>
                        )}
                        <p>{box.description.split(" ")
                            .slice(0, 20)
                            .join(" ")}</p>
                       <div>
                          <i class="fas fa-arrow-right"></i>
                          </div>
                      </div>
                    </div>
                    </a>
                  </div>
                ))}
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
                {data.attributes.contact.partner_contact.map((contact) => (
                  <div>
                    <h3>{contact.title}</h3>
                    <p>{contact.description}</p>
                  </div>
                ))}
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
          <div
            className="art-products2"
            style={{
              backgroundImage: `url(${data.attributes.service_compo.right_bg_url})`,
            }}
          >
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

            {data.attributes.Institution_contact.partner_contact.map(
              (datahe) => (
                <div className="div-right">
                  <div className="form-content">
                    <h3>{datahe.title}</h3>
                    <p>{datahe.description}</p>
                    <ContactForm2
                      option={data.attributes.Institution_contact.product_type}
                      city={data.attributes.Institution_contact.cityname}
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="banner4" id="trainingid">
        <div className="fourth-banner">
          <div
            className="art-product4-content"
            style={{ backgroundImage: `url(${data.attributes.career.bg_url})` }}
          >
            <div className="art-product4-content-inner">
              <h3
                className="section-title"
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration={1500}
              >
                {data.attributes.career.title}
              </h3>
            </div>
          </div>
          <div className="art-products4">
            <div className="art-product4-content-parent">
             
              {data.attributes.career.career_right.map((career) => (
                <div
                  className="art-product-box-outer"
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-duration={1500}
                >
                  <a href={`${career.label_redirect}`} className="">
                  <div className="art-product-box">
                    <div className="art-product-box-inner">
                      <img src={career.icon_url} alt="" />
                      <h3>{career.title}</h3>

                      <p>{career.content .split(" ")
                            .slice(0, 20)
                            .join(" ")}</p>
                      <i class="fas fa-arrow-right"></i>
                    </div>
                  </div>
                  
                  </a>
                </div>
              ))}

             
            </div>
          </div>
        </div>
      </div>

      <div className="ransomeware">
        <div className="container-flu">
          <div className="row">
            <div className="">
              <div className="ransomeware-content">
                <video muted autoPlay="autoplay" playsinline>
                  <source src={ran_video} type="video/mp4" />
                </video>
                <div className="ransomeware-content-img">
                  <h1>Enterprise Ransomware Protection</h1>
                  <p>
                    Whizhack conduct Ransomware simulations to test and enhance
                    their preparedness, response, and recovery mechanisms
                    against potential ransomware attacks, helping to identify
                    vulnerabilities and improve overall cybersecurity measures.
                  </p>
                  <a
                    data-aos="fade-down"
                    data-aos-delay="400"
                    data-aos-duration={1500}
                    href="/ransomeware"
                    className="ransomeware-btns"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

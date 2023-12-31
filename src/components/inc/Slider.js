import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Persons from "../images/Persons.png";
import xdr from "../images/XDR.png"

const SimpleSlider = ({ data }) => {
  function scrollToSection(e, sectionId) {
    e.preventDefault();

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="">
      <Slider {...settings}>
        {data.attributes.images.map((img) => (
          <div className="d-flex">
            <div className="col-lg-5 banner-text-content">
              <div className="banner-text">
                <img
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-duration={1500}
                  src={data.attributes.logo_url}
                  alt=""
                />
                <h2
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration={1500}
                >
                  {data.attributes.title}
                </h2>
                <div className="home-buttons">
                  {data.attributes.link.map((link) => (
                    <a
                      href={`#${link.redirect_id}`}
                      key={link.label}
                      onClick={(e) => scrollToSection(e, link.redirect_id)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-7 banner-text-img">
              <div className="banner-slider">
              <div
                    className="banner-img"
                    style={{
                      backgroundImage: `url(${xdr}) `,
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                 
                <div
                  className="banner-img"
                  style={{
                    backgroundImage: `url(${img.bg_image_url}) `,
                    backgroundRepeat: "no-repeat",
                  }}
                > </div> </div>
                <div>
                   <div
                    className="banner-img-persons"
                    style={{
                      backgroundImage: `url(${Persons}) `,
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                   
                   
                   </div>
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;

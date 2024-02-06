import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Persons from "../images/Persons.png";
import xdr from "../images/XDR Securing Digital NEW.png";

const SimpleSlider = ({ data }) => {
  function scrollToSection(e, sectionId) {
    e.preventDefault();

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  const isMobile = window.innerWidth <= 480; 

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  fade: true,
  autoplay: !isMobile,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 0,
        slidesToScroll: 0,
        autoplay: false 
      }
    }
  ]
};

  return (
    <div className="">
      <Slider {...settings}>
        {data.attributes.images.map((img) => (
          <div className="d-flex slider-home-manf-serv">
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
            <div className="col-lg-7 banner-text-img ">
               <div className="banner-slider">
                <img
                  className=""
                  src={xdr}
                  alt="xdr"
                />

                <img
                  className="banner-img"
                  src={img.bg_image_url}
                  alt="industry"
                />

                 <img
                  className="person"
                  src={Persons}
                  alt="person"
                />
                {/* </img>
                </img> */}
              </div> 
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;

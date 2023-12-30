import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import logo2 from "../images/logo2.png";
import { ThreeDots } from "react-loader-spinner";
import useFetch from "../../hooks/useFetch";
import { useInView } from "react-intersection-observer";

const SimpleSlider = () => {

  const uri = "http://15.207.20.62:1337/api/home?populate=link, images";
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
    autoplay: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {data.attributes.images.map((img) => (
          <div>
            <div className="banner-slider">
              <div
                className="banner-img"
                style={{ backgroundImage: `url(${img.bg_image_url})` }}
              >
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
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;

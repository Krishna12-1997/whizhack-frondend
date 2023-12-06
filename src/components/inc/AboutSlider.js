import React, { useState } from "react";
import Slider from "react-slick";

const AboutSlider = ({ recongni }) => {
  const [settings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    fade: false,
    autoplay: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  return (
    <div>
      <Slider {...settings}>
        {recongni.map((recon) => (
          <div>
            <div className="recon_card">
              <h3>{recon.attributes.title}</h3>
              <p style={{textAlign: "center"}}>{recon.attributes.description}</p>
              <div className="p-auto">
                <a href="#">
                  <p>{recon.attributes.button.title}</p>
                  <img src={recon.attributes.button.icon_url} alt="icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AboutSlider;

import React, { useState } from "react";
import Slider from "react-slick"

const SimpleSlider = ({ card }) => {
  const [settings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    fade: false,
    autoplay: false,
    arrows: true,
    slidesToShow: 4,
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
        {card.map((module) => (
          <div>
            <div className="cyber-slider">
              <div className="cyber-slider-img">
                <img src={module.icon_url} alt="" />
              </div>
              <h3>{module.label}</h3>
              <p>{module.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;

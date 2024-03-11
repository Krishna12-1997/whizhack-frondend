import React, { useState, useEffect } from "react";
import Slider from "react-slick";

const SimpleSlider = ({ data }) => {
  const [settings] = useState({
    dots: false,
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
        breakpoint: 996,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
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
      {data.attributes.testing.map((test) => (
        <div>
        
          <div className="testing-slider" key={test.id} data-aos="fade-up" data-aos-delay="300" data-aos-duration={1500}>
            <div className="testing-slider-img">
              <img src={test.image_url} alt="" />
            </div>
            <h3>{test.box_title}</h3>
            <p>
              {test.description}
            </p>
          </div>
         
        </div>
       
      ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;

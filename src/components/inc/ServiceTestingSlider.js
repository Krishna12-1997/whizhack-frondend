import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import img1 from ".././images/service-slider/1.png";
import img2 from ".././images/service-slider/2.png";
import useFetch from "../../hooks/useFetch";
import { ThreeDots } from  'react-loader-spinner'

const SimpleSlider = (props) => {
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

  const uri =
  "http://15.207.20.62:1337/api/service?populate=testing";
const { loading, error, data } = useFetch(uri);
// console.log(data.attributes);
if (loading) {
  return <ThreeDots 
  height="80" 
  width="80" 
  radius="9"
  color="#4fa94d" 
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
   /> 
  // <p>Loading data...</p>;
}

if (error) {
  return <p>Error: {error.message}</p>;
}


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

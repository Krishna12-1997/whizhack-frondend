import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import logo2 from '../images/logo2.png';
import { ThreeDots } from  'react-loader-spinner'
import useFetch from "../../hooks/useFetch";
import { useInView } from 'react-intersection-observer';

const SimpleSlider = () => {

  // const [ref, inView] = useInView({
  //   triggerOnce:true,
  //     });
  //     const [isVisible, setIsVisible] = useState(false);
  //     useEffect(()=>{
  //         if(inView){
  //           setIsVisible(true);
  //         }
  //     }, [inView]);

  const uri =
  "http://40.88.24.216:1337/api/home?populate=link, images";
const { loading, error, data } = useFetch(uri);
// console.log(data.attributes);
if (loading) {
  return <div className="d-flex justify-content-center"><ThreeDots 
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
}

if (error) {
  return <p>Error: {error.message}</p>;
}

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
  
      <Slider {...settings}>
      {data.attributes.images.map((img) => (
        <div>
          <div className="banner-slider">
            <div className="banner-img" style={{backgroundImage: `url(${img.bg_image_url})`}}>
              <div className="banner-text">
                <img data-aos="fade-down" data-aos-delay="300" data-aos-duration={1500} src={data.attributes.logo_url} alt=""  />
                <h2 data-aos="fade-up" data-aos-delay="400" data-aos-duration={1500} >{data.attributes.title}</h2>
                <div className="home-buttons">
                {data.attributes.link.map((link) => (
                
                  <a href="/">{link.label}</a>
                  
               
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


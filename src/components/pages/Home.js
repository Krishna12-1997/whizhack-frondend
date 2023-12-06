import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import SimpleSlider from "../inc/Slider";
import ContactForm from "../inc/ContactForm";
import ContactForm2 from "../inc/ContactForm2";
import { ThreeDots } from "react-loader-spinner";
import useFetch from "../../hooks/useFetch";
import { useInView } from 'react-intersection-observer';


export default function Home() {
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
    "http://40.88.24.216:1337/api/home?populate=productleft.product_button, box.button,contact.partner_contact, contact.product_type, service_compo.service_box, Institution_contact.product_type,Institution_contact.cityname, Institution_contact.partner_contact, career.link ,career.career_right ";
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

  return (
    <>
      <div className="banner1">
        <SimpleSlider />
      </div>
      <div className="banner2">
        <div className="second-banner">
          {/* {data.attributes.productleft.map((product) => ( */}
          <div className="art-product-content">
            <div className="art-product-content-inner">
              <h3 className="section-title" data-aos="fade-up" data-aos-delay="300" data-aos-duration={1500}>
                {data.attributes.productleft.title}
              </h3>
              <p data-aos="fade-up" data-aos-delay="400" data-aos-duration={1500}>{data.attributes.productleft.description}</p>
              <a data-aos="fade-down" data-aos-delay="400" data-aos-duration={1500} href="/" className="clipped-btns">
                {data.attributes.productleft.product_button.label}
              </a>
            </div>
          </div>
          {/* ))} */}
          <div className="art-products">
            <div className="art-products-inner">
              {data.attributes.box.map((box) => (
                <div className="art-product-box-outer" data-aos="fade-down" data-aos-delay="300" data-aos-duration={1500}>
                  <div className="art-product-box">
                    <div className="art-product-box-inner">
                      <img src={box.logo_url} alt=""  />
                      <img src={box.image_url} alt="" />
                      <p>{box.description}</p>
                    </div>
                  </div>
                  <a href="/" className="clipped-btns">{box.button.label}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="form-container">
          <div className="form-row">
            <div className="div-left">
              <div className="form-img">
                <img src={data.attributes.contact.image_url} alt="" />
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
      <div className="banner3">
        <div className="fourth-banner">
          <div className="art-product-content2">
            <div className="art-product2-content-inner">
              <h3 className="section-title"  data-aos="fade-down" data-aos-delay="300" data-aos-duration={1500}>
                {data.attributes.service_compo.title}
              </h3>
              <p  data-aos="fade-up" data-aos-delay="400" data-aos-duration={1500}> {data.attributes.service_compo.description}</p>
              <a href="/" className="clipped-btns" >
                Know more
              </a>
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
                <div className="art-product2-box-outer" key={box.id} data-aos="fade-down" data-aos-delay="300" data-aos-duration={1500}>
                  <div className="art-product2-box">
                    <div className="art-product2-box-inner">
                      <h5>{box.head}</h5>
                      <img src={box.image_url} alt="" />
                      <p>{box.para}</p>
                    </div>
                  </div>
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
                <img src={data.attributes.Institution_contact.image_url} alt="" />
              </div>
            </div>

            {data.attributes.Institution_contact.partner_contact.map((datahe) => (
            <div className="div-right">
              <div className="form-content">
                <h3>{datahe.title}</h3>
                <p>
                {datahe.description}
                </p>
                <ContactForm2 option={data.attributes.Institution_contact.product_type} city={data.attributes.Institution_contact.cityname} />
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
      <div className="banner4">
        <div className="fourth-banner">
          <div className="art-product4-content" style={{ backgroundImage: `url(${data.attributes.career.bg_url})`}}>
            <div className="art-product4-content-inner">
              <h3 className="section-title" data-aos="fade-right" data-aos-delay="300" data-aos-duration={1500}>{data.attributes.career.title}</h3>
              <div className="art-product4-buttons" data-aos="fade-right" data-aos-delay="300" data-aos-duration={1500}>
               {data.attributes.career.link.map((link) => (
                <a href={link.redirect_url} className="clipped-btns">
                  {link.label}
                </a>
               ))}
                {/* <a href="/" className="clipped-btns">
                  Know more
                </a>
                <a href="/" className="clipped-btns">
                  Know more
                </a> */}
              </div>
              <img data-aos="fade-right" data-aos-delay="300" data-aos-duration={1500} src={data.attributes.career.certificate_url} alt="certificate" />
              <p>
                {data.attributes.career.certified_name}
              </p>
              {/* <p>Whizhack is your trusted partner for IT/OT security services. Our specialized teams have years of experience and unparalleled commitment to work with select customers in meeting most extreme security challenges for durable partnerships.</p> */}
            </div>
          </div>
          <div className="art-products4">
            <div className="art-product4-content-parent">
              <h3 data-aos="fade-down" data-aos-delay="300" data-aos-duration={1500}>{data.attributes.career.career_right.title}</h3>
              <p data-aos="fade-up" data-aos-delay="300" data-aos-duration={1500}>{data.attributes.career.career_right.content}</p>
              {/* <ul>
                <li>- Certificate from IIT-Jodhpur TISC</li>
                <li>- No specific Stream required</li>
                <li>- Live Virtual Labs</li>
              </ul> */}
              <a href="" className="clipped-btns">
                Know More
              </a>
            </div>

            <div className="partner">
               <p>{data.attributes.career.career_right.partner_title}</p>
               <img src={data.attributes.career.career_right.partner_url} alt="partner" width="250px" height="100px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

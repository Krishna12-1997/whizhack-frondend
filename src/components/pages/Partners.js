import React from "react";
import "./industry/industry.css";

import "./partners.css";
import { ThreeDots } from "react-loader-spinner";
import useFetch from "../../hooks/useFetch";
import service_banner_icon from "../images/decors/service_banner_icon.png";
import module1 from "../images/product-logos/module2.svg";

export default function Partners() {
  const uri =
    "http://15.207.20.62:1337/api/partner?populate=partner_contents.partner_card";
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

  return (
    <div>
      <div
        className="industry-banner-section"
        style={{
          background: `url(${data.attributes.bg_url})`,
          backgroundPosition: "center",
        }}
      >
        <img
          src={service_banner_icon}
          alt=""
          className="left-industry-banner-icon"
        />
        <img
          src={service_banner_icon}
          alt=""
          className="right-industry-banner-icon"
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="industry-banner-title">
                <h3 data-aos="fade-down" data-aos-delay="300" data-aos-duration={1500}>{data.attributes.title}</h3>
                <p data-aos="fade-up" data-aos-delay="300" data-aos-duration={1500}>{data.attributes.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {data.attributes.partner_contents.data.map((tit) => (
        <div className="partners-section2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="section-title-partner">
                  <h3>{tit.attributes.title}</h3>
                </div>
              </div>
              <div className="col-lg-12 partners-alliances-card">
              {tit.attributes.partner_card.map((content) => (
                
                  <div className="partners-alliances">
                    <div className="partner-alliance-inner">
                      <img src={content.logo_url} alt="" />
                      <h3 data-aos="fade-down" data-aos-delay="300" data-aos-duration={1500}>{content.title}</h3>
                      <p data-aos="fade-up" data-aos-delay="300" data-aos-duration={1500}>{content.description}</p>
                    </div>
                  </div>
                
              ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

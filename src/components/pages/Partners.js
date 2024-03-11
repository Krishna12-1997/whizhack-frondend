import React from "react";
import "./industry/industry.css";
import "./partners.css";
import service_banner_icon from "../images/decors/service_banner_icon.png";
import Loader from "../inc/Loader";
import useFetch from "../../hooks/useFetch";

export default function Partners() {

  const uri = "https://test.whizhack.com/api/partner?populate=partner_contents.partner_card";
  const { loading, error, data } = useFetch(uri);

  if (loading) {
    return <div><Loader loading={loading}/></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
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
            <div className="col-lg-12">
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

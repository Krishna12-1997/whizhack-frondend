import React from 'react'
import { ThreeDots } from "react-loader-spinner";
import useFetch from "../../../hooks/useFetch";
import service_banner_icon from "../../images/decors/service_banner_icon.png";
import './service.css';

const Service_OT = ({ data }) => {

  return (
    <>
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
                <h3>{data.attributes.title}</h3>
                <p>{data.attributes.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="policies-section2">
        <div className="container">
          <div className="row ">
          {data.attributes.service_ot_content.map((it, index) => (
            <div className={`mt-4 mb-5 OT ${
              index % 2 === 0 ? "even" : "odd"
            }`}>
            <div className="col-lg-6 my-auto">
               <img src={it.image_url} alt="image" width="100%" />
            </div>
            <div className="col-lg-6">
              <div className="policies-inner">
                <div className="section-title">
                  <h4>{it.title}</h4>
                </div>
                <p>{it.content}</p>
              </div>
            </div>
            </div>
            ))}
          </div>
        </div>
      </div>
  
      <div className="get-in-touch-service">
        <div className="container-flu">
          <div className="row">
            <div className="col-lg-12">
              <div className="head-title connect-us-new">
                <h3>If you have any queries related to our services, Connect with us</h3>
              </div>
              <div className="touch-button">
                <a href="/contact" className="clipped-btns">
                  Connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Service_OT;
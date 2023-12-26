import React from "react";
import { ThreeDots } from "react-loader-spinner";
import useFetch from "../../../hooks/useFetch";
import service_banner_icon from "../../images/decors/service_banner_icon.png";

const Service_IT = () => {
  const uri =
    "http://15.207.20.62:1337/api/service-it?populate=service_IT_content";
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
              <div className="col-lg-10">
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
          <div className="row justify-content-center">
            {data.attributes.service_IT_content.map((it) => (
              <div className="col-lg-10">
                <div className="policies-inner">
                  <div className="section-title">
                    <h4>{it.title}</h4>
                  </div>
                  <p>{it.content}</p>
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
              <div className="head-title">
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
  );
};

export default Service_IT;

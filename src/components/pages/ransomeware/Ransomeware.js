import React from "react";
import { ThreeDots } from "react-loader-spinner";
import useFetch from "../../../hooks/useFetch";
import "./ransomeware.css";
import service_banner_icon from "../../images/decors/service_banner_icon.png";

const Ransomeware = () => {
  const uri =
    "http://15.207.20.62:1337/api/ransomeware?populate=ransomeware_content.ransomeware_content_inner";
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
          className="guru-section1"
          style={{ backgroundImage: `url(${data.attributes.right_bg_url})` }}
        >
          <div className="ui1-banner1-parent-ransomeware">
            <div className="container-fluid">
              <div className="row justify-content-between">
                <div className="col-lg-5">
                  <div className="ui1-banner1-content-ransomeware">
                    <p
                      data-aos="fade-down"
                      data-aos-delay="300"
                      data-aos-duration={1500}
                    >
                      {data.attributes.title}
                    </p>
                    <h3
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration={1500}
                    >
                      {data.attributes.description}
                    </h3>
                    <div className="horizontal-line">
                      <div className="left-half"></div>
                      <div className="right-half"></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="policies-section2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="policies-inner">
                <div className="section-title-ransomeware">
                  <h3>{data.attributes.ransomeware_content.title}</h3>
                </div>
                <p>{data.attributes.ransomeware_content.description}</p>
                {data.attributes.ransomeware_content.ransomeware_content_inner.map(
                  (ransom) => (
                    <div className="section-title-ransomeware">
                      <h3>{ransom.title}</h3>
                      {ransom.description
                        .split("\n")
                        .map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                  )
                )}

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ransomeware;

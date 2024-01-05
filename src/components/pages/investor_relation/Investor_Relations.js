import React from "react";
import "../industry/industry.css";
import "../privacy.css";
import service_banner_icon from "../../images/decors/service_banner_icon.png";
import modal_img from "../../images/total_return.svg";

export default function Investor_Relations({ data }) {

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
                <h3>{data.attributes.title}</h3>
                <p>{data.attributes.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {data.attributes.year.investors.data.map((financal, index) => (
      <div class="modal fade investor-modals" id={`myModal-${index}`} role="dialog" key={financal.id} >
        {financal.attributes.investor_shareholder_content.map(
          (content) => (
            <div class="modal-dialog" key={content.id}>
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">{content.title}</h4>
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div class="modal-body">
                  <div className="investor-modal-content">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-12">
                          <p>{content.small_title}</p>
                        </div>
                        <div className="col-lg-6">
                          <div className="modal-img">
                            <img src={content.image_url} alt="" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="modal-content-inner">
                            <p>{content.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      ))}

      <div className="investor-performace">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3>{data.attributes.year.title}</h3>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div
                class="timeline-steps aos-init aos-animate"
                data-aos="fade-up"
              >
                {data.attributes.year.investors.data.map((financal, index) => (
                  <div class="timeline-step" key={financal.id}>
                    <div class="timeline-content">
                      <div class="inner-circle"></div>

                      <div
                        className="card"
                        data-toggle="modal"
                        data-target={`#myModal-${index}`}
                      >
                        <h5>{financal.attributes.title}</h5>
                        <p>{financal.attributes.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row investor-reports">
            <div className="col-lg-12">
              <div className="section-title">
                <h4>Financial Year 2023 Performance</h4>
              </div>
            </div>
            <div className="col-lg-12">
              <p>Quarterly Earnings Reports 2023</p>

              <div className="financial-data-cards">
                <p>Q1</p>
                <div className="download-reports">
                  <div className="financial-statement">
                    <a href="">
                      Financial Statement{" "}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 11.1351L11 16M11 16L16 11.1351M11 16L11 6"
                          stroke="#9747FF"
                          stroke-width="2"
                        />
                        <circle
                          cx="11"
                          cy="11"
                          r="10"
                          stroke="#9747FF"
                          stroke-width="2"
                        />
                      </svg>{" "}
                    </a>
                    <a href="">
                      Form-10K{" "}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 11.1351L11 16M11 16L16 11.1351M11 16L11 6"
                          stroke="#9747FF"
                          stroke-width="2"
                        />
                        <circle
                          cx="11"
                          cy="11"
                          r="10"
                          stroke="#9747FF"
                          stroke-width="2"
                        />
                      </svg>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 mt-5">
              <p>Annual Reports on Form 10-K</p>

              <div className="financial-data-cards">
                <p>Q1</p>
                <div className="download-reports">
                  <div className="financial-statement">
                    <a href="">
                      Financial Statement{" "}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 11.1351L11 16M11 16L16 11.1351M11 16L11 6"
                          stroke="#9747FF"
                          stroke-width="2"
                        />
                        <circle
                          cx="11"
                          cy="11"
                          r="10"
                          stroke="#9747FF"
                          stroke-width="2"
                        />
                      </svg>{" "}
                    </a>
                    <a href="">
                      Form-10K{" "}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 11.1351L11 16M11 16L16 11.1351M11 16L11 6"
                          stroke="#9747FF"
                          stroke-width="2"
                        />
                        <circle
                          cx="11"
                          cy="11"
                          r="10"
                          stroke="#9747FF"
                          stroke-width="2"
                        />
                      </svg>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="row investor-reports">
            <div className="col-lg-12">
              <div className="section-title">
                <h4>Our Investors</h4>
              </div>
            </div>
            {data.attributes.advisorpartner.map((adpar) => (
            <div className="col-lg-4">
              <div className="investor-profile">
              <img src={adpar.image_url} alt="img" />
              </div>
              <div className="investor-profile-content">
              <h4>{adpar.title}</h4>
              <p>{adpar.description}</p>
             
              </div>
            </div>
            ))}
           
          </div>
        </div>
      </div>
    </div>
  );
}

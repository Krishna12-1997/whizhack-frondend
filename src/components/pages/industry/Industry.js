import React, { useState } from "react";
import "../industry/industry.css";
import service_banner_icon from "../../images/decors/service_banner_icon.png";


export default function Industry({ data }) {
  const [activeTab, setActiveTab] = useState("Finance");

  const handleTabClick = (industryType) => {
    setActiveTab(industryType);
  };

  // Filter the industry_rights.data based on the activeTab
  const filteredIndustryRights =
    data.attributes.industry_right.industry_rights.data.filter(
      (industry_r) => industry_r.attributes.Industry_product_type === activeTab
    );

  return (
    <div>
      <div
        className="industry-banner-section"
        style={{ background: `url(${data.attributes.bg_url})`, backgroundPosition: 'center' }}
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
        />\
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="industry-banner-title">
                <h3 data-aos="fade-down" data-aos-delay="300" data-aos-duration={1500}>{data.attributes.title}</h3>
                <p data-aos="fade-up" data-aos-delay="300" data-aos-duration={1500}>{data.attributes.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="industry-section2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="industry-left-video-parent">
                <div className="industry-left-bg-video">
                  <img src={data.attributes.section.left_image_url} className='' alt="img" />
                  {/* <video muted loop autoPlay="autoplay">
                    <source
                      src={data.attributes.section.left_image_url}
                      type="video/mp4"
                    />
                  </video> */}
                </div>
                <div className="play_btn">
                  <img
                    src={data.attributes.section.play_btn_url}
                    alt="play_btn"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="industry-right-content">
                <div className="section-title" data-aos="fade-down" data-aos-delay="300" data-aos-duration={1500}>
                  <h3>{data.attributes.section.title}</h3>
                </div>
                <p data-aos="fade-down" data-aos-delay="300" data-aos-duration={1500}>{data.attributes.section.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="industry-section3">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-lg-3">
                            <div className="industry-type">
                                <h5 className='column-title'>{data.attributes.industry_left.title}</h5>
                                {data.attributes.industry_left.industry_lefts.data.map((industry) => (
                                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical" key={industry.id}>
                                  <button class="nav-link active" id="v-pills-home-tab" data-toggle="pill" data-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"><h5>{industry.attributes.title}</h5>
                                  <p>{industry.attributes.description}</p></button>
                                 
                                </div>
                               ))}
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="industry-products">
                                <h5 className='column-title'>{data.attributes.industry_right.title}</h5>
                                <div class="tab-content" id="v-pills-tabContent">
                                   <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                            <div className="container-fluid">
                                                <div className="row">
                                                {data.attributes.industry_right.industry_rights.data.map((industry_r) => (
                                                    <div className="col-lg-4" key={industry_r.id}>
                                                        <div className="industry-products-single">
                                                            <h5 className='title'>{industry_r.attributes.title}</h5>
                                                            <p>{industry_r.attributes.description}</p>
                                                             <a href="/" className='clipped-btns'>{industry_r.attributes.button.label}</a>
                                                            
                                                        </div>
                                                    </div>
                                                ))}
                                                   
                                                </div>
                                            </div>

                                   </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

      <div className="industry-section3">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-lg-3">
              <div className="industry-type">
                <h5 className="column-title">
                  {data.attributes.industry_left.title}
                </h5>
                <div className="tag">
                {data.attributes.industry_left.industry_lefts.data.map(
                  (industry, index) => (
                    <div
                      className="nav flex-column nav-pills"
                      key={industry.id}
                    >
                      <button
                        className={`nav-link ${
                          activeTab === industry.attributes.title ? "active" : ""
                        }`}
                        onClick={() => handleTabClick(industry.attributes.title)}
                      >
                        <h5>{industry.attributes.title}</h5>
                        <p>{industry.attributes.description}</p>
                      </button>
                    </div>
                  )
                )}
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="industry-products">
                <h5 className="column-title">
                  {data.attributes.industry_right.title}
                </h5>
                <div className="tab-content" id="v-pills-tabContent">
                  {filteredIndustryRights.map((industry_r, index) => (
                    <div
                      className={`tab-pane fade ${
                        activeTab === industry_r.attributes.Industry_product_type
                          ? "show active"
                          : ""
                      }`}
                      id={`v-pills-tab-${industry_r.attributes.Industry_product_type}`}
                      role="tabpanel"
                      aria-labelledby={`v-pills-tab-${industry_r.attributes.Industry_product_type}`}
                    >
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="industry-products-single">
                              <h5 className="title">
                                {industry_r.attributes.title}
                              </h5>
                              <p>{industry_r.attributes.description}</p>
                              <a href={`${industry_r.attributes.redirect_url}`} className="clipped-btns">
                                {industry_r.attributes.button.label}
                              </a>
                            </div>
                          </div>
                          {/* Add more columns if needed */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

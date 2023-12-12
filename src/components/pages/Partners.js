import React from 'react';
import "./industry/industry.css";

import "./partners.css";
import service_banner_icon from "../images/decors/service_banner_icon.png";
import module1 from "../images/product-logos/module2.svg";

export default function Partners() {
  return (
    <div>
           <div className="industry-banner-section">
                <img src={service_banner_icon} alt="" className="left-industry-banner-icon" />
                <img src={service_banner_icon} alt="" className="right-industry-banner-icon" />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="industry-banner-title">
                                <h3>Knowledge Partners</h3>
                                  <p>WhizHack is India’s only vertically integrated cyber security organization that wants to build a completely self-reliant digitally secure India.
                                  </p>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="partners-section2">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="section-title">
                                    <h3>Strategic Alliances</h3>

                            </div>
                               
                        </div>
                        <div className="col-lg-10">
                            <div className="partners-alliances">
                                <div className="partner-alliance-inner">
                                    <img src={module1} alt="" />
                                    <h3>IIT Jodhpur</h3>
                                    <p>IIT Jodhpur is India's eminent academic and research institution. WhizHack has a wide-ranging partnership with IIT Jodhpur. It co-develops a range of training programs from the school level to working professionals and also on emerging areas like Blockchain. The CoE in IIT Jodhpur has been set up to conduct deep research and product development for Cyber-Physical Systems, particularly for critical infrastructures like Waterways, Smart Cities, Railways and Energy.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="partners-alliances">
                                <div className="partner-alliance-inner">
                                    <img src={module1} alt="" />
                                    <h3>IIT Jodhpur</h3>
                                    <p>IIT Jodhpur is India's eminent academic and research institution. WhizHack has a wide-ranging partnership with IIT Jodhpur. It co-develops a range of training programs from the school level to working professionals and also on emerging areas like Blockchain. The CoE in IIT Jodhpur has been set up to conduct deep research and product development for Cyber-Physical Systems, particularly for critical infrastructures like Waterways, Smart Cities, Railways and Energy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

import React from "react";
import "./industry/industry.css";
import "./privacy.css";
import Whitepaper_Form from "../inc/Whitepaper_Form";
import service_banner_icon from "../images/decors/service_banner_icon.png";

export default function White_Paper({ data }) {
 
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
                <h3>{data.attributes.title}</h3>
                <p>{data.attributes.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="policies-section2 mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section-title-left">
                <h4>Documents</h4>
              </div>
            </div>
          </div>
          <div className="row">
            {data.attributes.white_paper_cards.data.map((paper) => (
              <>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="industry-products-single d-flex flex-column justify-content-center">
                  <div className="products-single-inner">
                    <h5 className="title">{paper.attributes.title}</h5>
                    <p>{paper.attributes.description}</p>
                    
                    <a
                      href="/"
                      className="clipped-btns"
                      data-toggle="modal"
                      data-target={`#enquiryModal${paper.id}`}
                    >
                      Know more
                    </a>
                  </div>
                </div>
              </div>
               <div class="modal fade" id={`enquiryModal${paper.id}`} role="dialog">
               <div class="modal-dialog">
                 <div class="modal-content">
                   <div class="modal-body">
                     <button type="button" class="close" data-dismiss="modal">
                       &times;
                     </button>
                     <br />
                     <Whitepaper_Form pdfUrlForm={paper.attributes.pdf_url}/>
                   </div>
                 </div>
               </div>
             </div>
             </>
            ))}
          </div>
        </div>
      </div>
     
    </div>
  );
}

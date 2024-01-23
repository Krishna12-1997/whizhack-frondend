import React from "react";
import "./industry/industry.css";
import "./privacy.css";
import { ThreeDots } from "react-loader-spinner";
import useFetch from "../../hooks/useFetch";
import service_banner_icon from "../images/decors/service_banner_icon.png";

export default function Terms_Conditions({ data }) {

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
                <h3
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-duration={1500}
                >
                  {data.attributes.title}
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration={1500}
                >
                  {data.attributes.description}
                </p>
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
                <div className="section-title">
                  <h4>Effective Date: [Date]</h4>
                </div>
                <p>
                  Welcome to www.whizhack.com! These terms and conditions
                  outline the rules and regulations for the use of our website.
                </p>
                <div className="section-title">
                  <h4>1. Acceptance of Terms:</h4>
                </div>
                <p>
                  By accessing and using www.whizhack.com, you agree to comply
                  with and be bound by these terms and conditions. If you do not
                  agree with any part of these terms, you may not use our
                  website.
                </p>

                <div className="section-title">
                  <h4>2. User Responsibilities:</h4>
                </div>
                <p>
                  You agree to use www.whizhack.com only for lawful purposes and
                  in a manner consistent with all applicable laws and
                  regulations.
                </p>

                <div className="section-title">
                  <h4>3. Intellectual Property:</h4>
                </div>
                <p>
                  All content, trademarks, and intellectual property on this
                  website are the property of www.whizhack.com. You may not use,
                  reproduce, or distribute any content without our express
                  permission.
                </p>

                <div className="section-title">
                  <h4>4. User Accounts:</h4>
                </div>
                <p>
                  If you create an account on our website, you are responsible
                  for maintaining the confidentiality of your account
                  information. You agree to notify us immediately of any
                  unauthorized use of your account.
                </p>

                <div className="section-title">
                  <h4>5. Content Submission:</h4>
                </div>
                <p>
                  By submitting content to www.whizhack.com, you grant us the
                  right to use, reproduce, modify, and distribute the content.
                  You warrant that you have the right to grant such rights.
                </p>

                <div className="section-title">
                  <h4>6. Limitation of Liability:</h4>
                </div>
                <p>
                  We shall not be liable for any direct, indirect, incidental,
                  consequential, or exemplary damages arising from your use of
                  www.whizhack.com.
                </p>

                <div className="section-title">
                  <h4>7. Privacy:</h4>
                </div>
                <p>
                  Your use of www.whizhack.com is also governed by our Privacy
                  Policy. Please review the policy to understand our practices.
                </p>

                <div className="section-title">
                  <h4>8. Termination:</h4>
                </div>
                <p>
                  We reserve the right to terminate or suspend access to
                  www.whizhack.com for any reason without prior notice.
                </p>

                <div className="section-title">
                  <h4>9. Governing Law:</h4>
                </div>
                <p>
                  These terms and conditions are governed by and construed in
                  accordance with the laws of India. Any disputes arising out of
                  or in connection with these terms shall be subject to the
                  exclusive jurisdiction of the courts in India.
                </p>

                <div className="section-title">
                  <h4>10. Changes to Terms:</h4>
                </div>
                <p>
                  We reserve the right to update or modify these terms and
                  conditions at any time. Changes will be effective immediately
                  upon posting on our website.
                </p>

                <div className="section-title">
                  <h4>Contact Information:</h4>
                </div>
                <p>
                  If you have any questions or concerns about these terms and
                  conditions, please contact us at info@whizhack.com <br /> By
                  using www.whizhack.com, you agree to these terms and
                  conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

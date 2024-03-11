import React from "react";
import "./industry/industry.css";
import "./privacy.css";
import Loader from "../inc/Loader";
import useFetch from "../../hooks/useFetch";
import service_banner_icon from "../images/decors/service_banner_icon.png";

export default function Privacy_policy() {

  const uri = "https://test.whizhack.com/api/privacy-policy";
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
                  Thank you for visiting www.whizhack.com! This Privacy Policy
                  outlines how we collect, use, and protect your personal
                  information.
                </p>
                <div className="section-title">
                  <h4>1. Information We Collect:</h4>
                </div>
                <p>
                  We may collect the following types of personal information:
                </p>
                <ul>
                  <li>Name</li>
                  <li>Email Address</li>
                  <li>Contact Information</li>
                  <li>Any other information voluntarily provided by you</li>
                </ul>
                <div className="section-title">
                  <h4>2. Purpose of Collection:</h4>
                </div>
                <p>We collect this information for the following purposes:</p>
                <ul>
                  <li>Name</li>
                  <li>Communication with users</li>
                  <li>Providing and improving our services</li>
                  <li>Analytics and performance optimization</li>
                </ul>
                <div className="section-title">
                  <h4>3. Use of Information:</h4>
                </div>
                <p>Your information may be used for:</p>
                <ul>
                  <li>Personalization of user experience</li>
                  <li>
                    Communication about updates, promotions, or relevant
                    information
                  </li>
                </ul>
                <div className="section-title">
                  <h4>4. Data Sharing:</h4>
                </div>
                <p>We may share your information with third parties for:</p>
                <ul>
                  <li>
                    Service providers assisting with website functionality
                  </li>
                  <li>Legal requirements or enforcement</li>
                </ul>
                <div className="section-title">
                  <h4>5. Security Measures:</h4>
                </div>
                <p>
                  We employ reasonable security measures to protect your
                  information from unauthorized access, disclosure, alteration,
                  and destruction.
                </p>

                <div className="section-title">
                  <h4>6. User Rights:</h4>
                </div>
                <p>You have the right to:</p>
                <ul>
                  <li>Access, correct, or delete your personal information</li>
                  <li>Opt-out of communication or data processing</li>
                </ul>

                <div className="section-title">
                  <h4>7. Cookies and Tracking Technologies:</h4>
                </div>
                <p>We may use cookies and similar technologies for:</p>
                <ul>
                  <li>Analyzing trends</li>
                  <li>Administering the site</li>
                  <li>Gathering demographic information</li>
                </ul>

                <div className="section-title">
                  <h4>8. Retention Period:</h4>
                </div>
                <p>
                  We will retain your information for as long as necessary for
                  the purposes outlined in this policy unless a longer retention
                  period is required by law.
                </p>

                <div className="section-title">
                  <h4>9. Updates to the Policy:</h4>
                </div>
                <p>
                  We reserve the right to update this privacy policy. Any
                  changes will be communicated through our website.
                </p>

                <div className="section-title">
                  <h4>10. Contact Information:</h4>
                </div>
                <p>
                  If you have any questions or concerns regarding our privacy
                  policy, please contact us at info@whizhack.com.
                  <br />
                  By using our website, you agree to the terms outlined in this
                  Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

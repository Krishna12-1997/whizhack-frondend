import React from "react";
import "../../pages/contact/contact.css";
import contact_banner from "../../images/video/contact_video.mp4";
import { useFormik } from "formik";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import useFetch from "../../../hooks/useFetch";

export default function Contact({ data }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      contact: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      // Create an object to hold your form data
      const formData = {
        data: {
          name: values.name,
          contact: values.contact,
          email: values.email,
          message: values.message,
        },
      };

      // Make a POST request to your Strapi API
      axios
        .post("http://15.207.20.62:1337/api/contact-details", formData)
        .then((response) => {
          console.log("POST request successful:", response.data);
          alert("Thank You")
          // Do something after a successful post, e.g., show a success message or redirect to another page.
        })
        .catch((error) => {
          console.error("POST request error:", error);
          // Handle the error, e.g., show an error message to the user.
        });
    },
  });

 
  return (
    <div>
      <div className="contact-section-single">
        <video muted loop autoPlay="autoplay">
          <source src={data.attributes.bg_url} type="video/mp4" />
        </video>
        <div className="contact-section-outer">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-single-heading">
                  <h3>{data.attributes.title}</h3>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-single-form-outer">
                  <div className="contact-single-form-inner">
                    {/* <p> <span>Contact Us &nbsp; &nbsp;</span> Connect with us</p> */}
                    <ul class="nav nav-pills">
                      <li>
                        <a data-toggle="pill" href="#home" className="active">
                          <p>
                            <span>Contact Us</span>
                          </p>
                        </a>
                      </li>
                      <li>
                        <a data-toggle="pill" href="#menu1">
                          <p>
                            <span>Connect with us</span>
                          </p>
                        </a>
                      </li>
                    </ul>
                    <div class="tab-content">
                      <div id="home" class="tab-pane fade in active show">
                        <form onSubmit={formik.handleSubmit}>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="Name"
                              name="name"
                              onChange={formik.handleChange}
                              value={formik.values.name}
                              placeholder="Name* "
                            />
                          </div>

                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="ContactNo"
                              name="contact"
                              placeholder="Contact No.*"
                              onChange={formik.handleChange}
                              value={formik.values.contact}
                            />
                          </div>

                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              id="Emailid"
                              name="email"
                              placeholder="Email Id*"
                              onChange={formik.handleChange}
                              value={formik.values.email}
                            />
                          </div>
                          <div className="form-group">
                            <textarea
                              type="text"
                              className="form-control"
                              id="Message"
                              name="message"
                              placeholder="Message(optional)"
                              onChange={formik.handleChange}
                              value={formik.values.message}
                              rows={3}
                            />
                          </div>
                          <button type="submit" className="clipped-btns">
                            Submit
                          </button>
                        </form>
                      </div>
                      <div id="menu1" class="tab-pane fade">
                        <div className="contact-page-detail">
                          <h6>Address</h6>
                          <p>
                          {data.attributes.address}
                          </p>
                        </div>
                        <div className="contact-page-detail">
                          <h6>Email id</h6>
                          <p>{data.attributes.email}</p>
                        </div>
                        <div className="contact-page-detail">
                          <h6>Call Us</h6>
                          <p>+91-{data.attributes.contact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

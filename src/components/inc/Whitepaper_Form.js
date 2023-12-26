import React from "react";
import { useFormik } from "formik";
import axios from "axios";

export default function Whitepaper_Form() {
  const formik = useFormik({
    initialValues: {
      name: "",
      contact: "",
      email: "",
      companyName: "",
    },
    onSubmit: (values) => {
      const formData = {
        data: {
          name: values.name,
          contact: values.contact,
          email: values.email,
          companyName: values.companyName,
        },
      };

      // Make a POST request to your Strapi API
      axios
        .post(
          "http://15.207.20.62:1337/api/white-paper-download-details",
          formData
        )
        .then((response) => {
          console.log("POST request successful:", response.data);
          // Do something after a successful post, e.g., show a success message or redirect to another page.
        })
        .catch((error) => {
          console.error("POST request error:", error);
        });
    },
  });

  return (
    <div>
      <form className="white_paper_form"  onSubmit={formik.handleSubmit}>
        <h4 className="mb-4">Please fill the details to download</h4>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={formik.handleChange}
            id="Name"
            placeholder=""
          />
          <label htmlFor="Name">Name * </label>
        </div>

        <div className="form-group">
          <input
            type="number"
            className="form-control"
            name="contact"
            onChange={formik.handleChange}
            id="ContactNumber"
            placeholder=""
          />
          <label htmlFor="ContactNumber">Contact No. *</label>
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={formik.handleChange}
            id="ContactEmailid"
            placeholder=""
          />
          <label htmlFor="ContactEmailid">Email Id *</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="companyName"
            onChange={formik.handleChange}
            id="CompanyName"
            placeholder=""
          />
          <label htmlFor="CompanyName">Company Name* </label>
        </div>
        <div className="form-btns-parent text-center">
          <button type="submit" className="clipped-btns submit-form">
            Download
          </button>
        </div>
      </form>
    </div>
  );
}

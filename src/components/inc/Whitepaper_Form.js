import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import PdfDisplayComponent from "../inc/PdfDisplayComponent";

export default function Whitepaper_Form({ pdfUrlForm }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      contact: "",
      email: "",
      companyName: "",
    },
    validate: (values) => {
      const errors = {};

      // Validate name
      if (!values.name.trim()) {
        errors.name = "Name is required";
      }

      // Validate contact
      if (!values.contact) {
        errors.contact = "Contact No. is required";
      } else if (isNaN(values.contact)) {
        errors.contact = "Contact No. must be a number";
      }

      // Validate email
      if (!values.email.trim()) {
        errors.email = "Email is required";
      } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = "Invalid email format";
      }

      // Validate companyName
      if (!values.companyName.trim()) {
        errors.companyName = "Company Name is required";
      }

      return errors;
    },
    onSubmit: (values, { resetForm }) => {
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
          "https://test.whizhack.com/api/white-paper-download-details",
          formData
        )
        .then((response) => {
          console.log("POST request successful:", response.data);

          const pdfUrl = pdfUrlForm;

          const newWindow = window.open(pdfUrl, "_blank");

          // Close the modal
          if (newWindow) {
            resetForm();
          } else {
            console.error(
              "Unable to open the new window. Please check your browser settings."
            );
          }
        })
        .catch((error) => {
          console.error("POST request error:", error);
        });
    },
  });

  return (
    <div>
      <form className="white_paper_form" onSubmit={formik.handleSubmit}>
        <h4 className="mb-4">Please fill the details to download</h4>
        <div id="pdfDisplay">
          <PdfDisplayComponent pdfUrl={pdfUrlForm} />
        </div>
        <div className="form-group error">
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            id="Name"
            placeholder=""
          />
          <label htmlFor="Name">Name * </label>
          {formik.touched.name && formik.errors.name && (
            <div className="error-message">{formik.errors.name}</div>
          )}
        </div>

        <div className="form-group">
          <input
            type="number"
            className="form-control"
            name="contact"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contact}
            id="ContactNumber"
            placeholder=""
          />
          <label htmlFor="ContactNumber">Contact No. *</label>
          {formik.touched.contact && formik.errors.contact && (
            <div className="error-message">{formik.errors.contact}</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="email"
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
            id="ContactEmailid"
            placeholder=""
          />
          <label htmlFor="ContactEmailid">Email Id *</label>
          {formik.touched.email && formik.errors.email && (
            <div className="error-message">{formik.errors.email}</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="companyName"
            onBlur={formik.handleBlur}
            value={formik.values.companyName}
            onChange={formik.handleChange}
            id="CompanyName"
            placeholder=""
          />
          <label htmlFor="CompanyName">Company Name* </label>
          {formik.touched.companyName && formik.errors.companyName && (
            <div className="error-message">{formik.errors.companyName}</div>
          )}
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

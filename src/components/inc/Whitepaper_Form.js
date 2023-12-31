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
          "http://15.207.226.239:1337/api/white-paper-download-details",
          formData
        )
        .then((response) => {
          console.log("POST request successful:", response.data);

          const pdfUrl = pdfUrlForm;

          const newWindow = window.open(pdfUrl, "_blank");

          // Close the modal
          if (newWindow) {
            const modal = document.getElementById("enquiryModal");
            modal.style.display = "none";
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

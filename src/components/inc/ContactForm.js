import React from "react";
import { useFormik } from "formik";
import axios from "axios";

export default function ContactForm({option}) {
  const formik = useFormik({
    initialValues: {
      producttype: "",
      productname: "",
      contactperson: "",
      contactnumber: "",
      contactemailid: "",
    },
    onSubmit: (values) => {
      // console.log('Form data', values);

      // Create an object to hold your form data
      const formData = {
        data: {
          producttype: values.producttype,
          productname: values.productname,
          contactperson: values.contactperson,
          contactnumber: values.contactnumber,
          contactemailid: values.contactemailid,
        },
      };

      // Make a POST request to your Strapi API
      axios
        .post("http://40.88.24.216:1337/api/product-contacts", formData)
        .then((response) => {
          console.log("POST request successful:", response.data);
          // Do something after a successful post, e.g., show a success message or redirect to another page.
        })
        .catch((error) => {
          console.error("POST request error:", error);
          // Handle the error, e.g., show an error message to the user.
        });
    },
  });
  // console.log('Form Values', formik.values);
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="first_form">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="ProductType"
            name="producttype"
            onChange={formik.handleChange}
            value={formik.values.producttype}
          />
          <label htmlFor="ProductType">Product Type * </label>
        </div>
        <div className="form-group">
          <select
            className="form-control"
            id="ProductName"
            name="productname"
            onChange={formik.handleChange}
            value={formik.values.productname}
          >
            <option value="">Select an option</option>
            {option.map((type) => (
              <option key={type.id} value={type.label}>
                {type.label}
              </option>
            ))}
          </select>
          <label htmlFor="ProductName">Name of the Product *</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="ContactPerson"
            name="contactperson"
            onChange={formik.handleChange}
            value={formik.values.contactperson}
          />
          <label htmlFor="ContactPerson">Contact Person Name *</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="ContactNumber"
            name="contactnumber"
            onChange={formik.handleChange}
            value={formik.values.contactnumber}
          />
          <label htmlFor="ContactNumber">Contact Person No. *</label>
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="ContactEmailid"
            name="contactemailid"
            onChange={formik.handleChange}
            value={formik.values.contactemailid}
          />
          <label htmlFor="ContactEmailid">Email Id *</label>
        </div>
        <button
          type="submit"
          className="btn btn-primary clipped-btns submit-form"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

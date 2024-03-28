import React, { useState, useEffect} from "react";
import { useFormik } from "formik";
import axios from "axios";

export default function ContactForm({ option }) {
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [successMessage]);

  const formik = useFormik({
    initialValues: {
      producttype: "",
      productname: "",
      contactperson: "",
      contactnumber: "",
      contactemailid: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.producttype.trim()) {
        errors.producttype = "Product type is required";
      }
      // Validate name
      if (!values.productname.trim()) {
        errors.productname = "Product name is required";
      }

      // Validate contact
      if (!values.contactnumber) {
        errors.contactnumber = "Contact No. is required";
      } else if (isNaN(values.contactnumber)) {
        errors.contactnumber = "Contact No. must be a number";
      } else if (values.contactnumber.length !== 10) {
        errors.contactnumber = "Contact No. must be exactly 10 digits long";
      }

      // Validate email
      if (!values.contactemailid.trim()) {
        errors.contactemailid = "Email id is required";
      } else if (!/^\S+@\S+\.\S+$/.test(values.contactemailid)) {
        errors.contactemailid = "Invalid email format";
      }

      // Validate companyName
      if (!values.contactperson.trim()) {
        errors.contactperson = "Contact person is required";
      }

      return errors;
    },
    onSubmit: (values, { resetForm }) => {
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
        .post("https://test.whizhack.com/api/product-contacts", formData)
        .then((response) => {
          console.log("POST request successful:");
          setSuccessMessage('Thank you! Your form has been submitted successfully.');
          resetForm();
        })
        .catch((error) => {
          console.error("POST request error:", error);
        });
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="first_form">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="ProductType"
            name="productname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.productname}
          />
          <label htmlFor="ProductType">Name of the Product * </label>
          {formik.touched.productname && formik.errors.productname && (
            <div className="error-message">{formik.errors.productname}</div>
          )}
        </div>
        <div className="form-group">
          <select
            className="form-control"
            id="ProductName"
            name="producttype"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.producttype}
          >
            <option value="">Select an option</option>
            {option.map((type) => (
              <option key={type.id} value={type.label}>
                {type.label}
              </option>
            ))}
          </select>
          <label htmlFor="ProductName"> Product Type *</label>
          {formik.touched.producttype && formik.errors.producttype && (
            <div className="error-message">{formik.errors.producttype}</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="ContactPerson"
            name="contactperson"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contactperson}
          />
          <label htmlFor="ContactPerson">Contact Person Name *</label>
          {formik.touched.contactperson && formik.errors.contactperson && (
            <div className="error-message">{formik.errors.contactperson}</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="ContactNumber"
            name="contactnumber"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.contactnumber}
          />
          <label htmlFor="ContactNumber">Contact Person No. *</label>
          {formik.touched.contactnumber && formik.errors.contactnumber && (
            <div className="error-message">{formik.errors.contactnumber}</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="ContactEmailid"
            name="contactemailid"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.contactemailid}
          />
          <label htmlFor="ContactEmailid">Email Id *</label>
          {formik.touched.contactemailid && formik.errors.contactemailid && (
            <div className="error-message">{formik.errors.contactemailid}</div>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary clipped-btns submit-form"
        >
          Submit
        </button>
      </form>
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
}

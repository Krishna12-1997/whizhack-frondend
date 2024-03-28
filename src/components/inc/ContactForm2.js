import React, { useState, useEffect} from "react";
import { useFormik } from "formik";
import axios from "axios";

export default function ContactForm2({ option, city }) {
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [successMessage]);

  const formik = useFormik({
    initialValues: {
      institutiontype: "",
      institutionname: "",
      personname: "",
      personnumber: "",
      Email: "",
      CityName: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.institutiontype.trim()) {
        errors.institutiontype = "Institution type is required";
      }
      // Validate name
      if (!values.institutionname.trim()) {
        errors.institutionname = "Institution name is required";
      }

      if (!values.personname.trim()) {
        errors.personname = "Person name is required";
      }

      // Validate contact
      if (!values.personnumber) {
        errors.personnumber = "Contact No. is required";
      } else if (isNaN(values.personnumber)) {
        errors.personnumber = "Contact No. must be a number";
      } else if (values.personnumber.length !== 10) {
        errors.personnumber = "Contact No. must be exactly 10 digits long";
      }

      // Validate email
      if (!values.Email.trim()) {
        errors.Email = "Email is required";
      } else if (!/^\S+@\S+\.\S+$/.test(values.Email)) {
        errors.Email = "Invalid email format";
      }

      // Validate companyName
      if (!values.CityName.trim()) {
        errors.CityName = "City name is required";
      }

      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      // Create an object to hold your form data
      const formData = {
        data: {
          institutiontype: values.institutiontype,
          institutionname: values.institutionname,
          personname: values.personname,
          personnumber: values.personnumber,
          Email: values.Email,
          CityName: values.CityName,
        },
      };

      // Make a POST request to your Strapi API
      axios
        .post("https://test.whizhack.com/api/institution-contacts", formData)
        .then((response) => {
          console.log("POST request successful");
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
      <form
        className="second-contact second_form contact-form"
        onSubmit={formik.handleSubmit}
      >
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="InstitutionType"
            name="institutiontype"
            onChange={formik.handleChange}
            value={formik.values.institutiontype}
            onBlur={formik.handleBlur}
            placeholder="&nbsp;"
          />
          <label htmlFor="InstitutionType">Institution Type *</label>
          {formik.touched.institutiontype && formik.errors.institutiontype && (
            <div className="error-message">{formik.errors.institutiontype}</div>
          )}
        </div>
        <div className="form-group">
          <input
            className="form-control"
            id="InstitutionName"
            name="institutionname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.institutionname}
            placeholder="&nbsp;"
          ></input>
          <label htmlFor="InstitutionName">Name of the Institution *</label>
          {formik.touched.institutionname && formik.errors.institutionname && (
            <div className="error-message">{formik.errors.institutionname}</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="ContactPerson2"
            name="personname"
            placeholder="&nbsp;"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.personname}
          />
          <label htmlFor="ContactPerson2">Contact Person Name *</label>
          {formik.touched.personname && formik.errors.personname && (
            <div className="error-message">{formik.errors.personname}</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="ContactNumber2"
            name="personnumber"
            placeholder="&nbsp;"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.personnumber}
          />
          <label htmlFor="ContactNumber2">Contact Person No. *</label>
          {formik.touched.personnumber && formik.errors.personnumber && (
            <div className="error-message">{formik.errors.personnumber}</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="ContactEmailid2"
            name="Email"
            placeholder="&nbsp;"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Email}
          />
          <label htmlFor="ContactEmailid2">Email Id *</label>
          {formik.touched.Email && formik.errors.Email && (
            <div className="error-message">{formik.errors.Email}</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="CityName"
            name="CityName"
            placeholder="&nbsp;"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.CityName}
          ></input>
          <label htmlFor="CityName"> City*</label>
          {formik.touched.CityName && formik.errors.CityName && (
            <div className="error-message">{formik.errors.CityName}</div>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary clipped-btns submit-form"
        >
          Submit
        </button>
        {successMessage && <div className="success-message">{successMessage}</div>}
      </form>
    </div>
  );
}

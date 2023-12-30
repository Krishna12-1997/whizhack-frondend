import React from "react";
import { useFormik } from "formik";
import axios from "axios";

export default function ContactForm2({ option, city }) {
  //define the formik object to help with managing form state, handling the submission, validation & error messages
  const formik = useFormik({
    initialValues: {
      institutiontype: "",
      institutionname: "",
      personname: "",
      personnumber: "",
      Email: "",
      CityName: "",
    },
    onSubmit: (values) => {
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
        .post("http://15.207.20.62:1337/api/institution-contacts", formData)
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
            placeholder="&nbsp;"
          />
          <label htmlFor="InstitutionType">Institution Type *</label>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            id="InstitutionName"
            name="institutionname"
            onChange={formik.handleChange}
            value={formik.values.institutionname}
            placeholder="&nbsp;"
          >
          </input>
          <label htmlFor="InstitutionName">Name of the Institution *</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="ContactPerson2"
            name="personname"
            placeholder="&nbsp;"
            onChange={formik.handleChange}
            value={formik.values.personname}
          />
          <label htmlFor="ContactPerson2">Contact Person Name *</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="ContactNumber2"
            name="personnumber"
            placeholder="&nbsp;"
            onChange={formik.handleChange}
            value={formik.values.personnumber}
          />
          <label htmlFor="ContactNumber2">Contact Person No. *</label>
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="ContactEmailid2"
            name="Email"
            placeholder="&nbsp;"
            onChange={formik.handleChange}
            value={formik.values.Email}
          />
          <label htmlFor="ContactEmailid2">Email Id *</label>
        </div>
        <div className="form-group">
          <select
            className="form-control"
            id="CityName"
            name="CityName"
            onChange={formik.handleChange}
            value={formik.values.CityName}
          >
             <option value="">Select an option</option>
            {city.map((type) => (
              <option key={type.id} value={type.label}>
                {type.label}
              </option>
            ))}
          </select>
          <label htmlFor="CityName"> City*</label>
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

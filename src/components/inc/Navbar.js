import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav, Tab } from "react-bootstrap";
import logo from "../images/logo.svg";
import useFetch from "../../hooks/useFetch";

export default function Navbar() {

  const [activeSection, setActiveSection] = useState(0);

  const handleSectionHover = (index, event) => {
    event.preventDefault();
      setActiveSection(index);
    
  };

  const uri =
    " http://15.207.20.62:1337/api/top-right-menu?populate=body.sections.links, body.single_sections";
  const { loading, error, data } = useFetch(uri);
  // console.log(data.attributes); 15.207.20.62
  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Check if 'data' exists and has a 'body' property
  if (data && data.attributes && data.attributes.body) {
    const menuItems = data.attributes.body.map((menuItem) => {
      const key = menuItem.id;
      const label = menuItem.label;

      // If it's a dropdown, generate a dropdown menu
      if (
        menuItem.__component === "navbar.dropdown" &&
        menuItem.sections.data
      ) {
        const dropdownItems = menuItem.sections.data.map((section, index) =>

          label === "Solutions" ? (
            <div>
              <div className="row mt-5">
                <div className="col-lg-4 col-md-4 col-sm-12 nav_left">
                  <ul className="nav nav-tabs">
                    <li className="nav-item nav_header active">
                      <a
                        onMouseEnter={(event) => handleSectionHover(index, event)}
                      >
                        {section.attributes.label}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="tab-content">
                    <div
                      className={`tab-pane  ${
                        activeSection === index ? "active" : ""
                      }`}
                    >
                      <div className="singledropdown">
                        {section.attributes.links.map((link, linkIndex) => (
                          <Link
                            to={`/${menuItem.label}/${link.icon}`}
                            key={link.id}
                            className={`nav-link active`}
                          >
                            <div className="nav_right_solution">
                            <div className="image-container">
                              <img
                                src={link.icon_url}
                                alt="icon"
                                width="220px"
                                height="173px"
                                className="mb-3"
                              />
                              </div>
                              <div className="mobile_dropdown">
                              <h4>{link.label}</h4>
                              <p>{link.description}</p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="row mt-5">
                <div className="col-lg-4 col-md-4 col-sm-12 nav_left">
                  <ul className="nav nav-tabs">
                    <li className="nav-item nav_header active">
                      <a
                        onMouseEnter={(event) => handleSectionHover(index, event)}
                      >
                        {section.attributes.label}
                      </a>
                    </li>

                  </ul>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="tab-content">
                    <div
                      className={`tab-pane  ${
                        activeSection === index ? "active" : ""
                      }`}
                      // ${activeSection === section.id ? 'active' : ''}
                    >
                      <div className="singledropdown">
                        {section.attributes.links.map((link, linkIndex) => (
                          <Link
                            to={`/${menuItem.label}/${link.icon}`}
                            key={link.id}
                            className={`nav-link active`}
                          >
                            <div className="nav_right">
                            <div className="nav_right_mobile">
                              <img
                                src={link.icon_url}
                                alt="icon"
                                width="32px"
                                height="32px"
                                className="mb-3"
                              />
                              
                              <h4>{link.label}</h4>
                              </div>
                              <p>{link.description}</p>
                              </div>
                            
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        );

        return (
          <li key={key} className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id={`dropdown-${key}`}
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {label}
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby={`dropdown-${key}`}
              style={{
              
              }}
            >
              {dropdownItems}
            </div>
          </li>
        );
      } else if (menuItem.__component === "navbar.menu") {
        // For regular menu items
        return (
          <li key={key} className="nav-item">
            <Link to={`/${label}`} className="nav-link">
              {label}
            </Link>
          </li>
        );
      } else if (menuItem.__component === "navbar.single-dropdown") {
        const singledropdownItems = menuItem.single_sections.data.map(
          (section) =>
            label === "Resources" ? (
              <div className="product_resources">
                <li key={section.id} className=" ">
                  <Link
                    to={`/${section.attributes.label}`}
                    className="product_demos_content_reso "
                  >
                    <p>
                      {section.attributes.label}
                    </p>
                    <img
                      src={section.attributes.icon_url}
                      alt="icon"
                      width="32px"
                      height="32px"
                      className="mb-3"
                    />
                  </Link>
                </li>
              </div>
            ) : (
              <li
                key={section.id}
                className="product_demos d-flex justify-content-center align-items-center "
              >
                <Link
                  to={`/${section.attributes.label}`}
                  className="product_demos_content ww"
                >
                  <div className="product_demos_mobile">
                  <img
                    src={section.attributes.icon_url}
                    alt="icon"
                    width="32px"
                    height="32px"
                    className="mb-3"
                  />
                  <p className="content_ph">{section.attributes.label}</p>
                  </div>
                  <p className="content_p">{section.attributes.description}</p>
                </Link>
              </li>
            )
           
        );

        if (label !== "Resources") {
          return (
            <li key={key} className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id={`dropdown-${key}`}
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {label}
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby={`dropdown-${key}`}
                style={{
                  
                }}
              >
                <div className="singledropdown">{singledropdownItems}</div>
              </div>
            </li>
          );
        } else {
          return (
            <li key={key} className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id={`dropdown-${key}`}
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {label}
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby={`dropdown-${key}`}
                style={{
                 
                }}
              >
                {singledropdownItems}
              </div>
            </li>
          );
        }
      }

      return null; 
    });

    return (
      <nav className="navbar fixed-top navbar-expand-sm navbar-light ">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-collapse"
        >
          ☰
        </button>
        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className="nav navbar-nav ml-auto">
            <div className="nav-bg"></div>
            {menuItems}
            </ul>
        </div>
      </nav>
    );
  }

  return null; 
}

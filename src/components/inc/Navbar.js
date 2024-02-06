import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav, Tab } from "react-bootstrap";
import logo from "../images/logo.svg";
import useFetch from "../../hooks/useFetch";

export default function Navbar({ data }) {
  const [activeSection, setActiveSection] = useState(0);
  const [activeSections, setActiveSections] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const [hoveredKey, setHoveredKey] = useState(null);

  const [isNavbarCollapsed, setNavbarCollapsed] = useState(true);

  const handleNavbarToggle = () => {
    setNavbarCollapsed(!isNavbarCollapsed);
  };

  const handleSectionLeave = () => {
    setHoveredKey(null);
  };

  const handleDropdownClick = (index, event) => {
    event.preventDefault();
    setActiveSection((prevIndex) => (prevIndex === index ? 0 : index));
    setActiveSections(false);
    setActiveLink(index);
  };

  if (data && data.attributes && data.attributes.body) {
    const menuItems = data.attributes.body.map((menuItem) => {
      const key = menuItem.id;
      const label = menuItem.label;

      const handleSectionHover = () => {
        setHoveredKey(key);
      };

      if (
        menuItem.__component === "navbar.dropdown" &&
        menuItem.sections.data
      ) {
        const dropdownItems = menuItem.sections.data.map(
          (section, drop_index) =>
            label === "Products" ? (
              <div>
                <div className="row mt-5">
                  <div className="col-lg-4 col-md-4 col-sm-12 nav_left">
                    <ul className="nav nav-tabs">
                      <li
                        className={`{nav-item nav_header ${
                          activeLink === drop_index ? "active" : ""
                        }`}
                      >
                        <a
                          onClick={(event) => {
                            handleDropdownClick(drop_index, event);
                            event.stopPropagation();
                          }}
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
                          activeSection === drop_index ? "active" : ""
                        }`}
                      >
                        <div className="singledropdown">
                          {section.attributes.links.map((link, linkIndex) => (
                            <a
                              href={`/${menuItem.label}/${link.icon}`}
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
                            </a>
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
                      <li
                        className={`nav-item nav_header ${
                          activeLink === drop_index ? "active" : ""
                        }`}
                      >
                        <a
                          onClick={(event) => {
                            handleDropdownClick(drop_index, event);
                            event.stopPropagation();
                          }}
                        >
                          {section.attributes.label}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12">
                    <div className="tab-content">
                      <div
                        className={`tab-pane ${
                          activeSection === drop_index ? "active" : ""
                        }`}
                      >
                        <div className="singledropdown">
                          {section.attributes.links.map((link, linkIndex) => (
                            <a
                              href={`/${menuItem.label}/${link.icon}`}
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
                            </a>
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
          <li
            key={key}
            className={`nav-item dropdown ${
              hoveredKey === key ? "hovered" : ""
            }`}
            onMouseEnter={(e) => handleSectionHover(e, key)}
          >
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id={`dropdown-${key}`}
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded={hoveredKey === key ? "true" : "false"}
              onMouseEnter={handleSectionHover}
            >
              {label}
            </a>

            <div
              className={`dropdown-menu ${hoveredKey === key ? "show" : ""}`}
              aria-labelledby={`dropdown-${key}`}
              // onMouseLeave={handleSectionLeave}
            >
              {dropdownItems}
            </div>
          </li>
        );
      } else if (menuItem.__component === "navbar.menu") {
        return (
          <li key={key} className="nav-item">
            <a href={`/${menuItem.icon}`} className="nav-link">
              {label}
            </a>
          </li>
        );
      } else if (menuItem.__component === "navbar.single-dropdown") {
        const singledropdownItems = menuItem.single_sections.data.map(
          (section) =>
            label === "Resources" ? (
              <div className="product_resources">
                <li key={section.id} className=" ">
                  <a
                    href={`/${section.attributes.label}`}
                    className="product_demos_content_reso "
                  >
                    <p>{section.attributes.label}</p>
                    <img
                      src={section.attributes.icon_url}
                      alt="icon"
                      width="32px"
                      height="32px"
                      className="mb-3"
                    />
                  </a>
                </li>
              </div>
            ) : (
              <li
                key={section.id}
                className="product_demos d-flex justify-content-center align-items-center "
              >
                <a
                  href={`/${section.attributes.label}`}
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
                </a>
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
                style={{}}
              >
                <div className="singledropdown">{singledropdownItems}</div>
              </div>
            </li>
          );
        } else {
          return (
            <li
              key={key}
              className={`nav-item dropdown ${
                hoveredKey === key ? "hovered" : ""
              }`}
              onMouseEnter={(e) => handleSectionHover(e, key)}
            >
              <a
                className="nav-link dropdown-toggle "
                href="#"
                id={`dropdown-${key}`}
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded={hoveredKey === key ? "true" : "false"}
                onMouseEnter={handleSectionHover}
              >
                {label}
              </a>
              <div
                className={`dropdown-menu ${hoveredKey === key ? "show" : ""}`}
                aria-labelledby={`dropdown-${key}`}
                onMouseLeave={handleSectionLeave}
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
        <a href="/" className="navbar-brand">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavbarToggle}
        >
          ☰
        </button>
        <div className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`} id="navbar-collapse">
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

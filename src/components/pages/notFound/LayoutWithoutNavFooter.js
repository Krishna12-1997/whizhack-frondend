// LayoutWithoutNavFooter.js
import React from "react";
import Footer from "../../inc/Footer";
import Navbar from "../../inc/Navbar";

const LayoutWithoutNavFooter = ({ children, showNavbarFooter }) => (
  <div className="LayoutWithoutNavFooter">
    {showNavbarFooter !== false && <Navbar />}
    {children}
    {showNavbarFooter !== false && <Footer />}
  </div>
);

export default LayoutWithoutNavFooter;

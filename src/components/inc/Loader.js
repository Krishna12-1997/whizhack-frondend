import React from "react";
import { Puff } from "react-loader-spinner";
import Lottie from "react-lottie-player";
import loader from "../json/loader.json";
import './loader.css';

const Loader = ({ loading, children }) => {
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center loader" style={{ height: "100vh"}}>
        <Lottie
          loop
          animationData={loader}
          play
          style={{ width: "20%", height: "20%" }}
        />
        <div className="loader-text">
           <span>W</span>
           <span>H</span>
           <span>I</span>
           <span>Z</span>
           <span>H</span>
           <span>A</span>
           <span>C</span>
           <span>K</span>
          
        </div>
      </div>
    );
  }

  return children;
};

export default Loader;

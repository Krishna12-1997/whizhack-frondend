// import logo from './logo.svg';
import "./App.css";
import React, {useEffect} from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/inc/Navbar";
import Footer from "./components/inc/Footer";
import "./responsive.css";
// import Industry from "./components/pages/Industry";
import Trace from "./pages/trace/Trace";
// import Npti from "./pages/npti/Npti";
import Guru from "./components/pages/trainings/Guru";

import { Routes, Route } from "react-router-dom";
import Blog from "./components/pages/blogs/Blog";
import Blog_details from "./components/pages/blogs/Blog_details";
import Contact from "./components/pages/contact/Contact";
import Service from "./components/pages/services/Service";
import Industry from "./components/pages/industry/Industry";
import Privcy from "./components/pages/Privacy_policy";
import Partner from "./components/pages/Partners";
import Condition from "./components/pages/Terms_Conditions";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [selectedMenuItem, setSelectedMenuItem] = React.useState(null);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="Home">
      <Navbar title="Whizhack"  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="Solutions/:solutionName" element={<Trace />} />
        {/* <Route path="/npti" element={<Npti />} /> */}
        <Route path="Trainings/:paramName" element={<Guru/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogId" element={<Blog_details/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Service/>} />
        <Route path="/privacy" element={<Privcy/>} />
        <Route path="/partners" element={<Partner/>} />
        <Route path="/termsandcondition" element={<Condition/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

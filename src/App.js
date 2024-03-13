import React, { useEffect, Suspense } from "react";
import "./App.css";
import "./responsive.css";
import useFetch from "../src/hooks/useFetch";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/inc/Loader";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = React.lazy(() => import("./components/pages/Home"));
const About = React.lazy(() => import("./components/pages/About"));
const Navbar = React.lazy(() => import("./components/inc/Navbar"));
const Footer = React.lazy(() => import("./components/inc/Footer"));
const Trace = React.lazy(() => import("./pages/trace/Trace"));
const Guru = React.lazy(() => import("./components/pages/trainings/Guru"));
const Blog = React.lazy(() => import("./components/pages/blogs/Blog"));
const Blog_details = React.lazy(() =>
  import("./components/pages/blogs/Blog_details")
);
const Contact = React.lazy(() => import("./components/pages/contact/Contact"));
const Service = React.lazy(() => import("./components/pages/services/Service"));
const Industry = React.lazy(() =>
  import("./components/pages/industry/Industry")
);
const Privcy = React.lazy(() => import("./components/pages/Privacy_policy"));
const Partner = React.lazy(() => import("./components/pages/Partners"));
const Condition = React.lazy(() =>
  import("./components/pages/Terms_Conditions")
);
const Ransomeware = React.lazy(() =>
  import("./components/pages/ransomeware/Ransomeware")
);
const Career = React.lazy(() => import("./components/pages/trainings/Career"));
const Investor_Relations = React.lazy(() =>
  import("./components/pages/investor_relation/Investor_Relations")
);
const Service_IT = React.lazy(() =>
  import("./components/pages/service_infra/Service_IT")
);
const Service_OT = React.lazy(() =>
  import("./components/pages/service_infra/Service_OT")
);
const White_Paper = React.lazy(() => import("./components/pages/White_Paper"));

const Use_case = React.lazy(() =>
  import("./components/pages/use_case/Use_case")
);

function App() {
  const { blogId } = useParams();

  useEffect(() => {
    AOS.init();
  }, []);

  // https://test.whizhack.com

  return (
    <div className="Home">
      <Navbar title="Whizhack" />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="Products/:solutionName" element={<Trace />} />
          <Route path="Trainings/:paramName" element={<Guru />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogId" element={<Blog_details />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cyber-security-services" element={<Service />} />
          <Route path="/privacy" element={<Privcy />} />
          <Route path="/partners" element={<Partner />} />
          <Route path="/termsandcondition" element={<Condition />} />
          <Route path="/ransomeware" element={<Ransomeware />} />
          <Route path="/investor" element={<Investor_Relations />} />
          <Route path="/serviceIT" element={<Service_IT />} />
          <Route path="/serviceOT" element={<Service_OT />} />
          <Route path="/white-paper" element={<White_Paper />} />
          <Route path="/use-case" element={<Use_case />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;

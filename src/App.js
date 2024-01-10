// import logo from './logo.svg';
import "./App.css";
import React, { useEffect } from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/inc/Navbar";
import Footer from "./components/inc/Footer";
import "./responsive.css";
import Trace from "./pages/trace/Trace";
import Guru from "./components/pages/trainings/Guru";
import useFetch from "../src/hooks/useFetch";
import { Routes, Route } from "react-router-dom";
import Blog from "./components/pages/blogs/Blog";
import Blog_details from "./components/pages/blogs/Blog_details";
import Contact from "./components/pages/contact/Contact";
import Service from "./components/pages/services/Service";
import Industry from "./components/pages/industry/Industry";
import Privcy from "./components/pages/Privacy_policy";
import Partner from "./components/pages/Partners";
import Condition from "./components/pages/Terms_Conditions";
import Ransomeware from "./components/pages/ransomeware/Ransomeware";
import Career from "./components/pages/trainings/Career";
import Investor_Relations from "./components/pages/investor_relation/Investor_Relations";
import Service_IT from "./components/pages/service_infra/Service_IT";
import Service_OT from "./components/pages/service_infra/Service_OT";
import White_Paper from "./components/pages/White_Paper";
import Loader from "./components/inc/Loader";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const { blogId } = useParams();

  useEffect(() => {
    AOS.init();
  }, []);

  // 15.207.226.239
  const homeUri =
    "https://test.whizhack.com/api/home?populate=productleft.product_button, whizrangeproduct.button, box.button,contact.partner_contact, contact.product_type, service_compo.service_box.service_homes.service_content, Institution_contact.product_type,Institution_contact.cityname, Institution_contact.partner_contact, career.link ,career.career_right, link, images ";
  const footerUri = "https://test.whizhack.com/api/footer?populate=left_footer";
  const navbarUri =
    " https://test.whizhack.com/api/top-right-menu?populate=body.sections.links, body.single_sections";
  const aboutUri =
    "https://test.whizhack.com/api/about?populate=header.management,header.story,header.Advisor,header.alliance.strategicalliances,header.partnership, header.recognition.recognitions.button";
  const productsUri =
    " https://test.whizhack.com/api/solution?populate=solution.threat.card, solution.bg_image_url.about_cybers, solution.bg_image_url.card, solution.threat.traces.feature_trace, solution.threat.traces, solution.threat.trace_benefits.trace_benefit , solution.threat.trace_benefits.benefit_card, solution.threat.solution_cases.case_impact, solution.bg_image_url.solution_cases.case_impact, solution.bg_image_url.trace_features.feature_trace, solution.hids_section.about_cybers, solution.hids_section.hids_features.feature_hids";
  const trainingUri =
    "https://test.whizhack.com/api/training?populate=training.cyber_gurus.price , training.about_cybers.cyber_link, training.cyber_modules.cyber_module, training.btogs.btog_card, training.solution_cases.case_impact";
  const serviceUri =
    "https://test.whizhack.com/api/service?populate=section, security_zone.service_links.assessment, timeline.timelines, testing, Service_security.service_homes.service_content";
  const blogUri =
    "https://test.whizhack.com/api/blog?populate=blog.latest_blogs.blog_button, all_blog.all_blog.latest_blogs.blog_button,  all_blog.all_blog.latest_blogs.Single_blog_details";
  const blogDetailsUri = `https://test.whizhack.com/api/blog?populate=blog.latest_blogs.blog_button, all_blog.all_blog.latest_blogs.Single_blog_details, all_blog.all_blog.latest_blogs.blog_button/${blogId}, all_blog.all_blog.latest_blogs.Single_blog_details/${blogId}`;
  const whitePaperUri =
    "https://test.whizhack.com/api/white-paper?populate=white_paper_cards";
  const partnersUri =
    "https://test.whizhack.com/api/partner?populate=partner_contents.partner_card";
  const serviceItUri =
    "https://test.whizhack.com/api/service-it?populate=service_IT_content";
  const serviceOtUri =
    "https://test.whizhack.com/api/service-ot?populate=service_ot_content";
  const careerUri =
    "https://test.whizhack.com/api/career-pathway?populate=career_path_video, career_programs.duration, career_programs.module";
  const termsAndConditionUri = "https://test.whizhack.com/api/terms-condition";
  const ransomwareUri =
    "https://test.whizhack.com/api/ransomeware?populate=ransomeware_content.ransomeware_content_inner";
  const investorRelationUri =
    "https://test.whizhack.com/api/investor-relation?populate=year.investors.investor_shareholder_content, advisorpartner";
  const contactUri = "https://test.whizhack.com/api/contact-form";
  const industryUri =
    "https://test.whizhack.com/api/industry?populate=industry_left.industry_lefts, section, industry_right.industry_rights.button";
  const privacyUri = "https://test.whizhack.com/api/privacy-policy";

  // Use the useFetch hook for each API endpoint
  const homeData = useFetch(homeUri);
  const footerData = useFetch(footerUri);
  const navbarData = useFetch(navbarUri);
  const aboutData = useFetch(aboutUri);
  const productsData = useFetch(productsUri);
  const trainingData = useFetch(trainingUri);
  const serviceData = useFetch(serviceUri);
  const blogData = useFetch(blogUri);
  const blogDetailsData = useFetch(blogDetailsUri);
  const whitePaperData = useFetch(whitePaperUri);
  const partnerData = useFetch(partnersUri);
  const serviceItData = useFetch(serviceItUri);
  const serviceOtData = useFetch(serviceOtUri);
  const careerData = useFetch(careerUri);
  const termsAndConditionData = useFetch(termsAndConditionUri);
  const ransomwareData = useFetch(ransomwareUri);
  const investorRelationData = useFetch(investorRelationUri);
  const contactData = useFetch(contactUri);
  const industryData = useFetch(industryUri);
  const privacyData = useFetch(privacyUri);

  // Combine loading states
  const loading =
    homeData.loading ||
    footerData.loading ||
    navbarData.loading ||
    aboutData.loading ||
    productsData.loading ||
    trainingData.loading ||
    serviceData.loading ||
    blogData.loading ||
    blogDetailsData.loading ||
    whitePaperData.loading ||
    partnerData.loading ||
    serviceItData.loading ||
    serviceOtData.loading ||
    careerData.loading ||
    termsAndConditionData.loading ||
    ransomwareData.loading ||
    investorRelationData.loading ||
    contactData.loading ||
    industryData.loading ||
    privacyData.loading;

  // Combine error messages
  const error =
    homeData.error ||
    footerData.error ||
    navbarData.error ||
    aboutData.error ||
    productsData.error ||
    trainingData.error ||
    serviceData.error ||
    blogData.error ||
    blogDetailsData.error ||
    whitePaperData.error ||
    partnerData.error ||
    serviceItData.error ||
    serviceOtData.error ||
    careerData.error ||
    termsAndConditionData.error ||
    ransomwareData.error ||
    investorRelationData.error ||
    contactData.error ||
    industryData.error ||
    privacyData.error;

  return (
    <div className="Home">
      <Loader loading={loading}>
        <Navbar title="Whizhack" data={navbarData.data} />
        <Routes>
          <Route path="/" element={<Home data={homeData.data} />} />
          <Route path="/about" element={<About data={aboutData.data} />} />
          <Route
            path="/industry"
            element={<Industry data={industryData.data} />}
          />
          <Route
            path="Products/:solutionName"
            element={<Trace data={productsData.data} />}
          />
          <Route
            path="Trainings/:paramName"
            element={<Guru data={trainingData.data} />}
          />
          <Route path="/blog" element={<Blog data={blogData.data} />} />
          <Route
            path="/blog/:blogId"
            element={<Blog_details data={blogDetailsData.data} />}
          />
          <Route
            path="/contact"
            element={<Contact data={contactData.data} />}
          />
          <Route
            path="/services"
            element={<Service data={serviceData.data} />}
          />
          <Route path="/privacy" element={<Privcy data={privacyData.data} />} />
          <Route
            path="/partners"
            element={<Partner data={partnerData.data} />}
          />
          <Route
            path="/termsandcondition"
            element={<Condition data={termsAndConditionData.data} />}
          />
          <Route
            path="/ransomeware"
            element={<Ransomeware data={ransomwareData.data} />}
          />
          <Route
            path="/investor"
            element={<Investor_Relations data={investorRelationData.data} />}
          />
          <Route
            path="/serviceIT"
            element={<Service_IT data={serviceItData.data} />}
          />
          <Route
            path="/serviceOT"
            element={<Service_OT data={serviceOtData.data} />}
          />
          <Route
            path="/White Paper"
            element={<White_Paper data={whitePaperData.data} />}
          />
          <Route path="/career" element={<Career data={careerData.data} />} />
        </Routes>
        <Footer data={footerData.data} />
      </Loader>
    </div>
  );
}

export default App;

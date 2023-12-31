import React from "react";
import w from "../../asset/W.png";
import "./Trace.css";
import thred from "../../asset/thread.png";
import digital from "../../asset/digital.png";
import partner from "../../asset/saaa0560_cbersecurity_person_teaching_7ed30544-c3e4-493f-b8b5-b4f52e854a8f 1.png";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

export default function Trace({ data }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      // Create an object to hold your form data
      const formData = {
        data: {
          name: values.name,
          mobile: values.mobile,
          email: values.email,
          message: values.message,
        },
      };

      // Make a POST request to your Strapi API
      axios
        .post("http://15.207.226.239:1337/api/solution-contacts", formData)
        .then((response) => {
          console.log("POST request successful");
          alert("Thank You");
        })
        .catch((error) => {
          console.error("POST request error:", error.response);
          if (error.response) {
            console.log("Response data:", error.response.data);
            console.log("Response status:", error.response.status);
          } else if (error.request) {
            console.log("No response received:", error.request);
          } else {
            console.log("Error setting up request:", error.message);
          }
        });
    },
  });

  const { solutionName } = useParams();

  const solutions = data.attributes.solution;

  return (
    <div>
      {solutions.map((firstSolution, index) => {
        if (
          firstSolution.__component === "solution.solution-header" &&
          firstSolution.big_title === "TRACE" &&
          solutionName === "trace"
        ) {
          return (
            <>
              {/* <section key={index} className="jumbotron-1 jumbotron-fluid">
                <video muted loop autoPlay="autoplay">
                  <source src={firstSolution.bg_url} type="video/mp4" />
                </video>
                <div className="container-flui">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-122">
                      <div
                        className="trace_home"
                        style={{
                          background: `url(${w}) #260058`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          width: "100wh",
                          height: "100vh",
                          clipPath:
                            "polygon(0 0, 75% 0%, 100% 70%, 81% 100%, 0 100%, 0% 50%)",
                          opacity: 1,
                          display: "flex",
                          justifyContent: "left",
                          alignItems: "center",
                        }}
                      >
                        <div className="content_trace ">
                          <img
                            src={firstSolution.logo_url}
                            alt=""
                            width="276px"
                            height="107px"
                          />
                          <div
                            style={{
                              color: "#9747FF",
                              fontFamily: "Pulse",
                              fontSize: "24px",
                              fontStyle: "normal",
                              fontWeight: 600,
                              lineHeight: " normal",
                            }}
                            className="mt-5 mb-3"
                          >
                            {firstSolution.small_label}
                          </div>
                          <div
                            style={{
                              color: "#FFF",
                              fontFamily: "Pulse",
                              fontSize: "70px",
                              fontStyle: "normal",
                              fontWeight: 700,
                              lineHeight: " normal",
                            }}
                          >
                            {firstSolution.big_title}
                          </div>
                          <div
                            style={{
                              color: "#FFF",
                              fontFamily: "Pulse",
                              fontSize: "24px",
                              fontStyle: "normal",
                              fontWeight: 400,
                              width: "60%",
                              lineHeight: " normal",
                            }}
                            className="mt-3 mb-3"
                          >
                            {firstSolution.description}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-122"></div>
                  </div>
                </div>
              </section> */}
              <div className="guru-section1">
                <video muted loop autoPlay="autoplay">
                  <source src={firstSolution.bg_url} type="video/mp4" />
                </video>
                <div className="ui1-banner1-parent-trace-solution">
                  <div className="container-fluid">
                    <div className="row justify-content-between">
                      <div className="col-lg-5">
                        <div className="ui1-banner1-content-solution">
                          <img
                            data-aos="fade-down"
                            data-aos-delay="300"
                            data-aos-duration={1500}
                            src={firstSolution.logo_url}
                            alt="whizrange_logo"
                            width="191px"
                            height="136px"
                            className="mb-3"
                          />
                          <h5
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration={1500}
                            style={{ color: "#9747FF" }}
                          >
                            {firstSolution.small_label}
                          </h5>
                          <h3
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration={1500}
                          >
                            {firstSolution.big_title}
                          </h3>
                          <p
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration={1500}
                          >
                            {firstSolution.description}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6"></div>
                    </div>
                  </div>
                </div>
              </div>

              <section className="trace-about">
                <div className="threat mt-5">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-1 col-md-1  line">
                        <div className="top"></div>
                        <div className="bottom"></div>
                      </div>

                      <div className="col-lg-4 col-md-3 col-sm-122">
                        <div className="square_content">
                          <h3
                            data-aos="fade-right"
                            data-aos-delay="300"
                            data-aos-duration={1500}
                            className="mb-4"
                            style={{ color: "#07002F", fontWeight: "700" }}
                          >
                            {firstSolution.threat.big_title}
                          </h3>
                          <h6
                            data-aos="fade-right"
                            data-aos-delay="300"
                            data-aos-duration={1500}
                            className="mb-3"
                            style={{ color: "#1D1D1D", fontWeight: "500" }}
                          >
                            {firstSolution.threat.small_title}
                          </h6>
                          <p
                            style={{ color: "#62666A", fontWeight: "500" }}
                            data-aos="fade-right"
                            data-aos-delay="300"
                            data-aos-duration={1500}
                          >
                            <span
                              style={{ color: "#185893", fontWeight: "500" }}
                            >
                              {firstSolution.threat.label}
                            </span>{" "}
                            {firstSolution.threat.description}
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-7 col-md-6 col-sm-122">
                        <div
                          className="square"
                          style={{
                            background: `url(${thred})`,
                            height: "100%",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        >
                          <div className="degree">
                            {firstSolution.threat.card.map((thred) => (
                              <div className="degree_content">
                                <img
                                  src={thred.logo_url}
                                  alt=""
                                  width="111px"
                                  height="125px"
                                />
                                <h5
                                  style={{
                                    color: "#07002F",
                                    fontWeight: "600",
                                  }}
                                >
                                  <span
                                    style={{
                                      color: "#6A49F2",
                                      fontWeight: "600",
                                    }}
                                  >
                                    {thred.label}
                                  </span>{" "}
                                  {thred.title}
                                </h5>
                                <p
                                  style={{
                                    color: "#62666A",
                                    fontWeight: "400",
                                  }}
                                >
                                  {thred.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                {firstSolution.threat.traces.data.map((features) => (
                  <div className="threat key-features mt-5">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div
                            className="square_content"
                            style={{
                              background: `url(${features.attributes.bg_url})`,
                              height: "100%",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                            }}
                          ></div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="square">
                            <div className="degree-2">
                              <div className="d-flex mt-4">
                                <svg
                                  className="mx-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="77"
                                  height="72"
                                  viewBox="0 0 77 72"
                                  fill="none"
                                >
                                  <path
                                    d="M5.13333 61.714H7.7V59.1426H5.13333C3.71557 59.1426 2.56667 57.9916 2.56667 56.5712V5.14284C2.56667 3.72245 3.71557 2.57142 5.13333 2.57142H61.6C63.0177 2.57142 64.1666 3.72245 64.1666 5.14284V7.71426H66.7333V5.14284C66.7333 2.30271 64.4349 0 61.6 0H5.13333C2.29845 0 0 2.30271 0 5.14284V56.5712C0 59.4113 2.29845 61.714 5.13333 61.714Z"
                                    fill="#5F5FED"
                                  />
                                  <path
                                    d="M5.1333 5.14258H7.69997V7.714H5.1333V5.14258Z"
                                    fill="#5F5FED"
                                  />
                                  <path
                                    d="M10.2666 5.14258H12.8333V7.714H10.2666V5.14258Z"
                                    fill="#5F5FED"
                                  />
                                  <path
                                    d="M15.3999 5.14258H17.9666V7.714H15.3999V5.14258Z"
                                    fill="#5F5FED"
                                  />
                                  <path
                                    d="M10.2666 66.8573C10.2666 69.6975 12.5651 72.0002 15.3999 72.0002H71.8666C74.7015 72.0002 76.9999 69.6975 76.9999 66.8573V15.429C76.9999 12.5888 74.7015 10.2861 71.8666 10.2861H15.3999C12.5651 10.2861 10.2666 12.5888 10.2666 15.429V66.8573ZM12.8333 15.429C12.8333 14.0086 13.9822 12.8576 15.3999 12.8576H71.8666C73.2843 12.8576 74.4332 14.0086 74.4332 15.429V66.8573C74.4332 68.2777 73.2843 69.4288 71.8666 69.4288H15.3999C13.9822 69.4288 12.8333 68.2777 12.8333 66.8573V15.429Z"
                                    fill="#5F5FED"
                                  />
                                  <path
                                    d="M15.3999 15.4287H17.9666V18.0001H15.3999V15.4287Z"
                                    fill="#5F5FED"
                                  />
                                  <path
                                    d="M20.5334 15.4287H23.1001V18.0001H20.5334V15.4287Z"
                                    fill="#5F5FED"
                                  />
                                  <path
                                    d="M25.6665 15.4287H28.2332V18.0001H25.6665V15.4287Z"
                                    fill="#5F5FED"
                                  />
                                  <path
                                    d="M15.3999 20.5713H71.8665V23.1427H15.3999V20.5713Z"
                                    fill="#5F5FED"
                                  />
                                  <path
                                    d="M15.3999 27H25.6666V29.5714H15.3999V27Z"
                                    fill="#5F5FED"
                                  />
                                  <path
                                    d="M15.3999 32.1426H23.0999V34.714H15.3999V32.1426Z"
                                    fill="#5F5FED"
                                  />
                                  <path
                                    d="M43.6335 37.2852C38.6718 37.2852 34.6501 41.3142 34.6501 46.2851C34.6501 51.256 38.6718 55.2851 43.6335 55.2851C48.5952 55.2851 52.6168 51.256 52.6168 46.2851C52.611 41.3171 48.5923 37.2909 43.6335 37.2852ZM43.6335 52.7137C40.0899 52.7137 37.2168 49.8353 37.2168 46.2851C37.2168 42.735 40.0899 39.8566 43.6335 39.8566C47.1771 39.8566 50.0501 42.735 50.0501 46.2851C50.0456 49.8337 47.1755 52.7092 43.6335 52.7137Z"
                                    fill="#5F5FED"
                                  />
                                  <path
                                    d="M64.1667 42.4281C64.1667 41.7177 63.5925 41.1424 62.8834 41.1424H59.4916C59.2198 40.2977 58.881 39.4758 58.4764 38.6867L60.875 36.2853C61.3755 35.7829 61.3755 34.9694 60.875 34.467L55.4298 29.0117C54.9284 28.5103 54.1163 28.5103 53.6149 29.0117L51.2179 31.4134C50.429 31.0097 49.6093 30.6703 48.7668 30.3977V26.9996C48.7668 26.2892 48.1925 25.7139 47.4834 25.7139H39.7834C39.0744 25.7139 38.5001 26.2892 38.5001 26.9996V30.3977C37.6576 30.6703 36.8379 31.0097 36.0489 31.4134L33.652 29.0117C33.1505 28.5103 32.3385 28.5103 31.837 29.0117L26.3918 34.467C25.8913 34.9694 25.8913 35.7829 26.3918 36.2853L28.7891 38.6867C28.682 38.8972 28.5786 39.1084 28.4811 39.3218C28.2103 39.9145 27.9748 40.522 27.7753 41.1424H24.3834C23.6744 41.1424 23.1001 41.7177 23.1001 42.4281V50.1423C23.1001 50.8527 23.6744 51.4281 24.3834 51.4281H27.7753C28.047 52.2728 28.3858 53.0947 28.7904 53.8838L26.3918 56.2851C25.8913 56.7875 25.8913 57.6011 26.3918 58.1035L31.837 63.5587C32.3385 64.0601 33.1505 64.0601 33.652 63.5587L36.0489 61.157C36.8379 61.5607 37.6576 61.9002 38.5001 62.1727V65.5709C38.5001 66.2812 39.0744 66.8566 39.7834 66.8566H47.4834C48.1925 66.8566 48.7668 66.2812 48.7668 65.5709V62.1727C49.6093 61.9002 50.429 61.5607 51.2179 61.157L53.6149 63.5587C54.1163 64.0601 54.9284 64.0601 55.4298 63.5587L60.875 58.1035C61.3755 57.6011 61.3755 56.7875 60.875 56.2851L58.4764 53.8838C58.881 53.0947 59.2198 52.2728 59.4916 51.4281H62.8834C63.5925 51.4281 64.1667 50.8527 64.1667 50.1423V42.4281ZM61.6001 48.8566H58.5278C57.9426 48.8566 57.4318 49.2536 57.2855 49.8209C56.9576 51.097 56.4523 52.3216 55.784 53.4569C55.4866 53.9615 55.5684 54.6044 55.9816 55.019L58.1514 57.1941L54.5222 60.8317L52.3511 58.6563C51.9369 58.2417 51.2952 58.16 50.7912 58.4583C49.658 59.1278 48.4363 59.6344 47.1626 59.9626C46.5963 60.1092 46.2001 60.6209 46.2001 61.2072V64.2851H41.0668V61.2072C41.0668 60.6209 40.6705 60.1092 40.1043 59.9626C38.8305 59.6344 37.6088 59.1278 36.4756 58.4583C35.9716 58.16 35.3299 58.2417 34.9157 58.6563L32.7447 60.8317L29.1154 57.1941L31.2852 55.019C31.6984 54.6044 31.7802 53.9615 31.4828 53.4569C30.8145 52.3216 30.3092 51.097 29.9813 49.8209C29.835 49.2536 29.3243 48.8566 28.7391 48.8566H25.6668V43.7138H28.7391C29.3243 43.7138 29.835 43.3168 29.9813 42.7495C30.1886 41.9402 30.468 41.152 30.8158 40.3931C31.0163 39.9531 31.239 39.524 31.4828 39.1074C31.7793 38.6025 31.6981 37.9606 31.2852 37.5462L29.1154 35.3712L32.7447 31.7336L34.9157 33.9096C35.3299 34.3243 35.9716 34.4053 36.4756 34.1067C37.6088 33.4378 38.8305 32.9306 40.1043 32.6024C40.6705 32.4561 41.0668 31.9438 41.0668 31.3585V28.2853H46.2001V31.3633C46.2001 31.9496 46.5963 32.4613 47.1626 32.6078C48.4363 32.936 49.658 33.4426 50.7912 34.1121C51.2952 34.4104 51.9369 34.3288 52.3511 33.9141L54.5222 31.7387L58.1514 35.3763L55.9816 37.5514C55.5684 37.966 55.4866 38.6089 55.784 39.1135C56.4523 40.2488 56.9576 41.4734 57.2855 42.7495C57.4318 43.3168 57.9426 43.7138 58.5278 43.7138H61.6001V48.8566Z"
                                    fill="#5F5FED"
                                  />
                                  <path
                                    d="M64.1665 64.2852H71.8665V66.8566H64.1665V64.2852Z"
                                    fill="#5F5FED"
                                  />
                                </svg>
                                <h3
                                  data-aos="fade-down"
                                  data-aos-delay="300"
                                  data-aos-duration={1500}
                                  className="mb-4 mt-2"
                                  style={{
                                    color: "#5F5FED",
                                    fontWeight: "700",
                                  }}
                                >
                                  {features.attributes.title}
                                </h3>
                              </div>
                              <div className="key">
                                {features.attributes.feature_trace.map(
                                  (list) => (
                                    <div
                                      className="d-flex mx-4"
                                      data-aos="fade-down"
                                      data-aos-delay="300"
                                      data-aos-duration={1500}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="43"
                                        viewBox="0 0 43 43"
                                        fill="none"
                                      >
                                        <path
                                          d="M21.5 43C9.6449 43 0 33.3551 0 21.5C0 9.6449 9.6449 0 21.5 0C33.3551 0 43 9.6449 43 21.5C43 33.3551 33.3551 43 21.5 43ZM21.5 2.86667C11.2259 2.86667 2.86667 11.2259 2.86667 21.5C2.86667 31.7741 11.2259 40.1333 21.5 40.1333C31.7741 40.1333 40.1333 31.7741 40.1333 21.5C40.1333 11.2259 31.7741 2.86667 21.5 2.86667ZM19.6467 28.2467L32.5467 15.3467C33.1071 14.7863 33.1071 13.8804 32.5467 13.32C31.9863 12.7595 31.0804 12.7595 30.52 13.32L18.6333 25.2066L13.9134 20.4866C13.3529 19.9262 12.4471 19.9262 11.8866 20.4866C11.3262 21.0471 11.3262 21.9529 11.8866 22.5134L17.62 28.2467C17.8995 28.5262 18.2664 28.6667 18.6333 28.6667C19.0003 28.6667 19.3672 28.5262 19.6467 28.2467Z"
                                          fill="#5F5FED"
                                        />
                                      </svg>
                                      <div>
                                        <h6
                                          className="mb-3 my-2 mx-3"
                                          style={{
                                            color: "#5F5FED",
                                            fontWeight: "500",
                                          }}
                                        >
                                          {list.title}
                                        </h6>
                                        <p
                                          style={{
                                            color: "#8C8C8C",
                                            fontWeight: "400",
                                          }}
                                          className="mx-3"
                                        >
                                          {list.description}
                                        </p>
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </section>

              <section>
                {firstSolution.threat.trace_benefits.data.map((benefit) => (
                  <div className="threat key-benefits mt-5">
                    <div className="container-fluid">
                      <div
                        className="row"
                        style={{
                          background: `url(${w}) `,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          width: "100wv",
                          height: "100%",
                        }}
                      >
                        <div className="col-lg-1 col-md-1  line">
                          <div className="top"></div>
                          <div className="bottom"></div>
                        </div>

                        <div className="col-lg-4 col-md-3 col-sm-122">
                          <div className="square_content">
                            <div className="d-flex">
                              <img
                                src={benefit.attributes.bg_url}
                                alt="icon"
                                height="46px"
                                width="52px"
                                className="mx-4"
                              />
                              <h3
                                data-aos="fade-right"
                                data-aos-delay="300"
                                data-aos-duration={1500}
                                className="mb-4 mt-2"
                                style={{ color: "#5F5FED", fontWeight: "700" }}
                              >
                                {benefit.attributes.title}
                              </h3>
                            </div>
                            <div className="key">
                              {benefit.attributes.trace_benefit.map((bene) => (
                                <div
                                  className="d-flex mx-4"
                                  data-aos="fade-right"
                                  data-aos-delay="300"
                                  data-aos-duration={1500}
                                >
                                  <div>
                                    <h6
                                      className="mb-3 my-2 mx-3"
                                      style={{
                                        color: "#5F5FED",
                                        fontWeight: "500",
                                      }}
                                    >
                                      {bene.title}
                                    </h6>
                                    <p
                                      style={{
                                        color: "#8C8C8C",
                                        fontWeight: "400",
                                      }}
                                      className="mx-3"
                                    >
                                      {bene.description}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-7 col-md-6 col-sm-122">
                          <div
                            className="square"
                            style={{
                              background: `url(${thred})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                            }}
                          >
                            <div className="degree">
                              {benefit.attributes.benefit_card.map((card) => (
                                <div
                                  className="degree_content"
                                  data-aos="fade-down"
                                  data-aos-delay="300"
                                  data-aos-duration={1500}
                                >
                                  <img
                                    src={card.logo_url}
                                    alt="icon"
                                    height="46px"
                                    width="52px"
                                  />
                                  <h5
                                    className="mt-2"
                                    style={{
                                      color: "#07002F",
                                      fontWeight: "600",
                                    }}
                                  >
                                    Less than{" "}
                                    <span
                                      style={{
                                        color: "#6A49F2",
                                        fontWeight: "600",
                                      }}
                                    >
                                      {card.label}
                                    </span>{" "}
                                    Response time
                                  </h5>
                                  <p
                                    style={{
                                      color: "#62666A",
                                      fontWeight: "400",
                                    }}
                                  >
                                    {card.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </section>

              {firstSolution.threat.solution_cases.data.map((impact, index) => {
                if (index === 0) {
                  return (
                    <section
                      className="cyber use-cases mt-5"
                      style={{
                        backgroundImage: `url(${impact.attributes.bg_url})`,
                      }}
                    >
                      <div className="container" key={impact.id}>
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12 cyber_content mt-5 ">
                            <div className=" text-light cyber-heading w-50 ">
                              <div className="top-border"></div>
                              <h1>{impact.attributes.title}</h1>
                              <h6>{impact.attributes.description}</h6>
                              <div className="bottom-border"></div>
                            </div>
                            <div className="card_content">
                              {impact.attributes.case_impact.map((imp) => (
                                <div
                                  className="card_content_details"
                                  data-aos="fade-down"
                                  data-aos-delay="300"
                                  data-aos-duration={1500}
                                >
                                  <h4
                                    style={{
                                      color: "#1D1D1D",
                                      fontWeight: 600,
                                    }}
                                  >
                                    <span
                                      style={{
                                        color: "#185893",
                                        fontWeight: 600,
                                      }}
                                    >
                                      {imp.label}
                                    </span>{" "}
                                    {imp.title}
                                  </h4>
                                  <p
                                    style={{
                                      color: "#626664",
                                      fontWeight: 500,
                                    }}
                                  >
                                    {imp.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  );
                } else if (index === 2) {
                  return (
                    <section
                      className="technology trace-technology mt-5"
                      style={{
                        backgroundImage: `url(${impact.attributes.bg_url})`,
                      }}
                    >
                      <div className="container text-white text-center mt-5">
                        <div className="col-lg-12 col-md-8 col-sm-12 justify-content-center d-flex align-items-center">
                          <div className="line_left"></div>
                          <h1 style={{ fontWeight: 600 }}>
                            {impact.attributes.title}
                          </h1>
                          <div className="line_right"></div>
                        </div>

                        <div className="col-lg-12 col-md-8 col-sm-12 mx-auto mt-3 mb-5">
                          <div className="tech_card">
                            {impact.attributes.case_impact.map((imp) => (
                              <div
                                className="tech_card_details"
                                data-aos="fade-up"
                                data-aos-delay="300"
                                data-aos-duration={1500}
                              >
                                <h5>{imp.description}</h5>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-8 col-sm-12">
                          <div className="line_bottom"></div>
                        </div>
                      </div>
                    </section>
                  );
                } else if (index === 1) {
                  return (
                    <section
                      className="technology  trace-technology mt-5"
                      style={{
                        backgroundImage: `url(${impact.attributes.bg_url})`,
                      }}
                    >
                      <div className="container text-white text-center mt-5">
                        <div className="col-lg-12 col-md-8 col-sm-12 justify-content-center d-flex align-items-center">
                          <div className="line_left"></div>
                          <h1 style={{ fontWeight: 600 }}>
                            {impact.attributes.title}
                          </h1>
                          <div className="line_right"></div>
                        </div>

                        <div className="col-lg-12 col-md-8 col-sm-12 mx-auto mt-3 mb-5">
                          <div className="tech_card_index">
                            {impact.attributes.case_impact.map((imp) => (
                              <div className="tech_card_index_details">
                                <h4
                                  style={{
                                    color: "#1D1D1D",
                                    fontWeight: 600,
                                  }}
                                >
                                  <span
                                    style={{
                                      color: "#185893",
                                      fontWeight: 600,
                                    }}
                                  >
                                    {imp.label}
                                  </span>{" "}
                                  {imp.title}
                                </h4>
                                <p
                                  style={{
                                    color: "#626664",
                                    fontWeight: 500,
                                  }}
                                >
                                  {imp.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-8 col-sm-12">
                          <div className="line_bottom"></div>
                        </div>
                      </div>
                    </section>
                  );
                }
              })}

              <section>
                <div className="partner_trace mt-5">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 ">
                      <img
                        src={partner}
                        alt="partner"
                        width="100%"
                        height="100%"
                      />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 mx-auto">
                      <form onSubmit={formik.handleSubmit}>
                        <div className="partner_form mx-5">
                          <h1
                            style={{
                              color: "#07002F",
                              fontWeight: "700",
                            }}
                            className="mb-2"
                          >
                            Partner with us for the next generation products
                          </h1>
                          <h6
                            style={{
                              color: "#62666A",
                              fontWeight: "500",
                            }}
                            className="mb-4"
                          >
                            To register, please fill out the form with your
                            contact information and we will get back to you
                            shortly.
                          </h6>

                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Contact Person Name *"
                            className="mt-3 input"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            style={{
                              color: "#363636",
                            }}
                          />
                          <input
                            type="number"
                            name="mobile"
                            id="number"
                            placeholder="Contact Person No.*"
                            className="mt-3 input"
                            onChange={formik.handleChange}
                            value={formik.values.mobile}
                            style={{
                              color: "#363636",
                            }}
                          />
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Id *"
                            className="mt-3 input"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            style={{
                              color: "#363636",
                            }}
                          />
                          <textarea
                            type="text"
                            name="message"
                            id="message"
                            placeholder="Message (optional)"
                            rows="5"
                            className="mt-3 input"
                            onChange={formik.handleChange}
                            value={formik.values.message}
                            style={{
                              color: "#363636",
                            }}
                          />

                          <button
                            type="submit"
                            className="d-flex justify-content-end clipped-btns"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </>
          );
        } else if (
          firstSolution.__component === "solution.zero-hack" &&
          firstSolution.big_title === "WHIZRANGE" &&
          solutionName === "whizrange"
        ) {
          return (
            <>
              {/* --------------  Trace Header Start -------------------- */}

              <div className="guru-section1">
                <video muted loop autoPlay="autoplay">
                  <source src={firstSolution.bg_url} type="video/mp4" />
                </video>
                <div className="ui1-banner1-parent-solution">
                  <div className="container-fluid">
                    <div className="row justify-content-between">
                      <div className="col-lg-5">
                        <div className="ui1-banner1-content-solution">
                          <img
                            data-aos="fade-down"
                            data-aos-delay="300"
                            data-aos-duration={1500}
                            src={firstSolution.logo_url}
                            alt="whizrange_logo"
                            width="191px"
                            height="136px"
                            className="mb-5"
                          />
                          <h5
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration={1500}
                            style={{ color: "#00B85F" }}
                            className="mb-3"
                          >
                            {firstSolution.small_title}
                          </h5>
                          <h3
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration={1500}
                            className="mb-4"
                          >
                            {firstSolution.big_title}
                          </h3>
                          <p
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration={1500}
                          >
                            {firstSolution.description}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* --------------  Trace Header End -------------------- */}

              {/* --------------  Trace Simulation Start -------------------- */}

              <section>
                <div className="threat mt-5">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-1 col-md-1  line">
                        <div className="top"></div>
                        <div className="bottom"></div>
                      </div>

                      <div className="col-lg-4 col-md-3 col-sm-12 square_content">
                        <div className=" mt-5 ">
                          <h3
                            data-aos="fade-right"
                            data-aos-delay="300"
                            data-aos-duration={1500}
                            className="mb-4"
                            style={{ color: "#07002F", fontWeight: "700" }}
                          >
                            {firstSolution.bg_image_url.big_title}
                          </h3>
                          <h6
                            data-aos="fade-right"
                            data-aos-delay="300"
                            data-aos-duration={1500}
                            className="mb-3"
                            style={{ color: "#62666A", fontWeight: "500" }}
                          >
                            {firstSolution.bg_image_url.description}
                          </h6>
                          <button
                            type="submit"
                            className="know_more clipped-btns mt-4"
                          >
                            Know More
                          </button>
                        </div>
                      </div>

                      <div className="col-lg-7 col-md-6 col-sm-122">
                        <div className="whiz">
                          <div className="degree">
                            {firstSolution.bg_image_url.card.map((card) => (
                              <div className="degree_content">
                                <img
                                  src={card.logo_url}
                                  alt=""
                                  width="141px"
                                  height="145px"
                                />
                                <h5
                                  style={{
                                    color: "#07002F",
                                    fontWeight: "600",
                                  }}
                                >
                                  <span
                                    style={{
                                      color: "#6A49F2",
                                      fontWeight: "600",
                                    }}
                                  >
                                    {card.label}
                                  </span>{" "}
                                  <br />
                                  {card.title}
                                </h5>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* --------------  Trace Simulation End -------------------- */}

              {/* --------------  Trace About WHIZRANGE Start -------------------- */}

              <section>
                <div className=" mt-5 about-whiz-section">
                  <div className="container-fluid">
                    <div className="row bottom_bg">
                      <div className="col-lg-6 col-md-6 col-sm-122">
                        <div
                          className="left-cut-img"
                          style={{
                            background: `url(${digital})`,
                            height: "100vh",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-122">
                        {firstSolution.bg_image_url.about_cybers.data.map(
                          (about) => (
                            <div className="about_whiz">
                              <div className="whiz_degree mx-4">
                                <h3
                                  data-aos="fade-down"
                                  data-aos-delay="300"
                                  data-aos-duration={1500}
                                  className="mb-1"
                                  style={{
                                    color: "#07002F",
                                    fontWeight: "600",
                                  }}
                                >
                                  {about.attributes.title}{" "}
                                  <span
                                    style={{
                                      color: "#2C81FE",
                                      fontWeight: "600",
                                    }}
                                  >
                                    {about.attributes.color_title}
                                  </span>
                                </h3>
                                <p
                                  data-aos="fade-down"
                                  data-aos-delay="300"
                                  data-aos-duration={1500}
                                  className="mb-3"
                                  style={{
                                    color: "#62666A",
                                    fontWeight: "400",
                                  }}
                                >
                                  Simulation-based platform
                                </p>
                                <h5
                                  data-aos="fade-down"
                                  data-aos-delay="300"
                                  data-aos-duration={1500}
                                  style={{
                                    color: "#62666A",
                                    fontWeight: "500",
                                  }}
                                >
                                  {about.attributes.description}
                                </h5>
                                <button
                                  type="submit"
                                  className="know_more clipped-btns mt-4"
                                >
                                  Know More
                                </button>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                      <div className=""></div>
                    </div>
                  </div>
                </div>
              </section>

              {/* --------------  Trace About WHIZRANGE End -------------------- */}

              {/* --------------  Trace Our Technology Start -------------------- */}

              {firstSolution.bg_image_url.solution_cases.data.map(
                (impact, index) => {
                  if (index === 0) {
                    return (
                      <section
                        className="cyber mt-5"
                        style={{
                          backgroundImage: `url(${impact.attributes.bg_url})`,
                        }}
                      >
                        <div className="container" key={impact.id}>
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-122 cyber_content">
                              <div className=" text-light w-50 ">
                                <div className="top-border"></div>
                                <h1>{impact.attributes.title}</h1>
                                <h6>{impact.attributes.description}</h6>
                                <div className="bottom-border"></div>
                              </div>
                              <div className="card_content">
                                {impact.attributes.case_impact.map((imp) => (
                                  <div
                                    className="card_content_details"
                                    data-aos="fade-down"
                                    data-aos-delay="300"
                                    data-aos-duration={1500}
                                  >
                                    <h4
                                      style={{
                                        color: "#1D1D1D",
                                        fontWeight: 600,
                                      }}
                                    >
                                      <span
                                        style={{
                                          color: "#185893",
                                          fontWeight: 600,
                                        }}
                                      >
                                        {imp.label}
                                      </span>{" "}
                                      {imp.title}
                                    </h4>
                                    <p
                                      style={{
                                        color: "#626664",
                                        fontWeight: 500,
                                      }}
                                    >
                                      {imp.description}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    );
                  } else if (index === 2) {
                    return (
                      <section
                        className="technology mt-5"
                        style={{
                          backgroundImage: `url(${impact.attributes.bg_url})`,
                        }}
                      >
                        <div className="container text-white text-center mt-5">
                          <div className="col-lg-12 col-md-8 col-sm-12 justify-content-center d-flex align-items-center">
                            <div className="line_left"></div>
                            <h1
                              style={{ fontFamily: "Pulse", fontWeight: 600 }}
                            >
                              {impact.attributes.title}
                            </h1>
                            <div className="line_right"></div>
                          </div>

                          <div className="col-lg-12 col-md-8 col-sm-12 mx-auto mt-3 mb-5">
                            <div className="tech_card">
                              {impact.attributes.case_impact.map((imp) => (
                                <div
                                  className={`tech_card_details ${
                                    index % 3 === 0 ? "even" : "odd"
                                  }`}
                                  key={index}
                                  data-aos="fade-up"
                                  data-aos-delay="300"
                                  data-aos-duration={1500}
                                >
                                  <h5>{imp.description}</h5>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="col-lg-12 col-md-8 col-sm-12">
                            <div className="line_bottom"></div>
                          </div>
                        </div>
                      </section>
                    );
                  } else if (index === 1) {
                    return (
                      <section
                        className="technology mt-5"
                        style={{
                          backgroundImage: `url(${impact.attributes.bg_url})`,
                        }}
                      >
                        <div className="container text-white text-center mt-5">
                          <div className="col-lg-12 col-md-8 col-sm-12 justify-content-center d-flex align-items-center">
                            <div className="line_left"></div>
                            <h1
                              style={{ fontFamily: "Pulse", fontWeight: 600 }}
                            >
                              {impact.attributes.title}
                            </h1>
                            <div className="line_right"></div>
                          </div>

                          <div className="col-lg-12 col-md-8 col-sm-12 mx-auto mt-3 mb-5">
                            <div className="tech_card_index">
                              {impact.attributes.case_impact.map((imp) => (
                                <div
                                  className="tech_card_index_details"
                                  data-aos="fade-up"
                                  data-aos-delay="300"
                                  data-aos-duration={1500}
                                >
                                  <h4
                                    style={{
                                      color: "#1D1D1D",
                                      fontWeight: 600,
                                    }}
                                  >
                                    <span
                                      style={{
                                        color: "#185893",
                                        fontWeight: 600,
                                      }}
                                    >
                                      {imp.label}
                                    </span>{" "}
                                    {imp.title}
                                  </h4>
                                  <p
                                    style={{
                                      color: "#626664",
                                      fontWeight: 500,
                                    }}
                                  >
                                    {imp.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="col-lg-12 col-md-8 col-sm-12">
                            <div className="line_bottom"></div>
                          </div>
                        </div>
                      </section>
                    );
                  }
                }
              )}
              {/* --------------  Trace Our Technology Start -------------------- */}

              <section>
                <div className="partner_trace mt-5">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 ">
                      <img
                        src={partner}
                        alt="partner"
                        width="100%"
                        height="100%"
                      />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 mx-auto">
                      <form onSubmit={formik.handleSubmit}>
                        <div className="partner_form mx-5">
                          <h1
                            style={{
                              color: "#07002F",
                              fontWeight: "700",
                            }}
                            className="mb-2"
                          >
                            Partner with us for the next generation products
                          </h1>
                          <h6
                            style={{
                              color: "#62666A",
                              fontWeight: "500",
                            }}
                            className="mb-4"
                          >
                            To register, please fill out the form with your
                            contact information and we will get back to you
                            shortly.
                          </h6>

                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Contact Person Name *"
                            className="mt-3 input"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            style={{
                              color: "#363636",
                            }}
                          />
                          <input
                            type="number"
                            name="mobile"
                            id="number"
                            placeholder="Contact Person No.*"
                            className="mt-3 input"
                            onChange={formik.handleChange}
                            value={formik.values.mobile}
                            style={{
                              color: "#363636",
                            }}
                          />
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Id *"
                            className="mt-3 input"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            style={{
                              color: "#363636",
                            }}
                          />
                          <textarea
                            type="text"
                            name="message"
                            id="message"
                            placeholder="Message (optional)"
                            rows="5"
                            className="mt-3 input"
                            onChange={formik.handleChange}
                            value={formik.values.message}
                            style={{
                              color: "#363636",
                            }}
                          />

                          <button
                            type="submit"
                            className="d-flex justify-content-end clipped-btns"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </>
          );
        } else if (
          firstSolution.__component === "solution.zero-hack" &&
          firstSolution.big_title === "ZEROHACK" &&
          solutionName === "zerohack"
        ) {
          return (
            <>
              <div className="guru-section1">
                <video muted loop autoPlay="autoplay">
                  <source src={firstSolution.bg_url} type="video/mp4" />
                </video>
                <div className="ui1-banner1-parent-solution-zerohack">
                  <div className="container-fluid">
                    <div className="row justify-content-between">
                      <div className="col-lg-6">
                        <div className="ui1-banner1-content-solution">
                          <img
                            data-aos="fade-down"
                            data-aos-delay="300"
                            data-aos-duration={1500}
                            src={firstSolution.logo_url}
                            alt="zerohack_logo"
                            width="191px"
                            height="50px"
                            className="mb-5"
                          />
                          <h5
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration={1500}
                            style={{ color: "#00B85F" }}
                            className="mb-3"
                          >
                            {firstSolution.small_title}
                          </h5>
                          <h3
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration={1500}
                            className="mb-4"
                          >
                            {firstSolution.big_title}
                          </h3>
                          <p
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration={1500}
                          >
                            {firstSolution.description}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* --------------  Trace Header End -------------------- */}

              {/* --------------  Trace Simulation Start -------------------- */}

              <section>
                <div className="threat mt-5">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-7 col-md-6 col-sm-122">
                        <div className="zerohack_whiz">
                          <div className="degree">
                            {firstSolution.bg_image_url.card.map((card) => (
                              <div className="degree_content">
                                <img
                                  src={card.logo_url}
                                  alt=""
                                  width="141px"
                                  height="145px"
                                />
                                <h5
                                  style={{
                                    color: "#07002F",
                                    fontWeight: "600",
                                  }}
                                >
                                  <span
                                    style={{
                                      color: "#6A49F2",
                                      fontWeight: "600",
                                    }}
                                  >
                                    {card.label}
                                  </span>{" "}
                                  <br />
                                  {card.title}
                                </h5>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="line">
                        <div className="top_zero"></div>
                        <div className="bottom_zero"></div>
                      </div>

                      <div className="col-lg-4 col-md-3 col-sm-12 square_content">
                        <div className=" mt-5 ">
                          <h3
                            data-aos="fade-right"
                            data-aos-delay="300"
                            data-aos-duration={1500}
                            className="mb-4"
                            style={{ color: "#07002F", fontWeight: "700" }}
                          >
                            {firstSolution.bg_image_url.big_title}
                          </h3>
                          <h6
                            data-aos="fade-right"
                            data-aos-delay="300"
                            data-aos-duration={1500}
                            className="mb-3"
                            style={{ color: "#62666A", fontWeight: "500" }}
                          >
                            {firstSolution.bg_image_url.description}
                          </h6>
                          <button
                            type="submit"
                            className="know_more clipped-btns mt-4"
                          >
                            Know More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className=" mt-5 about-whiz-section">
                  <div className="container-fluid">
                    <div className="row bottom_bg">
                      <div className="col-lg-6 col-md-6 col-sm-122">
                        {firstSolution.bg_image_url.about_cybers.data.map(
                          (about) => (
                            <div className="about_whiz">
                              <div className="whiz_degree mx-4">
                                <h3
                                  data-aos="fade-down"
                                  data-aos-delay="300"
                                  data-aos-duration={1500}
                                  className="mb-1"
                                  style={{
                                    color: "#07002F",
                                    fontWeight: "600",
                                  }}
                                >
                                  {about.attributes.title}{" "}
                                  <span
                                    style={{
                                      color: "#2C81FE",
                                      fontWeight: "600",
                                    }}
                                  >
                                    {about.attributes.color_title}
                                  </span>
                                </h3>
                                <p
                                  data-aos="fade-down"
                                  data-aos-delay="300"
                                  data-aos-duration={1500}
                                  className="mb-3"
                                  style={{
                                    color: "#62666A",
                                    fontWeight: "400",
                                  }}
                                >
                                  Triple Layered Threat Detection Engine
                                </p>
                                <h5
                                  data-aos="fade-down"
                                  data-aos-delay="300"
                                  data-aos-duration={1500}
                                  style={{
                                    color: "#62666A",
                                    fontWeight: "500",
                                  }}
                                >
                                  {about.attributes.description}
                                </h5>
                                <button
                                  type="submit"
                                  className="know_more clipped-btns mt-4"
                                >
                                  Know More
                                </button>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        {firstSolution.bg_image_url.about_cybers.data.map(
                          (about) => (
                            <div
                              className="mt-2"
                              style={{
                                background: `url(${about.attributes.bg_image_url})`,
                                height: "100vh",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                              }}
                            ></div>
                          )
                        )}
                      </div>

                      <div className=""></div>
                    </div>
                  </div>
                </div>
              </section>

              {/* --------------  Trace About WHIZRANGE End -------------------- */}

              {/* --------------  Trace Our Technology Start -------------------- */}

              {firstSolution.bg_image_url.solution_cases.data.map(
                (impact, index) => {
                  if (index === 0) {
                    return (
                      <section
                        className="cyber mt-5"
                        style={{
                          backgroundImage: `url(${impact.attributes.bg_url})`,
                        }}
                      >
                        <div className="container" key={impact.id}>
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-122 cyber_content">
                              <div className=" text-light w-50 ">
                                <div className="top-border"></div>
                                <h1>{impact.attributes.title}</h1>
                                <h6>{impact.attributes.description}</h6>
                                <div className="bottom-border"></div>
                              </div>
                              <div className="card_content">
                                {impact.attributes.case_impact.map((imp) => (
                                  <div
                                    className="card_content_details"
                                    data-aos="fade-down"
                                    data-aos-delay="300"
                                    data-aos-duration={1500}
                                  >
                                    <h4
                                      style={{
                                        color: "#1D1D1D",
                                        fontWeight: 600,
                                      }}
                                    >
                                      <span
                                        style={{
                                          color: "#185893",
                                          fontWeight: 600,
                                        }}
                                      >
                                        {imp.label}
                                      </span>{" "}
                                      {imp.title}
                                    </h4>
                                    <p
                                      style={{
                                        color: "#626664",
                                        fontWeight: 500,
                                      }}
                                    >
                                      {imp.description}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    );
                  } else if (index === 2) {
                    return (
                      <section
                        className="technology mt-5"
                        style={{
                          backgroundImage: `url(${impact.attributes.bg_url})`,
                        }}
                      >
                        <div className="container text-white text-center mt-5">
                          <div className="col-lg-12 col-md-8 col-sm-12 justify-content-center d-flex align-items-center">
                            <div className="line_left"></div>
                            <h1
                              style={{ fontFamily: "Pulse", fontWeight: 600 }}
                            >
                              {impact.attributes.title}
                            </h1>
                            <div className="line_right"></div>
                          </div>

                          <div className="col-lg-12 col-md-8 col-sm-12 mx-auto mt-3 mb-5">
                            <div className="tech_card">
                              {impact.attributes.case_impact.map((imp) => (
                                <div
                                  className={`tech_card_details ${
                                    index % 3 === 0 ? "even" : "odd"
                                  }`}
                                  key={index}
                                  data-aos="fade-up"
                                  data-aos-delay="300"
                                  data-aos-duration={1500}
                                >
                                  <h5>{imp.description}</h5>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="col-lg-12 col-md-8 col-sm-12">
                            <div className="line_bottom"></div>
                          </div>
                        </div>
                      </section>
                    );
                  } else if (index === 1) {
                    return (
                      <section
                        className="technology mt-5"
                        style={{
                          backgroundImage: `url(${impact.attributes.bg_url})`,
                        }}
                      >
                        <div className="container text-white text-center mt-5">
                          <div className="col-lg-12 col-md-8 col-sm-12 justify-content-center d-flex align-items-center">
                            <div className="line_left"></div>
                            <h1
                              style={{ fontFamily: "Pulse", fontWeight: 600 }}
                            >
                              {impact.attributes.title}
                            </h1>
                            <div className="line_right"></div>
                          </div>

                          <div className="col-lg-12 col-md-8 col-sm-12 mx-auto mt-3 mb-5">
                            <div className="tech_card_index">
                              {impact.attributes.case_impact.map((imp) => (
                                <div
                                  className="tech_card_index_details"
                                  data-aos="fade-up"
                                  data-aos-delay="300"
                                  data-aos-duration={1500}
                                >
                                  <h4
                                    style={{
                                      color: "#1D1D1D",
                                      fontWeight: 600,
                                    }}
                                  >
                                    <span
                                      style={{
                                        color: "#185893",
                                        fontWeight: 600,
                                      }}
                                    >
                                      {imp.label}
                                    </span>{" "}
                                    {imp.title}
                                  </h4>
                                  <p
                                    style={{
                                      color: "#626664",
                                      fontWeight: 500,
                                    }}
                                  >
                                    {imp.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="col-lg-12 col-md-8 col-sm-12">
                            <div className="line_bottom"></div>
                          </div>
                        </div>
                      </section>
                    );
                  }
                }
              )}
              {/* --------------  Trace Our Technology Start -------------------- */}

              <section>
                <div className="partner_trace mt-5">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 ">
                      <img
                        src={partner}
                        alt="partner"
                        width="100%"
                        height="100%"
                      />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 mx-auto">
                      <form onSubmit={formik.handleSubmit}>
                        <div className="partner_form mx-5">
                          <h1
                            style={{
                              color: "#07002F",
                              fontWeight: "700",
                            }}
                            className="mb-2"
                          >
                            Partner with us for the next generation products
                          </h1>
                          <h6
                            style={{
                              color: "#62666A",
                              fontWeight: "500",
                            }}
                            className="mb-4"
                          >
                            To register, please fill out the form with your
                            contact information and we will get back to you
                            shortly.
                          </h6>

                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Contact Person Name *"
                            className="mt-3 input"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            style={{
                              color: "#363636",
                            }}
                          />
                          <input
                            type="number"
                            name="mobile"
                            id="number"
                            placeholder="Contact Person No.*"
                            className="mt-3 input"
                            onChange={formik.handleChange}
                            value={formik.values.mobile}
                            style={{
                              color: "#363636",
                            }}
                          />
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Id *"
                            className="mt-3 input"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            style={{
                              color: "#363636",
                            }}
                          />
                          <textarea
                            type="text"
                            name="message"
                            id="message"
                            placeholder="Message (optional)"
                            rows="5"
                            className="mt-3 input"
                            onChange={formik.handleChange}
                            value={formik.values.message}
                            style={{
                              color: "#363636",
                            }}
                          />

                          <button
                            type="submit"
                            className="d-flex justify-content-end clipped-btns"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </>
          );
        } else if (
          firstSolution.__component === "solution.hids" &&
          firstSolution.big_title === "Host Intrusion and Detection System" &&
          solutionName === "hids"
        ) {
          return (
            <>
              <div className="guru-section1">
                <video muted loop autoPlay="autoplay">
                  <source src={firstSolution.bg_url} type="video/mp4" />
                </video>
                <div className="ui1-banner1-parent-solution-zerohack">
                  <div className="container-fluid">
                    <div className="row justify-content-between">
                      <div className="col-lg-6">
                        <div className="ui1-banner1-content-solution-hids">
                          <h5
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration={1500}
                            style={{ color: "#00B85F" }}
                            className="mb-3"
                          >
                            {firstSolution.small_title}
                          </h5>
                          <h3
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration={1500}
                            className="mb-4"
                          >
                            {firstSolution.big_title}
                          </h3>
                        </div>
                      </div>
                      <div className="col-lg-6"></div>
                    </div>
                  </div>
                </div>
              </div>

              <section>
                <div className="threat mt-5">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12 hids">
                        <img
                          src={firstSolution.hids_section.bg_image_url}
                          alt="bgimg"
                          width="100%"
                        />
                      </div>
                      <div className="line">
                        <div className="bottom_zero_hids"></div>
                      </div>

                      <div className="col-lg-5 col-md-3 col-sm-12 square_content">
                        <div className=" mt-5 ">
                          <h3
                            data-aos="fade-right"
                            data-aos-delay="300"
                            data-aos-duration={1500}
                            className="mb-4"
                            style={{ color: "#07002F", fontWeight: "700" }}
                          >
                            {firstSolution.hids_section.title}
                          </h3>
                          <h6
                            data-aos="fade-right"
                            data-aos-delay="300"
                            data-aos-duration={1500}
                            className="mb-3"
                            style={{ color: "#62666A", fontWeight: "500" }}
                          >
                            {firstSolution.hids_section.description}
                          </h6>
                          <button
                            type="submit"
                            className="know_more clipped-btns mt-4"
                          >
                            Know More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className=" mt-5 about-whiz-section">
                  <div className="container-fluid">
                    <div className="row bottom_bg">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        {firstSolution.hids_section.about_cybers.data.map(
                          (about) => (
                            <div className="about_whiz">
                              <div className="whiz_degree mx-4">
                                <h3
                                  data-aos="fade-down"
                                  data-aos-delay="300"
                                  data-aos-duration={1500}
                                  className="mb-1"
                                  style={{
                                    color: "#07002F",
                                    fontWeight: "600",
                                  }}
                                >
                                  {about.attributes.title}{" "}
                                  <span
                                    style={{
                                      color: "#2C81FE",
                                      fontWeight: "600",
                                    }}
                                  >
                                    {about.attributes.color_title}
                                  </span>
                                </h3>
                                <p
                                  data-aos="fade-down"
                                  data-aos-delay="300"
                                  data-aos-duration={1500}
                                  className="mb-3"
                                  style={{
                                    color: "#62666A",
                                    fontWeight: "400",
                                  }}
                                >
                                  Host Intrusion and Detection System
                                </p>
                                <p
                                  data-aos="fade-down"
                                  data-aos-delay="300"
                                  data-aos-duration={1500}
                                  style={{
                                    color: "#62666A",
                                    fontWeight: "500",
                                  }}
                                >
                                  {about.attributes.description}
                                </p>
                                <button
                                  type="submit"
                                  className="know_more clipped-btns mt-4"
                                >
                                  Know More
                                </button>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 hids">
                        {firstSolution.hids_section.about_cybers.data.map(
                          (about) => (
                            <div
                              className="mt-2"
                              style={{
                                background: `url(${about.attributes.bg_image_url})`,
                                height: "100vh",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                              }}
                            ></div>
                          )
                        )}
                      </div>

                      {/* <div className=""></div> */}
                    </div>
                  </div>
                </div>
              </section>

              {firstSolution.hids_section.hids_features.data.map((feature) => (
                <section className="main-feauters mt-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 text-center feature-heading">
                        <h1>{feature.attributes.title}</h1>
                      </div>
                    </div>
                    {feature.attributes.feature_hids.map((dete, index) => (
                      <div
                        className={`row mt-5 feauters-content ${
                          index % 2 === 0 ? "even" : "odd"
                        }`}
                      >
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <img
                            src={dete.image_url}
                            alt="attact-img"
                            width="100%"
                          />
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="main-feauters-content">
                            <h3>{dete.title}</h3>
                            <p>{dete.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </>
          );
        } else if (
          firstSolution.__component === "solution.hids" &&
          firstSolution.big_title ===
            "Network Intrusion and Detection System" &&
          solutionName === "nids"
        ) {
          return (
            <>
              <div className="guru-section1">
                <video muted loop autoPlay="autoplay">
                  <source src={firstSolution.bg_url} type="video/mp4" />
                </video>
                <div className="ui1-banner1-parent-solution-zerohack">
                  <div className="container-fluid">
                    <div className="row justify-content-between">
                      <div className="col-lg-6">
                        <div className="ui1-banner1-content-solution-hids">
                          <h5
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration={1500}
                            style={{ color: "#00B85F" }}
                            className="mb-3"
                          >
                            {firstSolution.small_title}
                          </h5>
                          <h3
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration={1500}
                            className="mb-4"
                          >
                            {firstSolution.big_title}
                          </h3>
                        </div>
                      </div>
                      <div className="col-lg-6"></div>
                    </div>
                  </div>
                </div>
              </div>

              <section>
                <div className="threat mt-5">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12 hids">
                        <img
                          src={firstSolution.hids_section.bg_image_url}
                          alt="bgimg"
                          width="100%"
                        />
                      </div>
                      <div className="line">
                        <div className="bottom_zero_hids"></div>
                      </div>

                      <div className="col-lg-5 col-md-3 col-sm-12 square_content">
                        <div className=" mt-5 ">
                          <h3
                            data-aos="fade-right"
                            data-aos-delay="300"
                            data-aos-duration={1500}
                            className="mb-4"
                            style={{ color: "#07002F", fontWeight: "700" }}
                          >
                            {firstSolution.hids_section.title}
                          </h3>
                          <h6
                            data-aos="fade-right"
                            data-aos-delay="300"
                            data-aos-duration={1500}
                            className="mb-3"
                            style={{ color: "#62666A", fontWeight: "500" }}
                          >
                            {firstSolution.hids_section.description}
                          </h6>
                          <button
                            type="submit"
                            className="know_more clipped-btns mt-4"
                          >
                            Know More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className=" mt-5 about-whiz-section">
                  <div className="container-fluid">
                    <div className="row bottom_bg">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        {firstSolution.hids_section.about_cybers.data.map(
                          (about) => (
                            <div className="about_whiz">
                              <div className="whiz_degree mx-4">
                                <h3
                                  data-aos="fade-down"
                                  data-aos-delay="300"
                                  data-aos-duration={1500}
                                  className="mb-1"
                                  style={{
                                    color: "#07002F",
                                    fontWeight: "600",
                                  }}
                                >
                                  {about.attributes.title}{" "}
                                  <span
                                    style={{
                                      color: "#2C81FE",
                                      fontWeight: "600",
                                    }}
                                  >
                                    {about.attributes.color_title}
                                  </span>
                                </h3>
                                <p
                                  data-aos="fade-down"
                                  data-aos-delay="300"
                                  data-aos-duration={1500}
                                  className="mb-3"
                                  style={{
                                    color: "#62666A",
                                    fontWeight: "400",
                                  }}
                                >
                                  Host Intrusion and Detection System
                                </p>
                                <p
                                  data-aos="fade-down"
                                  data-aos-delay="300"
                                  data-aos-duration={1500}
                                  style={{
                                    color: "#62666A",
                                    fontWeight: "500",
                                  }}
                                >
                                  {about.attributes.description}
                                </p>
                                <button
                                  type="submit"
                                  className="know_more clipped-btns mt-4"
                                >
                                  Know More
                                </button>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 hids">
                        {firstSolution.hids_section.about_cybers.data.map(
                          (about) => (
                            <div
                              className="mt-2"
                              style={{
                                background: `url(${about.attributes.bg_image_url})`,
                                height: "100vh",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                              }}
                            ></div>
                          )
                        )}
                      </div>

                      <div className=""></div>
                    </div>
                  </div>
                </div>
              </section>

              {firstSolution.hids_section.hids_features.data.map((feature) => (
                <section className="main-feauters mt-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 text-center feature-heading">
                        <h1>{feature.attributes.title}</h1>
                      </div>
                    </div>
                    {feature.attributes.feature_hids.map((dete, index) => (
                      <div
                        className={`row mt-5 ${
                          index % 2 === 0 ? "even" : "odd"
                        }`}
                      >
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <img
                            src={dete.image_url}
                            alt="attact-img"
                            width="100%"
                          />
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="main-feauters-content">
                            <h3>{dete.title}</h3>
                            <p>{dete.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </>
          );
        }

        return null;
      })}
    </div>
  );
}

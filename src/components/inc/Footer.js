import React from "react";
import "./Footer.css";
import useFetch from "../../hooks/useFetch";

export default function Footer() {

  const uri = "http://localhost:1337/api/footer?populate=left_footer";
const { loading, error, data } = useFetch(uri);
// console.log(data.attributes);
if (loading) {
  return <p>Loading data...</p>;
}

if (error) {
  return <p>Error: {error.message}</p>;
}

  return (
    <>
      <section className="footer-section">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 footer_link"  style={{
                  backgroundColor: "#07002F",
                }}>
              <div
              
               
              >
                <div className="footer pt-4">
                  <div
                    style={{
                      color: "#FFF",
                      fontFamily: "Satoshi",
                      fontSize: "32px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                    className="mt-5"
                  >
                    Organization
                  </div>
                 
                  <div className="link_small">
                    <ul className="list-unstyled mt-4">
                    {data.attributes.left_footer.map((link) => (
                      <li key={link.id} >
                        <a href={link.url}>{link.menu}</a>
                      </li>
                     ))}
                    </ul>
                  </div>

                  <div
                    className="footer-copyright py-3 mt-5"
                    style={{
                      color: "#FFF",
                      // fontFamily: "Satoshi",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: " normal",
                      borderTop: "1px solid #0398AB",
                    }}
                  >
                    {" "}
                    © Whizhack Technologies 2023
                    {/* <a href="/"> MDBootstrap.com</a> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 mt-5 contact">
              <div className="info contact-details">
              <h3 className=" footer-contact-title">Contact Us</h3>
              <div className=" footer-newsletter">
                  <div className="input-group mb-4 ">
                    <input
                      type="text"
                      className=""
                      id="inlineFormInputGroup"
                      style={{ width: "66%"}}
                    />
                    <div className="input-group-prepend ">
                      <div className="input-group-text" style={{ backgroundColor: "#185893"}}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="31"
                          viewBox="0 0 17 31"
                          fill="none"
                        >
                          <path
                            d="M1 1L15.5 15.5L1 30"
                            stroke="white"
                            stroke-width="2"
                          />
                        </svg>{" "}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="location d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="26"
                      viewBox="0 0 20 26"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.50204 14.047C12.1217 14.047 14.2521 11.9158 14.2521 9.29696C14.2521 6.67808 12.1217 4.54688 9.50204 4.54688C6.88237 4.54688 4.75195 6.67729 4.75195 9.29696C4.75195 11.9166 6.88237 14.047 9.50204 14.047ZM9.50204 5.33856C11.6855 5.33856 13.4604 7.1135 13.4604 9.29696C13.4604 11.4804 11.6855 13.2554 9.50204 13.2554C7.31858 13.2554 5.54363 11.4804 5.54363 9.29696C5.54363 7.1135 7.31858 5.33856 9.50204 5.33856Z"
                        fill="#1D1D1D"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.50016 0C4.26082 0 0 4.20857 0 9.50096C0 15.0427 4.75087 20.7119 8.21447 24.6965C8.22714 24.7123 8.7829 25.3338 9.47008 25.3338C9.47166 25.3338 9.52787 25.3338 9.53104 25.3338C10.2174 25.3338 10.774 24.7123 10.7866 24.6965C14.2518 20.7119 19.0019 15.0435 19.0019 9.50096C19.0019 4.20857 14.7403 0 9.50016 0ZM9.59279 23.6578C9.57617 23.6736 9.52787 23.7085 9.48591 23.7354C9.478 23.714 9.41941 23.6673 9.38379 23.6301C6.48228 20.2916 1.58336 14.6572 1.58336 9.50096C1.58336 5.13563 5.13563 1.58336 9.50016 1.58336C13.8671 1.58336 17.4186 5.13563 17.4186 9.50175C17.4186 14.6572 12.5196 20.2916 9.59279 23.6578Z"
                        fill="#1D1D1D"
                      />
                    </svg>
                    <div
                      style={{
                        
                      }}
                      className="ml-3 address"
                    >
                     {data.attributes.address}
                    </div>
                  </div>

                  <div className="email d-flex mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                    >
                      <path
                        d="M19.791 2.04822L18.9977 1.26953L11.649 8.48265C10.7304 9.38429 9.18554 9.38429 8.26696 8.48265L0.91832 1.31052L0.125 2.0892L5.59473 7.45806L0.125 12.8269L0.91832 13.6056L6.38805 8.23675L7.47364 9.30232C8.1417 9.95806 9.01853 10.3269 9.93711 10.3269C10.8557 10.3269 11.7325 9.95806 12.4006 9.30232L13.4862 8.23675L18.9559 13.6056L19.7492 12.8269L14.2795 7.45806L19.791 2.04822Z"
                        fill="#1D1D1D"
                      />
                      <path
                        d="M18.2463 15H1.75366C0.793321 15 0 14.2213 0 13.2787V1.72131C0 0.778687 0.793321 0 1.75366 0H18.2463C19.2067 0 20 0.778687 20 1.72131V13.2787C20 14.2213 19.2067 15 18.2463 15ZM1.7119 1.10656C1.37787 1.10656 1.12735 1.35246 1.12735 1.68032V13.2377C1.12735 13.5656 1.37787 13.8115 1.7119 13.8115H18.2046C18.5386 13.8115 18.7891 13.5656 18.7891 13.2377V1.68032C18.7891 1.35246 18.5386 1.10656 18.2046 1.10656H1.7119Z"
                        fill="#1D1D1D"
                      />
                    </svg>
                    <div
                      className="ml-3 address"
                    >
                     {data.attributes.email}
                    </div>
                  </div>

                  <div className="site d-flex mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <path
                        d="M6.99219 9.25491C7.31611 9.68838 7.72937 10.047 8.20395 10.3066C8.67853 10.5661 9.20332 10.7205 9.74273 10.7591C10.2821 10.7978 10.8235 10.7199 11.3302 10.5307C11.8369 10.3415 12.297 10.0455 12.6793 9.66261L14.9421 7.39759C15.6291 6.68561 16.0092 5.73203 16.0006 4.74223C15.9921 3.75243 15.5954 2.8056 14.8962 2.10568C14.197 1.40576 13.2511 1.00874 12.2622 1.00014C11.2734 0.991542 10.3208 1.37204 9.60949 2.0597L8.31215 3.35076"
                        stroke="#1D1D1D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0086 7.74434C9.68468 7.31087 9.27142 6.9522 8.79684 6.69266C8.32226 6.43312 7.79747 6.27878 7.25806 6.24011C6.71866 6.20144 6.17725 6.27935 5.67057 6.46854C5.16388 6.65774 4.70378 6.95379 4.32145 7.33663L2.05866 9.60165C1.37168 10.3136 0.99155 11.2672 1.00014 12.257C1.00874 13.2468 1.40536 14.1936 2.1046 14.8936C2.80383 15.5935 3.74972 15.9905 4.73855 15.9991C5.72738 16.0077 6.68003 15.6272 7.39131 14.9396L8.6811 13.6485"
                        stroke="#1D1D1D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div
                      className="ml-3 address"
                    >
                      {data.attributes.link}
                    </div>
                  </div>

                  <div className="mobile d-flex mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M17.1108 13.0863V15.5165C17.1117 15.7421 17.0655 15.9654 16.9751 16.1722C16.8847 16.3789 16.7521 16.5644 16.5859 16.7169C16.4197 16.8695 16.2234 16.9856 16.0097 17.0579C15.796 17.1301 15.5695 17.157 15.3448 17.1367C12.8521 16.8658 10.4577 16.014 8.35391 14.6498C6.39664 13.406 4.73722 11.7466 3.49349 9.78934C2.12445 7.67603 1.27247 5.26995 1.00658 2.76603C0.986332 2.54202 1.01295 2.31625 1.08475 2.10309C1.15654 1.88993 1.27193 1.69406 1.42357 1.52794C1.57521 1.36182 1.75978 1.22909 1.96553 1.13821C2.17128 1.04733 2.39369 1.00029 2.61861 1.00008H5.04882C5.44196 0.996209 5.82308 1.13542 6.12116 1.39177C6.41925 1.64812 6.61394 2.00412 6.66896 2.3934C6.77154 3.17112 6.96176 3.93474 7.23601 4.6697C7.345 4.95964 7.36859 5.27475 7.30398 5.57769C7.23938 5.88063 7.08928 6.15869 6.87148 6.37894L5.84269 7.40773C6.99587 9.43578 8.67507 11.115 10.7031 12.2682L11.7319 11.2394C11.9522 11.0216 12.2302 10.8715 12.5332 10.8069C12.8361 10.7423 13.1512 10.7658 13.4411 10.8748C14.1761 11.1491 14.9397 11.3393 15.7174 11.4419C16.111 11.4974 16.4703 11.6956 16.7272 11.9988C16.9841 12.302 17.1206 12.689 17.1108 13.0863Z"
                        stroke="#1D1D1D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div
                      className="ml-3 address"
                    >
                      {data.attributes.number}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

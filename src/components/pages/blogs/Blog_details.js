import React from "react";
import "./blogs.css";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { ThreeDots } from "react-loader-spinner";

export default function Blog_details() {
  const { blogId } = useParams();

  const uri = `http://15.207.20.62:1337/api/blog?populate=blog.latest_blogs.blog_button, all_blog.all_blog.latest_blogs.Single_blog_details, all_blog.all_blog.latest_blogs.blog_button/${blogId}, all_blog.all_blog.latest_blogs.Single_blog_details/${blogId}`;
  const { loading, error, data } = useFetch(uri);
  // console.log(data.attributes);
  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Filter the array to find the blog with the matching ID
  const selectedBlog = data.attributes.all_blog.all_blog.latest_blogs.data.find(
    (blog) => blog.id === parseInt(blogId, 10)
  );

  if (!selectedBlog) {
    // Blog not found
    return <p>Blog not found</p>;
  }

  return (
    <div>
      <div
        className="blog-section-single"
        style={{ backgroundImage: `url(${selectedBlog.attributes.image_url})` }}
      >
        <div className="blog-section-single-outer">
          <div className="blog-section-single-inner">
            <p className="blog-type">{selectedBlog.attributes.tag}</p>
            <h3>{selectedBlog.attributes.title}</h3>
            <p>
              <span>{selectedBlog.attributes.small_label}</span>
            </p>
          </div>
        </div>
      </div>
      <section className="back-to-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="back-to-arrow-inner">
                <i class="fa-solid fa-angle-left"></i>
              </div>
              <div className="blog-single-content">
                <div></div>
                <p>
                  {selectedBlog.attributes.description} This blog post discusses
                  the multiple advantages of using an integrated cybersecurity
                  solution, as well as its effectiveness in combating changing
                  cyber threats.
                </p>
                {selectedBlog.attributes.Single_blog_details.map(
                  (detail, index) => (
                    <div key={index}>
                      <h5>{detail.title}</h5>
                      <p>{detail.description}</p>
                    </div>
                  )
                )}
                {/* <h5>
                  Benefits of Integrated Cybersecurity Solution for Business
                </h5>
                <p>
                  A complete method that incorporates different security
                  procedures and technologies into a cohesive system is referred
                  to as an integrated cybersecurity solution. It combines a
                  variety of security components, including firewalls, intrusion
                  detection systems (IDS), antivirus software, vulnerability
                  management, and others, on a single platform. Organizations
                  can use this integration to streamline their security
                  operations, improve threat detection and prevention
                  capabilities, and receive a comprehensive view of their
                  security posture.
                </p>
                <h5>
                  Benefits of Integrated Cybersecurity Solution for Business
                </h5>

                <p>
                  Businesses face an increasing number of sophisticated cyber
                  threats in today's digital landscape. Organizations require a
                  strong cybersecurity plan to properly protect sensitive data
                  and maintain consumer trust. Adopting an integrated
                  cybersecurity solution provides numerous significant
                  advantages to businesses:{" "}
                </p>
                <ul>
                  <li>
                    <p>
                      <strong> Enhanced Security Effectiveness-</strong>{" "}
                      Integrated cybersecurity solutions combine several
                      security measures into a cohesive system, giving a higher
                      level of protection than standalone security technologies.
                      By leveraging advanced technologies such as AI, ML, and
                      behavioral analytics, these solutions can detect and
                      respond to potential threats in real-time. The
                      comprehensive approach helps businesses stay ahead of
                      evolving cyber threats and minimizes the risk of
                      successful attacks.{" "}
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Streamlined Operations- </strong>Managing multiple
                      security tools and platforms can be complex and
                      time-consuming. An integrated solution simplifies security
                      operations by consolidating various components into a
                      single platform. This centralized strategy lowers
                      administrative responsibilities, simplifies them, and
                      optimized resource distribution. It allows security teams
                      to focus on strategic initiatives rather than juggling
                      multiple tools, leading to improved operational
                      efficiency.{" "}
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Rapid Incident Response-</strong> Timely response
                      to cyber incidents is critical to minimizing the impact of
                      a breach. Integrated solutions provide incident response
                      and remediation capabilities, allowing organizations to
                      detect, contain, and mitigate threats quickly. The
                      shortened incident response time helps to limit potential
                      damage and downtime.{" "}
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Cost Efficiency-</strong> Managing several
                      standalone security tools can be expensive due to separate
                      licensing, maintenance, and training needs. Adopting an
                      integrated cybersecurity solution removes the need for
                      several point solutions, which saves money and simplifies
                      vendor management. Furthermore, these systems can be
                      scaled to meet expanding security needs without requiring
                      large infrastructure upgrades, making them a
                      cost-effective option for enterprises of all sizes.
                    </p>
                  </li>
                </ul>

                <p>
                  {" "}
                  In conclusion, integrating cybersecurity measures into a
                  unified solution offers numerous benefits for businesses. It
                  enhances security effectiveness, streamlines operations,
                  enables rapid incident response, offers cost efficiency, etc.
                  By implementing an integrated cybersecurity solution,
                  organizations can protect their valuable assets, safeguard
                  customer trust, and ensure business continuity in the face of
                  evolving cyber threats.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

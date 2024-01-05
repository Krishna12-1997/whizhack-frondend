import React from "react";
import "./blogs.css";
import { useParams } from "react-router-dom";

export default function Blog_details({ data }) {
  const { blogId } = useParams();
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
                      {detail.description
                        .split("\n")
                        .map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                  )
                )}
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from "react";
import "./blogs.css";
import { Link } from "react-router-dom";
import Loader from "../../inc/Loader";
import useFetch from "../../../hooks/useFetch";

export default function Blog() {

  const [showAll, setShowAll] = useState(false);
  const uri = "https://test.whizhack.com/api/blog?populate=blog.latest_blogs.blog_button, all_blog.all_blog.latest_blogs.blog_button,  all_blog.all_blog.latest_blogs.Single_blog_details"; // Specify the URI for this page
  const { loading, error, data } = useFetch(uri);

  if (loading) {
    return <div><Loader loading={loading}/></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="blog-section1">
        <video muted loop autoPlay="autoplay">
          <source src={data.attributes.bg_url} type="video/mp4" />
        </video>
        <div className="blog-banner1-content">
          <div className="container-fluid">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="blog-banner1-content-parent">
                  <h3>{data.attributes.title}</h3>
                  <p>{data.attributes.description}</p>
                </div>
              </div>
              <div className="col-lg-6"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-section2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-title">
                <h3>{data.attributes.blog.title}</h3>
                <div className={`blog-view-all ${showAll ? 'view-less' : ''}`}>
                  <a href="#" onClick={() => setShowAll(!showAll)}>
                    {showAll
                      ? "View Less"
                      : `${data.attributes.blog.right_title}`}
                    <i
                      className={`fa ${
                        showAll ? "fa-angle-up" : "fa-angle-right"
                      }`}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
            {data.attributes.blog.latest_blogs.data
              .slice(
                0,
                showAll ? data.attributes.blog.latest_blogs.data.length : 3
              )
              .map((blog) => (
                <div className="col-lg-4" key={blog.id}>
                  <div className="blogs-shadow">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={blog.attributes.image_url}
                        alt="Card image"
                      />
                      <div className="card-body">
                        <div className="card-subtitle">
                          <p>{blog.attributes.small_label}</p>
                          <p className="blog-type">{blog.attributes.tag}</p>
                        </div>
                        <h5 className="card-title">{blog.attributes.title}</h5>
                        <p className="card-text">
                          {blog.attributes.description
                            .split(" ")
                            .slice(0, 20)
                            .join(" ")}
                        </p>
                        <div className="blogs-btn-container">
                          <a
                            href={`/blog/${blog.id}`}
                            className="clipped-btns"
                          >
                            {blog.attributes.blog_button.label}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="blog-section2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-title">
                <h3>{data.attributes.all_blog.all_blog.title}</h3>
                <div className={`blog-view-all ${showAll ? 'view-less' : ''}`}>
                  <a href="#" onClick={() => setShowAll(!showAll)}>
                    {showAll
                      ? "View Less"
                      : `${data.attributes.blog.right_title}`}
                    <i
                      className={`fa ${
                        showAll ? "fa-angle-up" : "fa-angle-right"
                      }`}
                    ></i>
                  </a>
                </div>
              </div>
            </div>

                {data.attributes.all_blog.all_blog.latest_blogs.data
                  .slice(
                    0,
                    showAll ? data.attributes.all_blog.all_blog.latest_blogs.data.length : 6
                  )
                  .map((allblog) => (
                <div className="col-lg-4">
                  <div className="blogs-shadow">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={allblog.attributes.image_url}
                        alt="Card image"
                      />
                      <div className="card-body">
                        <div className="card-subtitle">
                          <p>{allblog.attributes.small_label}</p>
                          <p className="blog-type">{allblog.attributes.tag}</p>
                        </div>
                        <h5 className="card-title">
                          {allblog.attributes.title}
                        </h5>
                        <p className="card-text">
                          {allblog.attributes.description
                            .split(" ")
                            .slice(0, 20)
                            .join(" ")}
                        </p>
                        <div className="blogs-btn-container">
                          <Link
                            to={`/blog/${allblog.id}`}
                            className="clipped-btns"
                          >
                            {allblog.attributes.blog_button.label}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

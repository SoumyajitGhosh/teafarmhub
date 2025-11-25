import { posts } from "@/data/blogs";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../common/Pagination";

export default function Blog4() {
  return (
    <div className="container">
      {/* blog grid */}
      <div id="masonry" className="dlab-blog-grid-3 row">
        {posts.map((elm, i) => (
          <div
            key={i}
            className="post card-container col-lg-3 col-md-4 col-sm-6 col-xs-12"
            style={{ marginBottom: "12px" }}
          >
            <div
              className="blog-post blog-grid blog-rounded blog-effect1"
              style={{
                maxWidth: "260px",
                margin: "0 auto",
                border: "4px solid var(--color-tertiary)",
                overflow: "hidden",
              }}
            >
              <div className="dlab-post-media dlab-img-effect">
                <Link href={`/blog-single/${elm.title}`}>
                  <Image
                    alt={elm.title || "Blog image"}
                    src={elm.imgSrc}
                    width={260}
                    height={170}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                </Link>
              </div>
              <div
                className="dlab-info"
                style={{ padding: "10px", background: "var(--color-tertiary)" }}
              >
                <div className="dlab-post-meta" style={{ marginBottom: "6px" }}>
                  <ul style={{ fontSize: "10px", marginBottom: "0" }}>
                    <li className="post-date">
                      <strong style={{ fontSize: "10px" }}>
                        {elm.date.day} {elm.date.month}
                      </strong>{" "}
                      <span> {elm.date.year}</span>
                    </li>
                    <li className="post-author">
                      By <a href="#">{elm.author}</a>
                    </li>
                  </ul>
                </div>
                <div
                  className="dlab-post-title"
                  style={{ marginBottom: "6px" }}
                >
                  <h4
                    className="post-title"
                    style={{
                      fontSize: "13px",
                      lineHeight: "1.3",
                      marginBottom: "0",
                      display: "-webkit-box",
                      WebkitLineClamp: "2",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    <Link href={`/blog-single/${elm.title}`}>{elm.title}</Link>
                  </h4>
                </div>
                <div className="dlab-post-text" style={{ marginBottom: "8px" }}>
                  <p
                    style={{
                      fontSize: "11px",
                      lineHeight: "1.4",
                      marginBottom: "0",
                      display: "-webkit-box",
                      WebkitLineClamp: "2",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      color: "white",
                    }}
                  >
                    {elm.text}
                  </p>
                </div>
                <div className="dlab-post-readmore">
                  <Link
                    href={`/blog-single/${elm.title}`}
                    title="READ MORE"
                    rel="bookmark"
                    className="site-button"
                    style={{ padding: "5px 14px", fontSize: "10px" }}
                  >
                    READ MORE
                    <i
                      className="ti-arrow-right"
                      style={{ marginLeft: "3px", fontSize: "9px" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* blog grid END */}
      {/* Pagination */}
      <div
        className="pagination-bx clearfix col-md-12 text-center"
        style={{ marginTop: "12px" }}
      >
        <ul className="pagination">
          <Pagination />
        </ul>
      </div>
      {/* Pagination END */}
    </div>
  );
}

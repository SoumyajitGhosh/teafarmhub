import BlogSingle from "@/components/blogs/BlogSingle";
import Link from "next/link";
import Comment from "@/components/blogs/Comment";
import Footer15 from "@/components/footer/Footer15";
import Header1 from "@/components/header/Header1";
import React from "react";
import { allBlogs } from "@/data/blogs";

export const metadata = {
  title: "Blog Single || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page({ params }) {
  const slug = params.slug.split("%20").join(" ");
  const blogItem =
    allBlogs.filter((elm) => elm.title == slug)[0] || allBlogs[0];
  return (
    <>
      <div className="page-wraper">
        <Header1 />
        <div className="page-content" style={{ background: "#fbf8e8" }}>
          {/* <div
            className="dlab-bnr-inr overlay-black-middle bg-pt"
            style={{ backgroundImage: "url(/images/banner/bnr1.jpg)" }}
          > */}
          {/* <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Blog Single</h1>
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li>Blog Single</li>
                  </ul>
                </div>
              </div>
            </div> */}
          {/* </div> */}
          <div className="content-area">
            <div className="container max-w900">
              <BlogSingle blogItem={blogItem} />
              <Comment />
            </div>
          </div>
        </div>
        <Footer15 />
      </div>
    </>
  );
}

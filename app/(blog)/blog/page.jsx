import Blog4 from "@/components/blogs/Blog4";
import Footer from "@/components/footer";
import React from "react";
import Link from "next/link";
import Header from "@/components/header";
export const metadata = {
  title: "Tea Blog - TeaFarmHub | Stories, Tips & Tea Culture",
  description: "Explore our tea blog for insights on organic tea cultivation, brewing techniques, health benefits, and the rich culture of tea. Learn from our tea experts and heritage.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header />
        <div
          className="page-content"
          style={{ background: "#fbf8e8", padding: "40px 0px" }}
        >
          {" "}
          {/* <div
            className="dlab-bnr-inr overlay-black-middle bg-pt"
            style={{ backgroundImage: "url(/images/banner/bnr1.jpg)" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Blog</h1>
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li>Blog</li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
          <div className="content-area">
            <Blog4 />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

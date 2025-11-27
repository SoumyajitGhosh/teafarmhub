import About from "@/components/about/About";
import Banner from "@/components/about/Banner";
import Facts from "@/components/common/Facts";
import Testimonials from "@/components/common/Testimonials2";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Team from "@/components/homes/Team";
import React from "react";

export const metadata = {
  title: "About || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper">
        <Header />
        <div className="page-content bg-white">
          {/* <Banner /> */}
          <About />
        </div>
        <Footer />
      </div>
    </>
  );
}

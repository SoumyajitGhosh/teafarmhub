import ClientSlider from "@/components/common/ClientSlider";
import Link from "next/link";
import Footer from "@/components/footer";
import Team1 from "@/components/team/Team1";
import React from "react";
import Header from "@/components/header";

export const metadata = {
  title: "Our Team - TeaFarmHub | Expert Tea Cultivators & Masters",
  description: "Meet our dedicated team of tea experts, master cultivators, and passionate tea artisans who bring generations of knowledge to every cup of organic tea we produce.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper">
        <Header />
        <div className="page-content" style={{ background: "#fbf8e8"}}>
          <div className="content-block">
            <Team1 />
            <div className="section-full content-inner bg-gray">
              <div className="container overflow-hidden">
                <ClientSlider />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

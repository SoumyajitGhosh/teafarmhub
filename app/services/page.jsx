import Footer from "@/components/footer";
import Header from "@/components/header";
import Service from "@/components/homes/Servies";

import Banner2 from "@/components/service/Banner2";
import Cta from "@/components/service/Cta";

import React from "react";

export const metadata = {
  title: "Our Services - TeaFarmHub | Tea Cultivation & Estate Tours",
  description: "Discover our comprehensive tea services including organic cultivation, estate tours, tea tasting experiences, and custom tea blending. Experience the art of tea making.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header />
        <div className="page-content bg-white">
          <Banner2 />
          <div className="content-block">
            <Cta />
            <Service />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

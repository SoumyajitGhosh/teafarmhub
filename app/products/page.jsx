import Footer from "@/components/footer";
import Link from "next/link";
import Shop from "@/components/shop/Shop";
import ShopFeatures from "@/components/shop/ShopFeatures";
import React from "react";
import Header from "@/components/header";
import ShopSidebar from "@/components/shop/ShopSidebar";

export const metadata = {
  title: "Our Tea Collection - TeaFarmHub | Premium Organic Teas",
  description: "Explore our curated selection of premium organic teas including Green Tea, Black Tea, Oolong Tea, and more. Hand-picked from our finest highland estates with traditional craftsmanship.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper">
        <Header />
        <div className="page-content" style={{ background: "#fbf8e8" }}>
          {/* <div
            className="dlab-bnr-inr overlay-black-middle bg-pt"
            style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Shop Grid</h1>
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li>Shop Grid</li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
          <ShopSidebar />

          <ShopFeatures />
        </div>
        <Footer />
      </div>
    </>
  );
}

import React from "react";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata = {
  title: "Contact Us - TeaFarmHub | Visit Our Tea Estate",
  description: "Get in touch with TeaFarmHub. Visit our organic tea plantation, book estate tours, or inquire about our premium tea products. We're here to serve you the finest teas.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header />
        <div className="page-content" style={{ background: "#fbf8e8" }}>
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

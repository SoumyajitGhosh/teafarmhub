import React from "react";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata = {
  title: "Contact 1 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
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

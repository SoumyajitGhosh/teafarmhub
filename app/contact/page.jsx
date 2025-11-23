import Header1 from "@/components/header/Header1";
import React from "react";
import Contact from "@/components/contact";
import Footer15 from "@/components/footer/Footer15";

export const metadata = {
  title: "Contact 1 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content" style={{ background: "#fbf8e8" }}>
          <Contact />
        </div>
        <Footer15 />
      </div>
    </>
  );
}

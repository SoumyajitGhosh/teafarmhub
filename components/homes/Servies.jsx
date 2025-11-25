import { services7 } from "@/data/services";
import React from "react";

export default function Servies() {
  return (
    <div
      className="section-full bg-secondry content-inner"
      style={{ padding: "30px 0" }}
    >
      <div className="container">
        <div
          className="section-head text-center text-white"
          style={{ marginBottom: "25px" }}
        >
          <h2
            className="title"
            style={{ fontSize: "28px", marginBottom: "12px" }}
          >
            A Tea Voyage
          </h2>
          <p style={{ fontSize: "13px", maxWidth: "700px", margin: "0 auto" }}>
            Transport to a world beyond with our iconic tea collections - 
            each variety cultivated in harmony with nature's rhythms and 
            cosmic energies of the moon and stars.
          </p>
        </div>
        <div className="section-content row text-black">
          {services7.map((service, index) => (
            <div
              key={index}
              className={`col-md-6 col-lg-4 col-sm-12 service-box style3 wow ${service.animation}`}
              data-wow-duration="2s"
              data-wow-delay={service.delay}
              style={{ marginBottom: "15px" }}
            >
              <div
                className="icon-bx-wraper"
                data-name={service.dataName}
                style={{ padding: "15px" }}
              >
                <div className="icon-lg" style={{ marginBottom: "12px" }}>
                  <a
                    href="#"
                    className="icon-cell"
                    style={{ width: "50px", height: "50px", fontSize: "24px" }}
                  >
                    <i className={service.icon} />
                  </a>
                </div>
                <div className="icon-content">
                  <h2
                    className="dlab-title"
                    style={{ fontSize: "16px", marginBottom: "8px" }}
                  >
                    {service.title}
                  </h2>
                  <p style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

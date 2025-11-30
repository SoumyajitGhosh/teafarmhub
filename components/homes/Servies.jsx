"use client";
import { services7 } from "@/data/services";
import React from "react";

export default function Services() {
  // Define gradient colors for each tile
  const gradients = [
    "linear-gradient(135deg, #e8dcc8 0%, #d4c4b0 100%)", // Beige gradient
    "linear-gradient(135deg, #d9cfc0 0%, #c5b5a0 100%)", // Light brown gradient
    "linear-gradient(135deg, #e0d6c8 0%, #ccc2b0 100%)", // Warm beige
    "linear-gradient(135deg, #d5cbbe 0%, #c1b1a0 100%)", // Muted brown
  ];

  return (
    <div
      className="section-full bg-secondry content-inner"
      style={{
        padding: "40px 0",
        background: "#fbf8e8",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          className="section-head text-center text-black"
          style={{ marginBottom: "40px" }}
        >
          <h2
            className="title"
            style={{
              fontSize: "28px",
              marginBottom: "12px",
              fontWeight: "600",
              color: "#2d2d2d",
            }}
          >
            A Tea Voyage
          </h2>
          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              fontSize: "16px",
              color: "#777",
              lineHeight: "1.8",
            }}
          >
            Transport to a world beyond with our iconic tea collections - each
            variety cultivated in harmony with nature's rhythms and cosmic
            energies of the moon and stars.
          </p>
        </div>

        {/* Services Grid - 4 Columns */}
        <div className="row">
          {services7.map((service, index) => (
            <div
              key={index}
              className={`col-lg-3 col-md-6 col-sm-6 col-12 wow ${service.animation}`}
              data-wow-duration="2s"
              data-wow-delay={service.delay}
              style={{
                marginBottom: "24px",
                paddingLeft: "12px",
                paddingRight: "12px",
              }}
            >
              {/* Service Card with Gradient */}
              <div
                style={{
                  background: gradients[index % gradients.length],
                  borderRadius: "8px",
                  padding: "32px 24px",
                  textAlign: "center",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "340px",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 12px 30px rgba(0,0,0,0.12)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(0,0,0,0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Decorative Corner Element */}
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    width: "80px",
                    height: "80px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "0 0 0 100%",
                  }}
                />

                {/* Icon Circle */}
                <div
                  style={{
                    marginBottom: "24px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255, 255, 255, 0.7)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  >
                    <i
                      className={service.icon}
                      style={{
                        fontSize: "32px",
                        color: "var(--color-button)",
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <div>
                    <h3
                      className="dlab-title"
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        marginBottom: "12px",
                        color: "#2d2d2d",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "12px",
                        lineHeight: "1.6",
                        color: "#555",
                        marginBottom: "0",
                      }}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Label */}
                  <div
                    style={{
                      marginTop: "20px",
                      paddingTop: "16px",
                      borderTop: "1px solid rgba(93, 64, 55, 0.2)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "11px",
                        color: "var(--color-button)",
                        fontWeight: "600",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        margin: "0",
                      }}
                    >
                      ₹ 1,299
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

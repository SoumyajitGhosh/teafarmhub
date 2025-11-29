"use client";

import { portfolioItems2 } from "@/data/projects";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      style={{
        backgroundImage: "url('/images/generated/bg-products2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "40px 0",
        opacity: 1,
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        backgroundBlendMode: "darken",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-12 mx-auto">
            {/* Section Header */}
            <div
              style={{
                textAlign: "center",
                marginBottom: "60px",
              }}
            >
              {/* <h2
            className="title"
            style={{
              marginBottom: "20px",
              fontSize: "48px",
              fontWeight: "300",
              color: "#1a1a1a",
              letterSpacing: "-0.02em",
              margin: "0 0 20px 0",
            }}
          > */}
              <h2
                className="title"
                style={{
                  fontSize: "28px",
                  marginBottom: "12px",
                  fontWeight: "600",
                  color: "#2d2d2d",
                }}
              >
                Our Tea Collection
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
                Explore our curated selection of premium organic teas, each
                product carefully crafted from our finest estates with
                generations of expertise.
              </p>
            </div>

            {/* Product Grid */}
            <div className="row">
              {portfolioItems2.map((item, i) => (
                <div key={i} className="col-lg-4 col-md-6 col-sm-6 m-b30">
                  <div
                    style={{
                      display: "block",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Product Image */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        paddingBottom: "100%",
                        overflow: "hidden",
                        borderRadius: "8px",
                        marginBottom: "20px",
                      }}
                    >
                      {/* Tag */}
                      {item.tag ? (
                        <div
                          style={{
                            position: "absolute",
                            top: "12px",
                            left: "12px",
                            backgroundColor: item.tagColor,
                            color: "#fff",
                            padding: "6px 14px",
                            fontSize: "10px",
                            fontWeight: "700",
                            letterSpacing: "0.5px",
                            borderRadius: "4px",
                            zIndex: 2,
                            textTransform: "uppercase",
                          }}
                        >
                          {item.tag}
                        </div>
                      ) : (
                        <></>
                      )}

                      {/* Main Image */}
                      <Image
                        src={item.image}
                        fill
                        alt={item.title || "Tea product"}
                        style={{
                          objectFit: "cover",
                          transition: "opacity 0.3s ease",
                          opacity: hoveredIndex === i ? 0 : 1,
                        }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      {/* Alternate Image (shown on hover) */}
                      <Image
                        src={item.image2 || item.image}
                        fill
                        alt={item.title || "Tea product"}
                        style={{
                          objectFit: "cover",
                          transition: "opacity 0.3s ease",
                          opacity: hoveredIndex === i ? 1 : 0,
                        }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Product Name */}
                    <h3
                      style={{
                        fontSize: "22px",
                        fontWeight: "600",
                        color: "#1a1a1a",
                        margin: "0 0 12px 0",
                        lineHeight: "1.3",
                        textAlign: "center",
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Product Description */}
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#666",
                        lineHeight: "1.6",
                        margin: "0",
                        textAlign: "center",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Products Button */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Link
                href="/products"
                style={{
                  padding: "16px 48px",
                  backgroundColor: "#8b674f",
                  color: "#fff",
                  borderRadius: "4px",
                  textDecoration: "none",
                  fontSize: "14px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontWeight: "600",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 12px rgba(139, 103, 79, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#6b5544";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 16px rgba(139, 103, 79, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#8b674f";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(139, 103, 79, 0.3)";
                }}
              >
                View All Products
                <i
                  className="fas fa-arrow-right"
                  style={{ fontSize: "14px" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
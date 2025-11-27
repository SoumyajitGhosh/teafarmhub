"use client";

import { portfolioItems2 } from "@/data/projects";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const filterItems = [
  { filter: "*", label: "All" },
  { filter: ".green-tea", label: "Green Tea" },
  { filter: ".black-tea", label: "Black Tea" },
  { filter: ".oolong-tea", label: "Oolong Tea" },
];

export default function Portfolio() {
  const [currentFilter, setCurrentFilter] = useState("*");
  const [filteredItems, setFilteredItems] = useState(portfolioItems2);

  const updateCategory = (val) => {
    setCurrentFilter(val);
    if (val === "*") {
      setFilteredItems(portfolioItems2);
    } else {
      const category = val.replace(".", "");
      setFilteredItems(
        portfolioItems2.filter((item) => item.categories === category)
      );
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/generated/bg-products2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "80px 0",
        opacity: 1,
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        backgroundBlendMode: "darken",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 60px" }}>
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
            style={{ fontSize: "28px", marginBottom: "8px" }}
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
            Explore our curated selection of premium organic teas, each product
            carefully crafted from our finest estates with generations of
            expertise.
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{ marginBottom: "50px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div className="site-filters m-b20" style={{ marginBottom: "0px" }}>
              <ul
                className="filters"
                data-bs-toggle="buttons"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                  listStyle: "none",
                  padding: "0",
                  margin: "0",
                }}
              >
                {filterItems.map((item) => (
                  <React.Fragment key={item.filter}>
                    <li
                      onClick={() => updateCategory(item.filter)}
                      className={`btn ${
                        currentFilter == item.filter ? "active" : ""
                      }`}
                      style={{ display: "inline-block" }}
                    >
                      <input type="radio" style={{ display: "none" }} />
                      <button
                        className="site-button btnhover20 outline outline-2 button-sm"
                        style={{
                          padding: "12px 28px",
                          fontSize: "12px",
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                          fontWeight: "500",
                          // border: `2px solid ${
                          //   currentFilter == item.filter ? "#8b674f" : "#d4c4b0"
                          // }`,
                          border: "1px solid #8b674f",
                          backgroundColor:
                            currentFilter == item.filter
                              ? "#8b674f"
                              : "transparent",
                          color:
                            currentFilter == item.filter ? "#fff" : "#8b674f",
                          borderRadius: "3px",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <span>{item.label}</span>
                      </button>
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Product Slider */}
        <div style={{ position: "relative" }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={60}
            slidesPerView={4}
            navigation={{
              prevEl: ".portfolio-prev",
              nextEl: ".portfolio-next",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 60,
              },
            }}
            loop={true}
            style={{ paddingBottom: "50px" }}
          >
            {filteredItems.map((item, i) => (
              <SwiperSlide key={i}>
                {/* Product Card Container */}
                <Link
                  href={`/portfolio-details/${item.title}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    height: "100%",
                    textDecoration: "none",
                    border: "1px solid #e5e5e5",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 4px 16px rgba(0,0,0,0.12)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 2px 8px rgba(0,0,0,0.08)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* Product Image Container */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      paddingBottom: "100%",
                      backgroundColor: "#f8f8f8",
                      overflow: "hidden",
                    }}
                  >
                    {/* Badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        backgroundColor: i % 3 === 0 ? "#dc2626" : "#8b674f",
                        color: "#fff",
                        padding: "6px 12px",
                        fontSize: "11px",
                        fontWeight: "700",
                        letterSpacing: "0.5px",
                        borderRadius: "4px",
                        zIndex: 2,
                        textTransform: "uppercase",
                      }}
                    >
                      {i % 3 === 0 ? "15% OFF" : "Best Seller"}
                    </div>

                    <Image
                      src={item.image}
                      fill
                      alt={item.title || "Tea product"}
                      style={{
                        objectFit: "cover",
                        padding: "20px",
                      }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>

                  {/* Product Info */}
                  <div
                    style={{
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      flex: 1,
                    }}
                  >
                    {/* Product Title */}
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#1a1a1a",
                        margin: "0",
                        lineHeight: "1.3",
                        minHeight: "48px",
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Rating */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "16px",
                            fontWeight: "700",
                            color: "#1a1a1a",
                          }}
                        >
                          4.8
                        </span>
                        <span
                          style={{
                            fontSize: "14px",
                            color: "#fbbf24",
                          }}
                        >
                          ★★★★★
                        </span>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div
                      style={{
                        fontSize: "13px",
                        color: "#666",
                        lineHeight: "1.6",
                        borderTop: "1px solid #e5e5e5",
                        paddingTop: "12px",
                      }}
                    >
                      <p style={{ margin: "0 0 4px 0", fontWeight: "600" }}>
                        Loose Leaf | 50g | 25 Cups
                      </p>
                      <p style={{ margin: "0 0 4px 0", color: "#8b674f" }}>
                        {item.categories.includes("green")
                          ? "Green Tea"
                          : item.categories.includes("black")
                          ? "Black Tea"
                          : "Oolong Tea"}
                      </p>
                      <p style={{ margin: "0", fontSize: "12px" }}>
                        Light, Aromatic & Sweet
                      </p>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      style={{
                        width: "100%",
                        padding: "14px",
                        backgroundColor: "#8b674f",
                        color: "#fff",
                        border: "none",
                        borderRadius: "6px",
                        fontSize: "14px",
                        fontWeight: "600",
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        marginTop: "auto",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#6b5544";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#8b674f";
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        // Add to cart functionality
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div
            className="portfolio-prev"
            style={{
              position: "absolute",
              left: "-30px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#8b674f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#6b5544";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#8b674f";
            }}
          >
            <i
              className="fas fa-chevron-left"
              style={{ color: "#fff", fontSize: "18px" }}
            />
          </div>
          <div
            className="portfolio-next"
            style={{
              position: "absolute",
              right: "-30px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#8b674f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#6b5544";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#8b674f";
            }}
          >
            <i
              className="fas fa-chevron-right"
              style={{ color: "#fff", fontSize: "18px" }}
            />
          </div>
        </div>

        {/* View All Products Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "60px",
          }}
        >
          <Link
            href="/shop"
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
            <i className="fas fa-arrow-right" style={{ fontSize: "14px" }} />
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #8b674f !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
        }
        @media (max-width: 1200px) {
          .portfolio-prev,
          .portfolio-next {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

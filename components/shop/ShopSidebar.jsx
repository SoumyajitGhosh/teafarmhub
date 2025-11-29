"use client";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { useContextElement } from "@/context/Context";
import React, { useState } from "react";
export default function ShopSidebar() {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const teaCategories = [
    { id: "all", name: "All Teas" },
    { id: "green", name: "Green Tea" },
    { id: "black", name: "Black Tea" },
    { id: "oolong", name: "Oolong Tea" },
    { id: "white", name: "White Tea" },
    { id: "herbal", name: "Herbal Tea" },
  ];

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    
    if (categoryId === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(categoryId)
      );
      setFilteredProducts(filtered);
    }
  };
  return (
    <div className="section-full content-inner">
      {/* Product */}
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 m-b30">
            <aside className="side-bar shop-categories sticky-top">
              <div className="widget recent-posts-entry">
                <div
                  className="dlab-accordion advanced-search toggle"
                  id="accordion1"
                >
                  <div className="panel">
                    <div className="acod-head">
                      <h5 className="acod-title">
                        <a data-bs-toggle="collapse" href="#categories">
                          Tea Categories
                        </a>
                      </h5>
                    </div>
                    <div id="categories" className="acod-body collapse show">
                      <div className="acod-content">
                        <div className="widget widget_services">
                          <ul>
                            {teaCategories.map((category) => (
                              <li
                                key={category.id}
                                style={{
                                  cursor: "pointer",
                                  fontWeight:
                                    selectedCategory === category.id
                                      ? "600"
                                      : "400",
                                  color:
                                    selectedCategory === category.id
                                      ? "#8b674f"
                                      : "#666",
                                }}
                                onClick={() => handleCategoryClick(category.id)}
                              >
                                <a>{category.name}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
          <div className="col-lg-9 col-md-8 m-b30">
            <div className="row">
              {filteredProducts.map((product, i) => (
                <div
                  key={product.id}
                  className="col-lg-4 col-md-6 col-sm-6 m-b30"
                >
                  <Link
                    href={`/shop-product-details/${product.title}`}
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
                      {/* Tag - Optional */}
                      {product.tag ? (
                        <div
                          style={{
                            position: "absolute",
                            top: "12px",
                            left: "12px",
                            backgroundColor: product.tagColor,
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
                          {product.tag}
                        </div>
                      ) : (
                        <></>
                      )}

                      {/* Main Image */}
                      <Image
                        src={product.imgSrc}
                        fill
                        alt={product.title || "Tea product"}
                        style={{
                          objectFit: "cover",
                          transition: "opacity 0.3s ease",
                          opacity: hoveredIndex === i ? 0 : 1,
                        }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      {/* Alternate Image (shown on hover) */}
                      <Image
                        src={product.imgSrc2 || product.imgSrc}
                        fill
                        alt={product.title || "Tea product"}
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
                      {product.title}
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
                      Premium organic tea, hand-picked from our finest estates
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Product END */}
    </div>
  );
}

"use client";
import Image from "next/image";
import { products } from "@/data/products";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
import React from "react";

export default function Shop() {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  return (
    <div className="section-full content-inner" style={{ padding: "28px 0" }}>
      {/* Product */}
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div
              key={product.id}
              className="col-lg-2 col-md-3 col-sm-4 col-6"
              style={{ marginBottom: "14px", padding: "0 6px" }}
            >
              <div
                className={`item-box m-b10 ${product.styleClass}`}
                style={{ maxWidth: "220px", margin: "0 auto" }}
              >
                <div className="item-img" style={{ position: "relative" }}>
                  <Image
                    alt={product.title || "Product"}
                    src={product.imgSrc}
                    width={220}
                    height={240}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "240px",
                      objectFit: "cover",
                    }}
                  />
                  {/* overlay buttons: size unchanged */}
                  <div className="item-info-in">
                    <ul>
                      <li>
                        <a
                          className={
                            isAddedToCartProducts(product.id) ? "added" : ""
                          }
                          onClick={() => addProductToCart(product.id)}
                        >
                          <i className="ti-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="ti-eye" />
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="ti-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="item-info text-center text-black p-a10"
                  style={{ padding: "8px 6px" }}
                >
                  <h6
                    className="item-title font-weight-500"
                    style={{ fontSize: "13px", marginBottom: "5px" }}
                  >
                    <Link href={`/shop-product-details/${product.title}`}>
                      {product.title}
                    </Link>
                  </h6>
                  <ul
                    className="item-review"
                    style={{ marginBottom: "5px", gap: "1px" }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <React.Fragment key={i}>
                        <li style={{ fontSize: "10px" }}>
                          <i
                            className={
                              i + 1 < product.rating
                                ? "fas fa-star text-yellow"
                                : i + 0.5 == product.rating
                                ? "fas fa-star-half-alt text-yellow"
                                : "far fa-star"
                            }
                          />
                        </li>{" "}
                      </React.Fragment>
                    ))}
                  </ul>
                  <h4
                    className="item-price"
                    style={{ fontSize: "14px", marginBottom: "0" }}
                  >
                    <del style={{ fontSize: "12px", color: "#999" }}>
                      ${product.price}
                    </del>{" "}
                    <span
                      className="text-primary"
                      style={{ fontSize: "14px", fontWeight: "600" }}
                    >
                      ${product.discountedPrice}
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Product END */}
    </div>
  );
}

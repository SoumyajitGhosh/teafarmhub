import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div
      className="section-full content-inner"
      style={{
        background: "linear-gradient(135deg, #f8f6f0 0%, #ebe8df 100%)",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Tea Leaf Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "40%",
          height: "100%",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30,10 Q35,15 30,20 Q25,15 30,10' fill='%235d4037' opacity='0.03'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row align-items-center">
          {/* Column 1: Circular Image */}
          <div
            className="col-lg-3 col-md-6 m-b30 wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "280px",
                  height: "280px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                  border: "8px solid #fff",
                }}
              >
                <Image
                  alt="Tea leaves close-up"
                  src="/images/generated/image23.jpg"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Column 2: Text Content */}
          <div
            className="col-lg-3 col-md-6 m-b30 wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div className="our-story" style={{ paddingLeft: "20px" }}>
              {/* Small Label */}
              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: "3px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  color: "#5d4037",
                  display: "block",
                  marginBottom: "20px",
                }}
              >
                Cultivated in Harmony
              </span>

              {/* Main Heading */}
              <h2
                className="title"
                style={{
                  fontSize: "40px",
                  lineHeight: "1.2",
                  marginTop: "0",
                  marginBottom: "20px",
                  fontWeight: "300",
                  color: "#2d2d2d",
                  letterSpacing: "-0.02em",
                }}
              >
                Created with <br />
                nature & <br />
                <span
                  style={{
                    color: "#5d4037",
                    fontWeight: "400",
                    fontStyle: "italic",
                  }}
                >
                  cosmic wisdom
                </span>
              </h2>

              {/* Description */}
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.8",
                  marginBottom: "24px",
                  color: "#666",
                }}
              >
                Our tea estate spans across six ridges, surrounded by forests
                and wildlife, where tea grows alongside wild flowers.
              </p>

              {/* Features */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginBottom: "24px",
                }}
              >
                {["Organic", "Biodynamic", "Fair Trade"].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "#5d4037",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "12px",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        color: "#5d4037",
                        fontWeight: "500",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href="/about"
                style={{
                  padding: "12px 28px",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontWeight: "600",
                  backgroundColor: "#5d4037",
                  color: "#fff",
                  border: "none",
                  borderRadius: "2px",
                  display: "inline-block",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
              >
                Our Heritage
              </Link>
            </div>
          </div>

          {/* Column 3: Circular Image */}
          <div
            className="col-lg-3 col-md-6 m-b30 wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.4s"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "280px",
                  height: "280px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                  border: "8px solid #fff",
                }}
              >
                <Image
                  alt="Tea processing"
                  src="/images/generated/image24.jpg"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />

                {/* Overlay Badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "30px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)",
                    padding: "12px 20px",
                    borderRadius: "20px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "10px",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      color: "#5d4037",
                      margin: 0,
                      fontWeight: "600",
                    }}
                  >
                    100% Organic
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Additional Content */}
          <div
            className="col-lg-3 col-md-6 m-b30 wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.5s"
          >
            <div style={{ paddingLeft: "20px" }}>
              {/* Quote */}
              <blockquote
                style={{
                  borderLeft: "3px solid #5d4037",
                  paddingLeft: "20px",
                  marginBottom: "32px",
                  fontStyle: "italic",
                  fontSize: "14px",
                  lineHeight: "1.7",
                  color: "#666",
                }}
              >
                "We follow the rhythm of nature and celestial calendar to
                determine the perfect time to pluck our tea leaves."
              </blockquote>

              {/* Stats Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: "20px",
                    borderRadius: "8px",
                    textAlign: "center",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "28px",
                      fontWeight: "300",
                      color: "#5d4037",
                      margin: "0 0 4px 0",
                      lineHeight: "1",
                    }}
                  >
                    70+
                  </p>
                  <p
                    style={{
                      fontSize: "9px",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      color: "#999",
                      margin: 0,
                      fontWeight: "500",
                    }}
                  >
                    Years
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: "20px",
                    borderRadius: "8px",
                    textAlign: "center",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "28px",
                      fontWeight: "300",
                      color: "#5d4037",
                      margin: "0 0 4px 0",
                      lineHeight: "1",
                    }}
                  >
                    250
                  </p>
                  <p
                    style={{
                      fontSize: "9px",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      color: "#999",
                      margin: 0,
                      fontWeight: "500",
                    }}
                  >
                    Hectares
                  </p>
                </div>
              </div>

              {/* Year Card */}
              <div
                style={{
                  backgroundColor: "#5d4037",
                  padding: "24px",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.8)",
                    margin: "0 0 8px 0",
                    fontWeight: "500",
                  }}
                >
                  Established
                </p>
                <p
                  style={{
                    fontSize: "36px",
                    fontWeight: "300",
                    color: "#fff",
                    margin: 0,
                    lineHeight: "1",
                  }}
                >
                  1955
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

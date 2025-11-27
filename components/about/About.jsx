"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function About() {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* Section 1: Circular Images with 4 Columns */}
      <div
        className="section-full content-inner"
        style={{
          background: "linear-gradient(135deg, #f8f6f0 0%, #ebe8df 100%)",
          padding: pathname !== "/" ? "160px 0 80px 0" : "80px 0",
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
                  padding: "0 15px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "280px",
                    paddingBottom: "100%",
                    borderRadius: "50%",
                    overflow: "hidden",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                    border: "8px solid #fff",
                  }}
                >
                  <Image
                    alt="Tea processing facility"
                    src="/images/generated/image21.jpg"
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
                <h2
                  className="title"
                  style={{
                    fontSize: "28px",
                    lineHeight: "1.3",
                    marginBottom: "12px",
                    fontWeight: "600",
                  }}
                >
                  Cultivating Excellence in
                  <br />
                  <span className="text-primary">Premium Tea</span>
                </h2>

                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: "1.6",
                    marginBottom: "20px",
                    color: "#666",
                  }}
                >
                  Our tea estate has been producing the finest organic teas for
                  generations. From our lush gardens to your cup, we ensure
                  every leaf embodies the perfect balance of tradition and
                  quality.
                </p>

                <Image
                  width={150}
                  alt="Director signature"
                  src="/images/sign.png"
                  height={55}
                  style={{ marginBottom: "10px" }}
                />

                <h4
                  style={{
                    fontSize: "16px",
                    marginBottom: "4px",
                    fontWeight: "600",
                  }}
                >
                  Rajesh Kumar
                </h4>

                <span style={{ fontSize: "12px", color: "#777" }}>
                  Estate Manager
                </span>
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
                  padding: "0 15px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "280px",
                    paddingBottom: "100%",
                    borderRadius: "50%",
                    overflow: "hidden",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                    border: "8px solid #fff",
                  }}
                >
                  <Image
                    alt="Tea estate landscape"
                    src="/images/generated/image23.jpg"
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
                      Since 1955
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: Duplicate Text Content */}
            <div
              className="col-lg-3 col-md-6 m-b30 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.5s"
            >
              <div style={{ paddingLeft: "20px" }}>
                <h2
                  className="title"
                  style={{
                    fontSize: "28px",
                    lineHeight: "1.3",
                    marginBottom: "12px",
                    fontWeight: "600",
                  }}
                >
                  Sustainable Farming
                  <br />
                  <span className="text-primary">Natural Methods</span>
                </h2>

                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: "1.6",
                    marginBottom: "20px",
                    color: "#666",
                  }}
                >
                  We practice eco-friendly cultivation methods, nurturing our
                  tea gardens with care and respect for nature. Our commitment
                  to sustainability ensures the finest quality while preserving
                  the environment for future generations.
                </p>

                <Image
                  width={150}
                  alt="Director signature"
                  src="/images/sign.png"
                  height={55}
                  style={{ marginBottom: "10px" }}
                />

                <h4
                  style={{
                    fontSize: "16px",
                    marginBottom: "4px",
                    fontWeight: "600",
                  }}
                >
                  Priya Sharma
                </h4>

                <span style={{ fontSize: "12px", color: "#777" }}>
                  Sustainability Director
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Video Section (Original) */}
      <div
        className="section-full content-inner video-section"
        style={{
          backgroundImage: 'url("/images/background/bg-video.png")',
          background: "#fbf8e8",
          padding: "30px 0",
        }}
      >
        <div className="container">
          <div className="section-content">
            <div className="row d-flex">
              <div
                className="col-lg-6 col-md-12 m-b30"
                style={{ paddingRight: "15px" }}
              >
                <div
                  className="video-bx"
                  style={{ maxWidth: "480px", margin: "0 auto" }}
                >
                  <Image
                    alt="Tea processing video thumbnail"
                    src="/images/about/pic5.jpg"
                    width="480"
                    height="320"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                    }}
                  />
                  <div className="video-play-icon">
                    <a
                      onClick={() => setOpen(true)}
                      className="popup-youtube video bg-primary"
                      style={{
                        width: "60px",
                        height: "60px",
                        lineHeight: "60px",
                        fontSize: "20px",
                      }}
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-12 m-b30 align-self-center video-infobx"
                style={{ paddingLeft: "15px" }}
              >
                <div className="content-bx1">
                  <h2
                    className="m-b15 title"
                    style={{
                      fontSize: "28px",
                      lineHeight: "1.3",
                      marginBottom: "12px",
                    }}
                  >
                    Heritage Tea Estate
                    <br />
                    <span className="text-primary"> Since 1955</span>
                  </h2>
                  <p
                    className="m-b30"
                    style={{
                      fontSize: "13px",
                      lineHeight: "1.6",
                      marginBottom: "20px",
                      color: "#666",
                    }}
                  >
                    For over six decades, our family-owned estate has been
                    dedicated to producing exceptional teas. We blend
                    time-honored techniques with modern innovations to create
                    teas that capture the essence of our beautiful hillside
                    gardens.
                  </p>
                  <Image
                    width={150}
                    alt="Director signature"
                    src="/images/sign.png"
                    height="55"
                    style={{ marginBottom: "10px" }}
                  />
                  <h4
                    className="m-b0"
                    style={{
                      fontSize: "16px",
                      marginBottom: "4px",
                      fontWeight: "600",
                    }}
                  >
                    Arun Chatterjee
                  </h4>
                  <span
                    className="font-14"
                    style={{ fontSize: "12px", color: "#777" }}
                  >
                    Tea Master & Director
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="_FRZVScwggM"
        onClose={() => setOpen(false)}
      />
    </>
  );
}

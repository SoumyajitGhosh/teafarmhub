"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <>
      <div className="hero-sec hero-section relative full-height video-section overlay3 home-slider-12">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="beer-video"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="/video/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content text-center content-center">
          <Image
            alt="Tea Leaf Icon"
            className="beer-icon hero-icon-responsive"
            src="/images/main-slider/green_tea.png"
            width="160"
            height="160"
          />
          {/* <span className="seperator" /> */}
          <h1
            className="title text-center style4 hero-title-responsive"
            style={{
              fontWeight: 900,
              textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)",
            }}
          >
            TeaFarmHub
          </h1>
          <div
            className="description hero-description-responsive"
            style={{
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
              fontWeight: 600,
              lineHeight: "30px",
            }}
          >
            Fine teas crafted in harmony with nature, nurtured with tradition
            and cosmic wisdom.
            <br className="hide-mobile-br" />
            From our highland plantations to your cup - experience tea as nature
            intended.
          </div>
          <div className="hero-buttons-responsive">
            <Link
              className="site-button hover-bg-white-btn"
              href="/contact"
              style={{ borderRadius: "5px" }}
            >
              <i
                className="la la-phone icon"
                style={{
                  fontSize: "30px",
                  marginTop: "-5px",
                  marginRight: "8px",
                }}
              />
              Visit Our Estate
            </Link>
            <Link
              className="site-button hover-bg-white-btn"
              href="/products"
              style={{ borderRadius: "5px" }}
            >
              <i
                className="la la-leaf icon"
                style={{
                  fontSize: "30px",
                  marginTop: "-5px",
                  marginRight: "8px",
                }}
              />
              Discover Premium Teas
            </Link>
          </div>
        </div>
        <ul className="social-icons social-icons-responsive">
          <li>
            <a href="#">
              <i className="fa fa-facebook" />
            </a>
          </li>{" "}
          <li>
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
          </li>{" "}
          <li>
            <a href="#">
              <i className="fa fa-instagram" />
            </a>
          </li>
        </ul>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-icon-responsive {
            width: 50px !important;
            height: 50px !important;
          }

          .hero-title-responsive {
            font-size: 32px !important;
            line-height: 1.2 !important;
            margin-bottom: 15px !important;
          }

          .hero-description-responsive {
            font-size: 14px !important;
            line-height: 1.6 !important;
            padding: 0 20px !important;
            margin-bottom: 25px !important;
          }

          .hide-mobile-br {
            display: none;
          }

          .hero-buttons-responsive {
            display: flex;
            flex-direction: column;
            gap: 12px;
            align-items: center;
            width: 100%;
            padding: 0 20px;
          }

          .hero-buttons-responsive .site-button {
            width: 100%;
            max-width: 280px;
            font-size: 13px !important;
            padding: 12px 20px !important;
            white-space: nowrap;
          }

          .social-icons-responsive {
            bottom: 20px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            flex-direction: row !important;
            gap: 15px;
            width: auto !important;
          }

          .social-icons-responsive li {
            margin: 0 !important;
          }

          .hero-content {
            padding: 20px 15px !important;
          }

          .seperator {
            width: 60px !important;
            margin: 10px auto !important;
          }
        }

        @media (max-width: 480px) {
          .hero-icon-responsive {
            width: 40px !important;
            height: 40px !important;
          }

          .hero-title-responsive {
            font-size: 28px !important;
          }

          .hero-description-responsive {
            font-size: 13px !important;
          }

          .hero-buttons-responsive .site-button {
            font-size: 12px !important;
            padding: 10px 18px !important;
          }
        }

        @media (min-width: 769px) {
          .hero-buttons-responsive {
            display: inline-block;
          }

          .hero-buttons-responsive .site-button {
            margin: 0 8px;
          }
        }
      `}</style>
    </>
  );
}
